import { Dimensions, PixelRatio } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

export const getWidthPercentage = (value: number, creativeWidth = width) =>
  (value / creativeWidth) * 100;

export const getHeightPercentage = (value: number, creativeHeight = height) =>
  (value / creativeHeight) * 100;

export const RF = (size: number) => {
  let factor = PixelRatio.get();
  factor > 2.2 ? (factor = 2) : null;
  let font = ((factor * width) / 1000) * size;
  return font + 6;
};

export const RW = (value: number) => {
  return widthPercentageToDP(getWidthPercentage(value));
};

export const RH = (value: number) => {
  return heightPercentageToDP(getHeightPercentage(value));
};

export const fontHelper = (
  fontSize: number,
  fontFamily: string | undefined,
  color: string,
) => {
  return { fontSize: RF(fontSize), fontFamily, color };
};

export default {
  getWidthPercentage,
  getHeightPercentage,
  RF,
  fontHelper,
  RW,
  RH,
};
