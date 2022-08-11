import React, { FC } from 'react';
import { splashBg } from '@assets/images';
import { View, ImageBackground } from 'react-native';
import styles from './styles';
import { Screen } from 'react-native-screens';

interface Props {
  contentStyles?: any;
  children: React.ReactNode;
  url?: string;
  type?: string;
}
export const ImageBgWrapper: FC<Props> = ({
  contentStyles,
  children,
  url = splashBg,
  type = 'cover',
}) => {
  return (
    <Screen style={styles.container}>
      {/* @ts-ignore */}
      <ImageBackground source={url} style={styles.image} resizeMode={type}>
        <View style={styles.overlay} />
        <View style={[styles.content, contentStyles]}>{children}</View>
      </ImageBackground>
    </Screen>
  );
};
