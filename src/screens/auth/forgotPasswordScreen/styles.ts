import { StyleSheet } from 'react-native';
import { RH, fontHelper, RW } from '@helpers/responsive';
import { family, palette, color } from '@theme';
import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '@helpers/consts';

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    paddingVertical: RH(PADDING_VERTICAL),
    alignItems: 'center',
    paddingHorizontal: RW(PADDING_HORIZONTAL),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(44, 3, 83, 0.6)',
  },
  darkOverLay: {
    backgroundColor: 'rgba(8, 0, 15, 0.38)',
  },
  container: {
    width: '100%',
  },
  logo: {},
  mainView: {
    width: '100%',
  },
  welcome: {
    ...fontHelper(26, family.MulishExtraBold, palette.white),
    textAlign: 'center',
  },
  pSignin: {
    ...fontHelper(20, family.MulishSemiBold, palette.white),
    textAlign: 'center',
    paddingHorizontal: RH(10),
  },
  inView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  inputView: {
    width: '100%',
    margin: RH(10),
  },
  forgotView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: RH(20),
  },
  forgotText: {
    ...fontHelper(16, family.MulishSemiBold, palette.white),
    textAlign: 'center',
  },
  goSignin: {
    ...fontHelper(16, family.MulishMedium, palette.white),
    textAlign: 'center',
  },
  btnContainer: {
    width: '100%',
  },
  button: {
    backgroundColor: color.primary,
    width: '100%',
    borderWidth: 0,
  },
  inButton: {
    height: RH(50),
    margin: RH(10),
  },
  createView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bold: {
    fontFamily: family.MulishSemiBold,
  },
  unionBox: {
    alignItems: 'center',
  },
});

export default styles;
