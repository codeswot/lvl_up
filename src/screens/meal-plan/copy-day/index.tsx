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

export const CopyDay: FC = ({ navigation }: any) => {
  return (
    <ScreenWrapper img={mealPlanBg} resizeMode="repeat">
      <Header title="Copy Day" navigation={navigation} />
      <View style={{ flex: 1 }}>
        <SizedBox height={35} />
        <DateCheckBox label="Paste day meal plan list" />
        <DateCheckBox />
        <DateCheckBox />
        <DateCheckBox />
        <DateCheckBox />
        <DateCheckBox />
        <DateCheckBox />
        <SizedBox height={30} />
        <Button title="Paste" filled />
      </View>
    </ScreenWrapper>
  );
};
