import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens';
import CreateRecipeStackScreens from '@routes/CreateRecipeStack';
import MealPlanStackScreens from '@routes/MealPlanStack';
const AppStack = createNativeStackNavigator();

const AppStackScreens = () => {
  return (
    <AppStack.Navigator initialRouteName={'Home'}>
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          animation: 'slide_from_right',
        }}
      />

      <AppStack.Screen
        name="CreateRecipe"
        component={CreateRecipeStackScreens}
        options={{
          headerShown: true,
          animation: 'slide_from_right',
        }}
      />
      <AppStack.Screen
        name="MealPlan"
        component={MealPlanStackScreens}
        options={{
          headerShown: true,
          animation: 'slide_from_right',
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppStackScreens;
