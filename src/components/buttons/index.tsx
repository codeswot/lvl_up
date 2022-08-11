import { SvgIcon } from '@components/svg-icon';
import React, { FC } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import style from './styles';
import { palette } from '@theme';
interface Props {
  title?: string;
  iconName?: string;
  loading?: boolean;
  onPress?: () => void;
  bordered?: boolean;
  containerStyle?: any;
  textStyle?: any;
  backgroundColor?: any;
  iconContainerStyle?: any;
  iconSize?: number;
  loaderColor?: any;
  disabled?: boolean;
  filled?: boolean;
}
export const Button: FC<Props> = ({
  title,
  iconName,
  onPress,
  loaderColor,
  loading,
  containerStyle,
  textStyle,
  iconContainerStyle,
  iconSize,
  disabled,
  filled = false,
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={loading || disabled}>
      <View
        style={[
          style.containerCommonStyle,
          containerStyle,
          // eslint-disable-next-line react-native/no-inline-styles
          disabled && { opacity: 0.5 },
          filled && style.button,
        ]}>
        {iconName && (
          <View style={[style.iconContainer, iconContainerStyle]}>
            <SvgIcon name={iconName} size={iconSize || 20} />
          </View>
        )}
        {loading ? (
          <ActivityIndicator color={loaderColor || palette.white} />
        ) : (
          <Text style={[style.textCommonStyle, textStyle]}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
