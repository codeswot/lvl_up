import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import * as Animatable from 'react-native-animatable';

interface Props {
  children?: React.ReactNode;
  viewStyle?: ViewStyle;
  duration?: number;
  animation: Animatable.Animation;
  easing?: Animatable.Easing;
}
export const AnimatedView: FC<Props> = ({
  children,
  viewStyle,
  duration,
  animation,
  easing,
}) => {
  return (
    <Animatable.View
      duration={duration}
      animation={animation}
      style={[viewStyle]}
      useNativeDriver={true}
      easing={easing}>
      {children}
    </Animatable.View>
  );
};
