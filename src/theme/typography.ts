import { Platform } from 'react-native';

/*
Available font weights

300 Light
400 Regular
500 Medium
600 SemiBold
700 Bold
*/

export const family = {
  SFProRoundedBold: Platform.select({
    ios: 'SFProRounded-Bold', // The font family name
    android: 'SFProRounded-Bold', // The file name
  }),
  SFProRoundedRegular: Platform.select({
    ios: 'SFProRounded-Regular', // The font family name
    android: 'SFProRounded-Regular', // The file name
  }),
  SFProRoundedSemiBold: Platform.select({
    ios: 'SFProRounded-Semibold', // The font family name
    android: 'SFProRounded-Semibold', // The file name
  }),
  SFProRoundedMedium: Platform.select({
    ios: 'SFProRounded-Medium', // The font family name
    android: 'SFProRounded-Medium', // The file name
  }),

  // ROBOTO
  RobotoBold: Platform.select({
    ios: 'Roboto-Bold', // The font family name
    android: 'Roboto-Bold', // The file name
  }),
  RobotoRegular: Platform.select({
    ios: 'Roboto-Regular', // The font family name
    android: 'Roboto-Regular', // The file name
  }),
  RobotoSemiBold: Platform.select({
    ios: 'Roboto-Semibold', // The font family name
    android: 'Roboto-Semibold', // The file name
  }),
  RobotoMedium: Platform.select({
    ios: 'Roboto-Medium', // The font family name
    android: 'Roboto-Medium', // The file name
  }),

  // MULISH
  MulishBold: Platform.select({
    ios: 'Mulish-Bold', // The font family name
    android: 'Mulish-Bold', // The file name
  }),
  MulishRegular: Platform.select({
    ios: 'Mulish-Regular', // The font family name
    android: 'Mulish-Regular', // The file name
  }),
  MulishSemiBold: Platform.select({
    ios: 'Mulish-Semibold', // The font family name
    android: 'Mulish-SemiBold', // The file name
  }),
  MulishMedium: Platform.select({
    ios: 'Mulish-Medium', // The font family name
    android: 'Mulish-Medium', // The file name
  }),
  MulishExtraBold: Platform.select({
    ios: 'Mulish-ExtraBold', // The font family name
    android: 'Mulish-ExtraBold', // The file name
  }),
};
// Mulish-ExtraBold
