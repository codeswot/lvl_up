import { RH, RW, fontHelper } from '@helpers/responsive';
import { StyleSheet } from 'react-native';
import { color, palette, family } from '@theme';

const styles = StyleSheet.create({
  containerCommonStyle: {
    paddingVertical: RH(15),
    width: '100%',
    borderRadius: RW(10),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1.4,
    borderColor: palette.white,
  },

  textCommonStyle: {
    ...fontHelper(16, family.MulishBold, palette.white),
    textAlign:'center'
  },

  borderStyle: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: color.primary,
  },
  borderTextStyle: {
    color: color.primary,
  },
  iconContainer: {
    marginRight: RW(5),
  },

  button: {
    backgroundColor: color.primary,
    width: '100%',
    borderWidth: 0,
  },
});

export default styles;
