import { RH, RW } from '@helpers/responsive';
import React from 'react';
import { View } from 'react-native';
/* ANCHOR SIZED BOX */
interface SizedBoxProps {
  height?: number;
  width?: number | string;
  backgroundColor?: any;
  flex?: number;
  borderColor?: string;
}
export const SizedBox = ({
  width,
  height,
  flex,
  backgroundColor,
}: SizedBoxProps) => {
  return (
    <View
      style={[
        {
           // @ts-ignore
           width: typeof width === 'string' ? width : RW(width) || 0,
          // @ts-ignore
          height: RH(height) || 0,
          flex,
          backgroundColor,
        },
      ]}
    />
  );
};
