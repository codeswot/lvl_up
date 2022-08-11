import { GLOBAL_STYLES, PADDING_HORIZONTAL } from '@helpers/consts';
import { fontHelper, RH, RW } from '@helpers/responsive';
import { color, family, palette } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalStyle: {
    backgroundColor: color.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: RW(PADDING_HORIZONTAL),
  },
  container: {
    ...GLOBAL_STYLES.boxStyles,
    borderColor: palette.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: RH(20),
  },
  title: {
    ...fontHelper(16, family.MulishExtraBold, palette.white),
    textTransform: 'capitalize',
  },
  subtitle: {
    ...fontHelper(14, family.MulishMedium, palette.white),
  },
});

export default styles;
