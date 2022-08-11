import { fontHelper } from '@helpers/responsive';
import { family, palette } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ingreText: {
    ...fontHelper(22, family.MulishBold, palette.white),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
