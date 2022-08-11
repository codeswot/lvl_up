/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { View } from 'react-native';
import {
  Header,
  SizedBox,
  ScreenWrapper,
  DateCheckBox,
  Button,
} from '@components';
import { mealPlanBg } from '@assets/images';

export const ClearDay: FC = ({ navigation }: any) => {
  return (
    <ScreenWrapper img={mealPlanBg} resizeMode="repeat">
      <Header title="Clear Day" navigation={navigation} />
      <View style={{ flex: 1 }}>
        <SizedBox height={35} />
        <DateCheckBox label="List of the days" />
        <DateCheckBox />
        <DateCheckBox />
        <DateCheckBox />
        <DateCheckBox />
        <DateCheckBox />
        <DateCheckBox />
        <SizedBox height={30} />
        <Button title="Clear" filled />
      </View>
    </ScreenWrapper>
  );
};
