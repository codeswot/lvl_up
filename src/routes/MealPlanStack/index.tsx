import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ClearDay, CopyDay, MealPlanHome } from '@screens';

const MealPlanStack = createNativeStackNavigator();

const MealPlanStackScreens = () => {
  return (
    <MealPlanStack.Navigator initialRouteName={'MealPlanHome'}>
      <MealPlanStack.Screen
        name="MealPlanHome"
        component={MealPlanHome}
        options={{
          headerShown: false,
        }}
      />
      <MealPlanStack.Screen
        name="ClearDay"
        component={ClearDay}
        options={{
          headerShown: false,
        }}
      />
      <MealPlanStack.Screen
        name="CopyDay"
        component={CopyDay}
        options={{
          headerShown: false,
        }}
      />
    </MealPlanStack.Navigator>
  );
};

export default MealPlanStackScreens;
