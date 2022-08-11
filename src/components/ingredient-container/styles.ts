import { StyleSheet } from 'react-native';
import { fontHelper, RF, RH, RW } from '@helpers/responsive';
import { family, palette } from '@theme';

const styles = StyleSheet.create({
  ingredientContainer: {
    borderWidth: 1,
    borderColor: palette.white,
    borderRadius: 10,
    paddingHorizontal: RW(20),
    paddingVertical: RH(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: RH(20),
  },

  title: {
    ...fontHelper(16, family.MulishBold, palette.white),
    textTransform: 'capitalize',
    marginRight: 6,
  },
  desc: {
    fontSize: RF(13),
  },
  stats: {
    fontSize: RF(13),
  },
});

export default styles;
