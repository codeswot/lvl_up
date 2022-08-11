/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { appLogo, signUpBg } from '@assets/images';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CustomTextInput } from '@components/customTextInput';
import { ImageBgWrapper, Screen } from '@components';
import { Button } from '@components/buttons';
import styles from './styles';
import { SizedBox } from '@components/sized-box';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';

import { useForm, Controller, FieldError } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterSchema } from '@model/schemas';
import useThunkDispatch from '@hooks/useThunkDispatch';
import useSelector from '@hooks/useSelector';
import { AuthActionTypes } from '@redux/actionTypes';
import { AuthActions } from '@redux/actions';

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cPassword: string;
}
export const SignUpScreen: FC<NativeStackScreenProps<any>> = ({
  navigation,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(RegisterSchema),
    
   
  });

  const { isLoading, signUpError, signupData } = useSelector<any>(
    (d) => d.auth
  );
  const [isEmailAvailable, setIsEmailAvailable] = useState(false);

  const dispatch = useThunkDispatch();

  const onSubmit = ({ firstName, lastName, email, password }: IFormInputs) => {
    let newData = {
      ...signupData,
      email,
      password,
      data: { ...signupData.data, firstName, lastName },
    };

    dispatch({ type: AuthActionTypes.SET_SIGNUP_DATA, payload: newData });
    navigation.navigate('RegistrationForm');
  };

  return (
    <ImageBgWrapper url={signUpBg}>
      <View style={styles.overlay} />
      <View style={[styles.overlay, styles.darkOverLay]} />
      <KeyboardAwareScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <Image source={appLogo} style={styles.logo} />

          <View style={styles.mainView}>
            <Text style={styles.Welcome}>Create an account</Text>
            <SizedBox height={9} />
            <Text style={styles.pSignin}>It's quick and easy</Text>
            <SizedBox height={25} />
          </View>
          <View style={styles.subContainer}>
            <View style={styles.smallInput}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <CustomTextInput
                    onChangeText={(e: any) => {
                      onChange(e);
                      if (signUpError?.show) {
                        dispatch({
                          type: AuthActionTypes.USER_LOGGED_IN_ERROR,
                          payload: { show: false, message: '' },
                        });
                      }
                    }}
                    error={errors.firstName || signUpError?.show ? true : false}
                    value={value}
                    errorMessage={
                      errors.firstName?.message || signUpError?.message
                    }
                    label={'First Name'}
                  />
                )}
                name="firstName"
              />
            </View>
            <SizedBox width={30} />
            <View style={styles.smallInput}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <CustomTextInput
                    onChangeText={(e: any) => {
                      onChange(e);
                      if (signUpError?.show) {
                        dispatch({
                          type: AuthActionTypes.USER_LOGGED_IN_ERROR,
                          payload: { show: false, message: '' },
                        });
                      }
                    }}
                    error={errors.lastName || signUpError?.show ? true : false}
                    value={value}
                    errorMessage={
                      errors.lastName?.message || signUpError?.message
                    }
                    label={'Last Name'}
                  />
                )}
                name="lastName"
              />
            </View>
          </View>

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
                      if (signUpError?.show) {
                        dispatch({
                          type: AuthActionTypes.USER_LOGGED_IN_ERROR,
                          payload: { show: false, message: '' },
                        });
                      }
                    }}
                    error={errors.email || signUpError?.show ? true : false}
                    value={value}
                    errorMessage={errors.email?.message || signUpError?.message}
                    onBlur={() => {
                      if (!value) {
                        return;
                      }
                      dispatch(
                        AuthActions.checkEmailAvailability(
                          { email: value },
                          (available: boolean) => {
                            !available &&
                              setError(
                                'email',
                                {
                                  type: 'custom',
                                  message:
                                    'This email already exists, please enter a different email address or proceed to login.',
                                },
                                { shouldFocus: true }
                              );
                            setIsEmailAvailable(available);
                          }
                        )
                      );
                    }}
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
                render={({ field: { onChange, value } }) => {
                  
                  return (
                    <CustomTextInput
                      onChangeText={(e: any) => {
                        onChange(e);
                        if (signUpError?.show) {
                          dispatch({
                            type: AuthActionTypes.USER_LOGGED_IN_ERROR,
                            payload: { show: false, message: '' },
                          });
                        }
                      }}
                      error={
                        errors.password || signUpError?.show ? true : false
                      }
                      value={value}
                      errorMessage={
                        errors.password?.message || signUpError?.message
                      }
                      label={'Password'}
                      isPassword={true}
                    />
                  );
                }}
                name="password"
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
                      if (signUpError?.show) {
                        dispatch({
                          type: AuthActionTypes.USER_LOGGED_IN_ERROR,
                          payload: { show: false, message: '' },
                        });
                      }
                    }}
                    error={errors.cPassword || signUpError?.show ? true : false}
                    value={value}
                    errorMessage={
                      errors.cPassword?.message || signUpError?.message
                    }
                    label={'Confirm Password'}
                    isPassword={true}
                  />
                )}
                name="cPassword"
              />
            </View>
          </View>
          <SizedBox height={18} />
          <View style={styles.btnContainer}>
            <Button
              containerStyle={styles.button}
              title={'Sign Up'}
              onPress={handleSubmit(onSubmit)}
              loading={isLoading}
              disabled={!isEmailAvailable}
            />
          </View>
          <SizedBox height={40} />
          <TouchableOpacity
            style={styles.createView}
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}
          >
            <Text style={styles.accountText}> Already have an account?</Text>
            <Text style={styles.forgotText}>Sign In </Text>
          </TouchableOpacity>
          <SizedBox height={40} />
        </View>
      </KeyboardAwareScrollView>
    </ImageBgWrapper>
  );
};
