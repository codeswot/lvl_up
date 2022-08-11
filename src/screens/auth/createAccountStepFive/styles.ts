import { fontHelper, RH, RW } from '@helpers/responsive';
import { color, family, palette } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
  },
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RH(80),
  },
  Welcome: {
    //@ts-ignore
    ...fontHelper(26, family.MulishExtraBold, palette.white),
    textAlign: 'center',
  },
  pSignin: {
    ...fontHelper(20, family.MulishSemiBold, palette.white),
    textAlign: 'center',
  },
  stepContainer: {
    alignSelf: 'center',
  },
  subText: {
    ...fontHelper(16, family.MulishBold, palette.darkGray),
    textAlign: 'center',
  },
  purposeText: {
    ...fontHelper(14, family.MulishBold, palette.darkWhite),
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: palette.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: RH(18),
    marginRight: RW(20),
  },
  buttonActive: {
    backgroundColor: palette.white,
  },
  buttonText: {
    ...fontHelper(16, family.MulishBold, palette.white),
  },
  parentLabel: {
    ...fontHelper(10, family.MulishBold, palette.black),
    padding: 10,
  },
  buttonTextActive: {
    color: color.primary,
  },
  dropDown: { height: RH(67) },
  finishButton: {
    backgroundColor: color.primary,
    borderWidth: 0,
  },
});

export default styles;
