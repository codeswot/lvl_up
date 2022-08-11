import { PADDING_HORIZONTAL } from '@helpers/consts';
import { StyleSheet } from 'react-native';
import { palette, family } from '@theme';
import { fontHelper, RW, RH } from '@helpers/responsive';

const styles = StyleSheet.create({
  // header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: palette.darkGrey,
    paddingHorizontal: RW(PADDING_HORIZONTAL),
    paddingVertical: RH(PADDING_HORIZONTAL + 3),
  },
  title: {
    ...fontHelper(12, family.SFProRoundedMedium, palette.white),
    letterSpacing: 1,
  },
  text: {
    ...fontHelper(14, family.SFProRoundedMedium, palette.black),
    paddingLeft:10,
    letterSpacing: 1,
  },
});

export default styles;