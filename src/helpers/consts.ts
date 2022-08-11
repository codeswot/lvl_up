import { color, palette } from '@theme';
import { Platform } from 'react-native';
import { protein, carbs, fat } from '@assets/images';
import { RH, RW } from './responsive';

export const PADDING_HORIZONTAL = 25;
export const POUNDS_TO_KG = 0.453592;
export const CM_TO_INCH = 0.394;
export const PADDING_VERTICAL = Platform.OS === 'ios' ? 70 : 30;

export const BODY_FAT_METHOD = {
  IMG_SELECTION: 'imageSelection',
  NAVY: 'usNavy',
};

export const UNIT_PREFERENCE = {
  US_STANDARD: 'usStandard',
  METRIC: 'metric',
};

export const BREAKDOWN_THEME = {
  borderColor: {
    protein: palette.protein,
    carbs: palette.carbs,
    fat: palette.fat,
  },
  img: {
    protein,
    carbs,
    fat,
  },
};

export const GLOBAL_STYLES = {
  boxStyles: {
    borderWidth: 1,
    borderColor: color.whiteBorder,
    borderRadius: 10,
    paddingHorizontal: RW(20),
    paddingVertical: RH(20),
  },
};
