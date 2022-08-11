import React, { FunctionComponent, useState } from 'react';
import { TextInput as TextInputRN, View, TextStyle, Text } from 'react-native';
import style from './styles';
import { SvgIcon } from '@components/svg-icon';
import { SizedBox } from '@components/sized-box';

interface Props {
  onSubmit?: () => void;
  onPress?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onChangeText?: (label: string, value: string) => void;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
  value?: any;
  containerStyle?: any;
  inputStyle?: any;
  marginTop?: number;
  textAlign?: 'left' | 'right' | 'center';
  error?: string;
  editable?: boolean;
  maxLength?: number;
  placeholder?: any;
  inputErrMsg?: any;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad';
  textPaddingVertical?: number;
  bottomTitle?: string;
  rightIcon?: string;
  rightButtonIcon?: string;
  shouldFocus?: boolean;
  onTouchStart?: () => void;
  [x: string]: any;
  lessMargin?: boolean;
  isError?: boolean;
  label?: string;
  onIconPress?: () => void;
  bottomTitleStyle?: TextStyle;
  isBorderedError?: boolean;
  rightComponent?: React.ReactNode;
  inputStyles?: any;
  inputContainerStyle?: any;
}

export const TextInputHook: FunctionComponent<Props> = ({
  containerStyle,
  inputStyle,
  placeholder,
  placeholderTextColor,
  keyboardType,
  onSubmit,
  editable = true,
  textAlign,
  textAlignVertical,
  multiline,
  refValue,
  value,
  maxLength,
  type,
  rightIcon,
  onTouchStart,
  onChangeText = () => {},
  ...rest
}) => {
  return (
    <>
      <View
        style={[style.container, containerStyle]}
        onTouchStart={onTouchStart}>
        {rightIcon && (
          <View style={style.rightIcon}>
            <SvgIcon name={rightIcon} size={27} />
          </View>
        )}
        <TextInputRN
          {...rest}
          maxLength={maxLength}
          autoCorrect={false}
          editable={editable}
          secureTextEntry={type === 'password'}
          textAlign={textAlign}
          textAlignVertical={textAlignVertical || 'top'}
          multiline={multiline}
          onSubmitEditing={onSubmit}
          ref={refValue}
          // @ts-ignore
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          style={[
            style.inputContainer,
            inputStyle,
            // !editable && { color: palette.muted },
          ]}
          autoCapitalize={'none'}
        />
      </View>
    </>
  );
};

export const InputBox: FunctionComponent<Props> = ({
  placeholder,
  placeholderTextColor,
  keyboardType,
  onSubmit,
  editable = true,
  textAlign,
  textAlignVertical,
  multiline,
  refValue,
  value,
  maxLength,
  type,
  onChangeText = () => {},
  rightComponent,
  label,
  rightIcon,
  inputStyles,
  inputContainerStyle,
  ...rest
}) => {
  const [secure, setSecure] = useState(type === 'password');
  return (
    <View>
      {label && (
        <View>
          <Text style={style.label}>{label}</Text>
          <SizedBox height={8} />
        </View>
      )}
      <View style={[style.inputBox, inputStyles]}>
        {rightIcon && (
          <View style={style.rightIcon}>
            <SvgIcon name={rightIcon} size={27} />
          </View>
        )}
        <TextInputRN
          {...rest}
          maxLength={maxLength}
          autoCorrect={false}
          editable={editable}
          secureTextEntry={secure}
          textAlign={textAlign}
          textAlignVertical={textAlignVertical || 'center'}
          multiline={multiline}
          onSubmitEditing={onSubmit}
          ref={refValue}
          // @ts-ignore
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor || '#ffffff71'}
          keyboardType={keyboardType}
          style={[style.input, inputContainerStyle]}
        />
        {type === 'password' && (
          <SvgIcon
            name={!secure ? 'eye-open' : 'eye-closed'}
            size={20}
            onPress={() => {
              setSecure(!secure);
            }}
          />
        )}
        {rightComponent}
      </View>
    </View>
  );
};
