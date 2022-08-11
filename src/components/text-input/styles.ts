import { StyleSheet } from 'react-native';
import { family, palette } from '@theme';
import { fontHelper, RH, RW } from '@helpers/responsive';
import { GLOBAL_STYLES } from '@helpers/consts';

export default StyleSheet.create({
  container: {
    borderRadius: 6,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    paddingHorizontal: RW(2),
    letterSpacing: 0.48,
    ...fontHelper(10, family.RobotoRegular, palette.black),
    flex: 1,
  },

  rightIcon: {
    paddingRight: RH(20),
  },
  rightButtonIcon: {
    paddingHorizontal: RW(20),
    justifyContent: 'center',
    flex: 1,
  },
  margin: {
    marginBottom: RH(30),
  },
  inputBox: {
    ...GLOBAL_STYLES.boxStyles,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 0,
  },
  input: {
    borderRadius: 10,
    padding: 0,
    paddingVertical: RH(18),
    flex: 1,
    ...fontHelper(16, family.MulishBold, palette.white),
  },
  label: {
    ...fontHelper(14, family.MulishSemiBold, palette.darkGray),
  },
});
