import React from 'react';
import FastImage from 'react-native-fast-image';
import styles from './styles';

interface Props {
  resizeMode: 'contain' | 'cover' | 'stretch' | 'center';
  uri?: string;
  source?: any;
  imageStyles?: any;
  onError?: () => void;
}
export const ImageWrapper = ({
  resizeMode,
  uri,
  source,
  imageStyles,
  onError,
}: Props) => {
  return (
    <FastImage
      style={[styles.imgStyle, imageStyles]}
      source={
        source || {
          uri,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }
      }
      resizeMode={
        resizeMode === 'contain'
          ? FastImage.resizeMode.contain
          : resizeMode === 'stretch'
          ? FastImage.resizeMode.stretch
          : resizeMode === 'center'
          ? FastImage.resizeMode.center
          : FastImage.resizeMode.cover
      }
      onError={onError}
      onLoad={(e: any) => {
        console.log('loaded', e?.nativeEvent?.height);
      }}
    />
  );
};
