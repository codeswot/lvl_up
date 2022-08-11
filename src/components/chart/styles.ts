import { GLOBAL_STYLES } from '@helpers/consts';
import { fontHelper, RF } from '@helpers/responsive';
import { family, palette } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  chartContainer: {
    ...GLOBAL_STYLES.boxStyles,
    flexDirection: 'row',
  },
  val: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -20 }, { translateY: -18 }],
  },
  valText: {
    ...fontHelper(14, family.MulishExtraBold, palette.white),
    textAlign: 'center',
  },
  title: {
    ...fontHelper(14, family.MulishBold, palette.white),
    marginRight: 6,
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stats: {
    fontSize: RF(13),
  },
});

export default styles;
