import React, { FC, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { appLogo, forgotBg, union } from '@assets/images';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CustomTextInput } from '@components/customTextInput';
import { ImageBgWrapper, AnimatedView, Screen } from '@components';
import { Button } from '@components/buttons';
import styles from './styles';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { SizedBox } from '@components/sized-box';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object } from 'yup';
import useSelector from '@hooks/useSelector';
import { INITIAL_STATE_TYPE } from '@redux/reducers/AuthReducer';
import useThunkDispatch from '@hooks/useThunkDispatch';
import { AuthActions } from '@redux/actions';
import { AuthActionTypes } from '@redux/actionTypes';
interface IFormInputs {
  email: string;
}

const schema = object({
  email: string()
    .email('Please enter a valid email address')
    .required('Email is required'),
});

export const ForgotPasswordScreen: FC<NativeStackScreenProps<any>> = ({
  navigation,
}) => {
  const [flag, setFlag] = useState(false);

  const dispatch = useThunkDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const { resetPassError } = useSelector<INITIAL_STATE_TYPE>(
    (d: any) => d.auth,
  );

  console.log({ resetPassError });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => {
    setIsLoading(true);
    dispatch(
      AuthActions.resetPassword(data, (error?: boolean) => {
        setIsLoading(false);
        if (error) {
          return;
        }
        setFlag(true);
      }),
    );
  };

  return (
    <ImageBgWrapper url={forgotBg}>
      <View style={styles.overlay} />
      <View style={[styles.overlay, styles.darkOverLay]} />
      <Screen>
        <View style={styles.content}>
          <AnimatedView animation={'fadeIn'} duration={1000} easing="ease-in">
            <Image source={appLogo} />
          </AnimatedView>
          <SizedBox height={120} />
          {!flag ? (
            <KeyboardAwareScrollView style={styles.container}>
              <View style={styles.mainView}>
                <Text style={styles.welcome}>Reset your password</Text>
                <SizedBox height={24} />
                <Text style={styles.pSignin}>
                  Enter the email address associated with your account.
                </Text>
              </View>
              <SizedBox height={20} />
              <View style={styles.inView}>
                <View style={styles.inputView}>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                      <CustomTextInput
                        onChangeText={(e: any) => {
                          onChange(e);
                          if (resetPassError?.show) {
                            dispatch({
                              type: AuthActionTypes.USER_RESET_PASS_ERROR,
                              payload: { show: false, message: '' },
                            });
                          }
                        }}
                        error={
                          errors.email || resetPassError?.show ? true : false
                        }
                        value={value}
                        errorMessage={
                          errors.email?.message || resetPassError?.message
                        }
                        label={'Email Address'}
                      />
                    )}
                    name="email"
                  />
                </View>
              </View>
              <SizedBox height={18} />
              <Button
                containerStyle={styles.button}
                title={'Reset Password'}
                onPress={handleSubmit(onSubmit)}
                loading={isLoading}
              />
              <SizedBox height={60} />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignInScreen');
                }}>
                <Text style={styles.forgotText}>
                  <Text style={styles.goSignin}>Go back to</Text> Sign In
                </Text>
              </TouchableOpacity>
            </KeyboardAwareScrollView>
          ) : (
            <View style={styles.mainView}>
              <SizedBox height={15} />
              <View style={styles.unionBox}>
                <Image source={union} />
              </View>

              <SizedBox height={60} />
              <View style={styles.mainView}>
                <Text style={styles.welcome}>
                  Check your email {'\n'} to set a new password
                </Text>
                <SizedBox height={15} />
                <Text style={styles.pSignin}>
                  An email has just been sent to you with a link to reset your
                  password.
                </Text>
              </View>
              <SizedBox height={45} />
              <Button
                containerStyle={styles.button}
                title={'Go back to Sign In'}
                onPress={() => {
                  navigation.navigate('SignInScreen');
                }}
              />
            </View>
          )}
        </View>
      </Screen>
    </ImageBgWrapper>
  );
};
