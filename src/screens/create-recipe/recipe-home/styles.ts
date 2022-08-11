import { fontHelper } from '@helpers/responsive';
import { family, palette } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderColor: palette.white,
  },
  ingreText: {
    ...fontHelper(22, family.MulishBold, palette.white),
  },
  addMore: {
    ...fontHelper(16, family.MulishBold, palette.white),
    textAlign: 'center',
  },
});

export default styles;
