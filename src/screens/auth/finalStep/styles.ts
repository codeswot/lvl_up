import { fontHelper, RH } from '@helpers/responsive';
import { family, palette, color } from '@theme';
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
    ...fontHelper(26, family.MulishExtraBold, palette.white),
    textAlign: 'center',
  },
  val: {
    ...fontHelper(22, family.MulishExtraBold, palette.white),
  },
  label: {
    ...fontHelper(16, family.MulishBold, palette.white),
  },
  breakdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgStyles: {
    width: '100%',
    height: RH(24),
    position: 'absolute',
    bottom: 0,
  },
  breakdownBox: {
    height: RH(100),
    borderWidth: 1,
    width: '30%',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  breakdown: {
    ...fontHelper(20, family.MulishSemiBold, palette.white),
  },
  text: {
    textAlign: 'center',
    ...fontHelper(12.5, family.MulishSemiBold, color.whiteBorder),
  },
  finishButton: {
    backgroundColor: color.primary,
    borderWidth: 0,
  },
});

export default styles;
