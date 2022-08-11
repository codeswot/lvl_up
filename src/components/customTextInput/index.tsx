import { SvgIcon } from '@components';
import { AnimatedView } from '@components/animated-view';
import { RW } from '@helpers/responsive';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import styles from './styles';

interface Props {
  label?: string;
  placeholder?: string;
  value?: any;
  onChangeText?: any;
  onFocus?: () => void;
  onBlur?: () => void;
  errorMessage?: string;
  error?: boolean;
  isPassword?: boolean;
  containerStyle?: any;
  height?: Number;
  width?: Number;
}
export const CustomTextInput = React.forwardRef<any, Props>(
  (
    {
      label = '',
      onChangeText,
      onFocus,
      onBlur,
      errorMessage,
      value,
      error,
      isPassword,
    },
    ref,
  ) => {
    const [secure, setSecure] = useState(isPassword);
    return (
      <>
      <View style={[
        styles.main,
        error && styles.errorColor,
        isPassword && {paddingRight: RW(32)}
      ]}>
        <FloatingLabelInput
          // @ts-ignore
          ref={ref}
          label={label}
          isPassword={secure}
          containerStyles={StyleSheet.flatten([styles.floating, isPassword && {width:'60%'}]) }
          // @ts-ignore
          customLabelStyles={styles.lable}
          autoCapitalize={'none'}
          inputStyles={styles.input}
          value={value ? value : ''}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          customShowPasswordComponent={<Text>{null}</Text>}
          customHidePasswordComponent={<Text>{null}</Text>}
        />
        {isPassword && (
          <SvgIcon
            name={!secure ? 'eye-open' : 'eye-closed'}
            size={20}
            onPress={() => {
              setSecure(!secure);
            }}
            containerStyle={{marginRight: RW(38)}}
          />
        )}
      </View>
      {error && (
          <AnimatedView animation="slideInLeft">
            <Text style={styles.error}>{errorMessage}</Text>
          </AnimatedView>
        )}
      </>
    );
  },
);
