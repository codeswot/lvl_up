import { PADDING_HORIZONTAL } from '@helpers/consts';
import { fontHelper, RH, RW } from '@helpers/responsive';
import { family, palette } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: RH(30),
    paddingHorizontal: RW(PADDING_HORIZONTAL),
  },
  headerTitle: {
    textAlign: 'center',
    ...fontHelper(10, family.RobotoMedium, palette.black),
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statItem: { flex: 1, alignItems: 'center' },
  statPercentage: {
    ...fontHelper(12, family.RobotoBold, palette.black),
  },
  pieContent: {
    position: 'absolute',
    top: 40,
    left: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pieItemTitle: {
    ...fontHelper(8, family.RobotoRegular, palette.black),
  },
  mealItem: {
    paddingHorizontal: RW(PADDING_HORIZONTAL),
    paddingVertical: RH(PADDING_HORIZONTAL + 2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mealItemContent: {
    paddingLeft: RW(60),
    paddingRight: RW(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#dadada',
    paddingVertical: RH(PADDING_HORIZONTAL + 2),
  },
  imgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  img: {
    width: RW(50),
    height: RW(50),
    borderRadius: RH(100),
  },
  productTitle: {
    ...fontHelper(14, family.RobotoRegular, palette.black),
    lineHeight: 25,
  },
  productDesc: {
    ...fontHelper(10, family.RobotoRegular, palette.black),
  },

  separator: { borderColor: '#dadada', borderBottomWidth: 1 },
});

export default styles;
