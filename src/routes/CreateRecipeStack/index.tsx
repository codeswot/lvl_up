import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AddIngredients,
  CreateRecipe,
  IngredientDetails,
  RecipeHome,
} from '@screens';
const CreateRecipeStack = createNativeStackNavigator();

const CreateRecipeStackScreens = () => {
  return (
    <CreateRecipeStack.Navigator initialRouteName={'RecipeHome'}>
      <CreateRecipeStack.Screen
        name="RecipeHome"
        component={RecipeHome}
        options={{
          headerShown: false,
        }}
      />
      <CreateRecipeStack.Screen
        name="AddIngredients"
        component={AddIngredients}
        options={{
          headerShown: false,
        }}
      />
      <CreateRecipeStack.Screen
        name="IngredientDetails"
        component={IngredientDetails}
        options={{
          headerShown: false,
        }}
      />
      <CreateRecipeStack.Screen
        name="CreateRecipe"
        component={CreateRecipe}
        options={{
          headerShown: false,
        }}
      />
    </CreateRecipeStack.Navigator>
  );
};

export default CreateRecipeStackScreens;
