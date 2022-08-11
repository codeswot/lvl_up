import { GLOBAL_STYLES } from '@helpers/consts';
import { fontHelper, RH, RW } from '@helpers/responsive';
import { color, family, palette } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabsContainer: {
    ...GLOBAL_STYLES.boxStyles,
    alignItems: 'center',
    paddingVertical: RH(10),
    marginRight: RW(20),
  },
  tabsContainerActive: {
    backgroundColor: palette.white,
  },
  tabsTitle: {
    ...fontHelper(16, family.MulishBold, palette.white),
  },
  tabsTitleActive: {
    color: color.primary,
  },
  tabsDate: {
    ...fontHelper(12, family.MulishSemiBold, palette.white),
  },
});

export default styles;
