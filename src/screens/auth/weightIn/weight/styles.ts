import { fontHelper, RH } from '@helpers/responsive';
import { color, family, palette } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    ...fontHelper(16, family.MulishExtraBold, palette.white),
    textAlign: 'center',
  },
  button: { backgroundColor: color.primary, width: '100%', borderWidth: 0 },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
    marginTop: RH(8),
  },
  flex: {
    flex: 1,
  },
  label: {
    ...fontHelper(14, family.MulishSemiBold, palette.darkGray),
  },
});

export default styles;
