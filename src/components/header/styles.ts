import { StyleSheet } from 'react-native';
import { palette, family } from '@theme';
import { fontHelper } from '@helpers/responsive';

const styles = StyleSheet.create({
  // header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...fontHelper(24, family.MulishExtraBold, palette.white),
    letterSpacing: 1,
    lineHeight: 30,
    textAlign: 'center',
  },
});

export default styles;
