import { StyleSheet } from 'react-native';
import { family, palette, color } from '@theme';
import { RH, RW, fontHelper } from '@helpers/responsive';

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    borderColor: color.whiteBorder,
    width: '100%',
    backgroundColor: 'transparent',
    paddingHorizontal: RW(20),

    borderRadius: 10,
  },
  container: {
    width: '100%',
  },
  arrowContainer: {
    borderLeftWidth: 1,
    borderColor: palette.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: RW(10),
  },
  textStyle: {
    ...fontHelper(10, family.MulishBold, palette.white),
  },
  arrowView: {
    width: RW(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowImg: {
    width: RW(25),
    height: RH(25),
    resizeMode: 'contain',
  },
  selectedItemStyle: {
    backgroundColor: color.primary,
    borderRadius: 0,
    borderWidth: 0,
  },
  listParentContainer: {
    borderRadius: 0,
  },
  dropDownContainer: {
    borderWidth: 1,
    borderTopWidth: 2,
    paddingBottom: RH(5),
    borderColor: palette.white,
  },
  listParentLabelStyle: {
    color: palette.black,
  },
  itemSeparatorStyle: {
    borderWidth: 1,
    borderColor: color.whiteBorder,
  },
  selectedItemLabelStyle: {
    color: palette.white,
  },
});

export default styles;
