import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '@helpers/consts';
import { fontHelper, RH, RW } from '@helpers/responsive';
import { color, family, palette } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
  },

  logo: {
    alignSelf: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
    paddingTop: RH(PADDING_VERTICAL),
    alignItems: 'center',
    paddingHorizontal: RW(PADDING_HORIZONTAL),
  },
  inputBox: {
    borderWidth: 1,
    borderColor: color.whiteBorder,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: RH(15),
  },
  input: {
    flex: 1,
    borderRadius: 10,
    padding: 0,
    paddingVertical: RH(15),
  },
  scroll: {
    width: '100%',
    // paddingBottom: 60,
  },
  btnContainer: {
    width: '100%',
    zIndex: -1000,
  },
  button: { backgroundColor: color.primary, width: '100%', borderWidth: 0 },

  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RH(70),
  },
  Welcome: {
    ...fontHelper(26, family.MulishExtraBold, palette.white),
    textAlign: 'center',
  },
  pSignin: {
    ...fontHelper(20, family.MulishSemiBold, palette.white),
    textAlign: 'center',
  },
  subText: {
    ...fontHelper(16, family.MulishBold, palette.darkGray),
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  stepContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    // width: '34%',
  },
  subTextActive: {
    color: palette.purple,
  },
  altSubText: {
    ...fontHelper(16, family.MulishSemiBold, palette.purple),
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  scrool: {
    width: '100%',
    height: '100%',
  },
  dateOver: {
    width: '100%',
  },
  birthText: {
    ...fontHelper(14, family.MulishBold, palette.darkGray),
  },
  dateBox: {
    paddingVertical: RH(17),
    borderColor: color.whiteBorder,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: RH(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  genderBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  genderBox: {
    flex: 1,
    paddingVertical: RH(12),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: color.whiteBorder,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  altGenderBox: {
    backgroundColor: palette.white,
  },

  selectionheightBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: palette.white,
  },
  altSelectionheightBox: {
    height: RH(50),
    width: RW(157),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  subHeightContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropContainer: {
    flex: 1,
  },

  dropDown: { height: RH(60) },
  calender: { height: RH(25), width: RW(20) },

  unitBox: {
    paddingVertical: RH(15),
    flex: 1,
    borderRadius: 10,
  },
  unitBoxActive: {
    backgroundColor: palette.white,
  },
});

export default styles;
