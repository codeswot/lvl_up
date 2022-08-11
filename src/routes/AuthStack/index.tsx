import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SignUpScreen,
  RegistrationForm,
  SignInScreen,
  Welcome,
  ForgotPasswordScreen,
  CreateAccountTwo,
  CreateAccountThree,
  CreateAccountFour,
  CreateAccountFive,
  FinalStep,
} from '@screens';
import { WeightIn } from '@screens/auth/weightIn/weight';
import { Result } from '@screens/auth/weightIn/results';

const AuthStack = createNativeStackNavigator();
const AuthStackScreens = () => {
  return (
    <AuthStack.Navigator initialRouteName="Welcome">
      <AuthStack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="RegistrationForm"
        component={RegistrationForm}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />

      <AuthStack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="CreateAccountTwo"
        component={CreateAccountTwo}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="CreateAccountThree"
        component={CreateAccountThree}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="CreateAccountFour"
        component={CreateAccountFour}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="CreateAccountFive"
        component={CreateAccountFive}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="WeightIn"
        component={WeightIn}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Result"
        component={Result}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="FinalStep"
        component={FinalStep}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreens;
