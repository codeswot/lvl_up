import { fontHelper, RH } from '@helpers/responsive';
import { color, family, palette } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonContent: {
    borderWidth: 1,
    borderColor: color.whiteBorder,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: RH(15),
    height: RH(65),
    marginBottom: RH(30),
  },
  title: {
    ...fontHelper(14, family.MulishSemiBold, palette.darkGray),
    flex: 1,
  },
  btnContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  unit: { ...fontHelper(16, family.MulishExtraBold, palette.white) },
  button: { backgroundColor: color.primary, width: '100%', borderWidth: 0 },
  scale: {
    width: '100%',
    height: 50,
    // marginLeft: -19,
  },
  row: {
    flexDirection: 'row',
  },
  rowItem: {
    ...fontHelper(11, family.MulishBold, palette.white),
  },
});

export default styles;
