import { PADDING_HORIZONTAL } from '@helpers/consts';
import { fontHelper, RH, RW } from '@helpers/responsive';
import { family, palette } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addText: {
    ...fontHelper(12, family.RobotoMedium, palette.blue),
  },
  filterTitle: {
    ...fontHelper(25, family.RobotoBold, palette.black),
  },
  filterSubTitle: {
    ...fontHelper(15, family.RobotoMedium, palette.blue),
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: RW(PADDING_HORIZONTAL),
  },
  filterContainer: {
    width: RW(350),
    alignSelf: 'center',
  },
  addTypeText: {
    ...fontHelper(15, family.RobotoRegular, palette.black),
  },
  filterFooter: {
    flexDirection: 'row',
    borderTopWidth: 1,
    padding: RW(20),
    justifyContent: 'flex-end',
    borderColor: '#ECECEC',
  },
  footerText: {
    ...fontHelper(12, family.RobotoMedium, palette.blue),
  },
  popoverContainer: {
    paddingHorizontal: RW(30),
  },
  header: {
    paddingHorizontal: RW(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
