import { GLOBAL_STYLES } from '@helpers/consts';
import { fontHelper, RH, RW } from '@helpers/responsive';
import { color, family, palette } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imgUploadContainer: {
    ...GLOBAL_STYLES.boxStyles,
  },
  label: {
    ...fontHelper(14, family.MulishSemiBold, palette.darkGray),
  },
  ingredientDesc: {
    flexDirection: 'row',
    marginBottom: RH(18),
  },
  roundStyles: {
    borderWidth: 1,
    borderColor: color.whiteBorder,
  },
  title: {
    ...fontHelper(16, family.MulishExtraBold, palette.white),
  },
  subtitle: {
    ...fontHelper(12, family.MulishSemiBold, palette.white),
  },
  imgUploadBox: {
    borderWidth: 1,
    borderColor: `${color.whiteBorder}63`,
    borderRadius: 10,
    padding: RW(12),
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
