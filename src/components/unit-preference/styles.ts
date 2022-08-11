import { fontHelper, RH } from '@helpers/responsive';
import { color, family, palette } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderColor: color.whiteBorder,
    borderWidth: 1,
    borderRadius: 10,
  },
  unitBox: {
    paddingVertical: RH(16),
    flex: 1,
    borderRadius: 10,
  },
  unitBoxActive: {
    backgroundColor: palette.white,
  },
  subText: {
    ...fontHelper(16, family.MulishBold, palette.darkGray),
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  subTextActive: {
    color: palette.purple,
  },
});

export default styles;
