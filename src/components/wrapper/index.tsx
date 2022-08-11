import { bg } from '@assets/images';
import { Screen } from '@components/screen';
import React, { FC } from 'react';
import {
  ImageBackground,
  Image,
  View,
  ImageSourcePropType,
  ImageResizeMode,
} from 'react-native';
import styles from './styles';

export const Wrapper: FC<React.ReactNode> = ({ children }) => {
  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      {children}
    </ImageBackground>
  );
};

interface Props {
  children: React.ReactNode;
  img: ImageSourcePropType;
  isFixed?: boolean;
  resizeMode?: ImageResizeMode;
}
export const ScreenWrapper: FC<Props> = ({
  children,
  img,
  isFixed = false,
  resizeMode,
}) => {
  return (
    <View style={{ flex: 1 }}>
      <Image source={img} style={styles.wrapper} resizeMode={resizeMode} />
      <Screen isFixed={isFixed}>
        <View style={styles.container}>{children}</View>
      </Screen>
    </View>
  );
};
