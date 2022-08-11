import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '@helpers/consts';
import { RH, RW, fontHelper } from '@helpers/responsive';
import { family, palette, color } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    height: '100%',
    paddingHorizontal: RW(PADDING_HORIZONTAL),
    paddingVertical: RH(PADDING_VERTICAL),
  },
  logo: {
    alignSelf: 'center',
  },
  stepContainer: {
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
  subText: {
    ...fontHelper(16, family.MulishBold, palette.darkGray),
    textAlign: 'center',
  },
  subTextActive: {
    color: palette.purple,
  },
  birthText: {
    ...fontHelper(14, family.MulishSemiBold, palette.darkGray),
    textAlign: 'left',
    alignSelf: 'flex-start',
  },

  unitBox: {
    paddingVertical: RH(15),
    flex: 1,
    borderRadius: 10,
  },
  unitBoxActive: {
    backgroundColor: palette.white,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: color.whiteBorder,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: RH(15),
  },
  input: {
    borderRadius: 10,
    padding: 0,
    paddingVertical: RH(15),
    flex: 1,
  },
  weightBox: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: color.whiteBorder,
    height: RH(340),
    alignItems: 'center',
    justifyContent: 'center',
    width: RH(270),
    marginRight: RH(30),
  },
  createView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotText: {
    ...fontHelper(16, family.MulishSemiBold, palette.white),
  },
  accountText: {
    ...fontHelper(16, family.MulishMedium, palette.white),
    textAlign: 'center'
  },
  button: { backgroundColor: color.primary, width: '100%', borderWidth: 0 },
});

export default styles;
