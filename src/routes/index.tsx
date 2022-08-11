import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStackScreens from './AuthStack';
import AppStackScreens from './AppStack/index';
import useSelector from '@hooks/useSelector';
import { Splash } from '@screens';
import { INITIAL_STATE_TYPE } from '@redux/reducers/AuthReducer';

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  const { isSplashVisible, isLoggedIn } = useSelector<INITIAL_STATE_TYPE>(
    (store: any) => store.auth,
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        {isSplashVisible && <Stack.Screen name="Splash" component={Splash} />}
        {!isLoggedIn && (
          <Stack.Screen name="Auth" component={AuthStackScreens} />
        )}
        {isLoggedIn && <Stack.Screen name="Home" component={AppStackScreens} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
