import React, { FC } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { appLogo, signinBg } from '@assets/images';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CustomTextInput } from '@components/customTextInput';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { ImageBgWrapper, AnimatedView } from '@components';
import { Button } from '@components/buttons';
import styles from './styles';
import { SizedBox } from '@components/sized-box';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '@model/schemas';
import useThunkDispatch from '@hooks/useThunkDispatch';
import { AuthActions } from '@redux/actions';
import useSelector from '@hooks/useSelector';
import { AuthActionTypes } from '@redux/actionTypes';

interface IFormInputs {
  email: string;
  password: number;
}

export const SignInScreen: FC<NativeStackScreenProps<any>> = ({
  navigation,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(LoginSchema),
  });

  const { isLoading, error } = useSelector<any>(d => d.auth);

  const dispatch = useThunkDispatch();

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    dispatch(
      AuthActions.loginUser({
        username: data?.email,
        password: data?.password,
      }),
    );
  };

  return (
    <ImageBgWrapper url={signinBg}>
      <View style={styles.overlay} />
      <View style={[styles.overlay, styles.darkOverLay]} />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        <View style={styles.content}>
          <AnimatedView animation={'fadeIn'} duration={1000} easing="ease-in">
            <Image source={appLogo} style={styles.logo} />
          </AnimatedView>
          <View style={styles.mainView}>
            <Text style={styles.Welcome}>Welcome Back!</Text>
            <SizedBox height={9} />
            <Text style={styles.pSignin}>Please sign in</Text>
          </View>
          <SizedBox height={18} />
          {error?.show && <Text style={styles.error}>{error?.message}</Text>}
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
                      if (error?.show) {
                        dispatch({
                          type: AuthActionTypes.USER_LOGGED_IN_ERROR,
                          payload: { show: false, message: '' },
                        });
                      }
                    }}
                    error={errors.email || error?.show ? true : false}
                    value={value}
                    errorMessage={errors.email?.message}
                    label={'Email Address'}
                  />
                )}
                name="email"
              />
            </View>
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
                      if (error?.show) {
                        dispatch({
                          type: AuthActionTypes.USER_LOGGED_IN_ERROR,
                          payload: { show: false, message: '' },
                        });
                      }
                    }}
                    error={errors.password || error?.show ? true : false}
                    value={value}
                    errorMessage={errors.password?.message}
                    label={'Password'}
                    isPassword={true}
                  />
                )}
                name="password"
              />
            </View>
          </View>
          <SizedBox height={18} />
          <View style={styles.btnContainer}>
            <View style={styles.forgotView}>
              <Text
                style={styles.forgotText}
                onPress={() => {
                  navigation.navigate('ForgotPasswordScreen');
                }}>
                {' '}
                Forgot Password?
              </Text>
            </View>

            <Button
              containerStyle={styles.button}
              title={'Sign In'}
              onPress={handleSubmit(onSubmit)}
              loading={isLoading}
            />
            <SizedBox height={40} />
            <TouchableOpacity
              style={styles.createView}
              onPress={() => {
                navigation.navigate('SignUpScreen');
              }}>
              <Text style={styles.forgotText}>
                {' '}
                New to <Text style={styles.bold}>LEVEL UP</Text> FITNESS?
              </Text>
              <Text style={styles.forgotText}>Create account</Text>
            </TouchableOpacity>
            <SizedBox height={40} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ImageBgWrapper>
  );
};
