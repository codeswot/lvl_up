import React, { FC } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { All } from './TabScreens';
import { TabBar } from '@components';

const Tab = createMaterialTopTabNavigator();
export const Tabs = ({ edit }: any) => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="ALL" children={() => <All />} />
      <Tab.Screen name="MY MEALS" children={() => <All />} />
      <Tab.Screen name="MY RECIPES" children={() => <All />} />
    </Tab.Navigator>
  );
};
