import { GLOBAL_STYLES } from '@helpers/consts';
import { fontHelper, RH } from '@helpers/responsive';
import { family, palette } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  label: {
    ...fontHelper(14, family.MulishBold, palette.darkWhite),
  },
  checkboxContainer: {
    ...GLOBAL_STYLES.boxStyles,
    flexDirection: 'row',
    paddingVertical: RH(13),
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...fontHelper(16, family.MulishBold, palette.white),
  },
  date: {
    ...fontHelper(14, family.MulishMedium, palette.white),
  },
});

export default styles;
