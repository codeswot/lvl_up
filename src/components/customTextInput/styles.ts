import { StyleSheet } from 'react-native';
import { fontHelper, RF, RH, RW } from '@helpers/responsive';
import { family, palette } from '@theme';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    borderWidth: 1,
    paddingHorizontal: RW(10),
    borderColor: palette.shadowWhite,
    borderRadius: 10,
    width: '100%',
    height: RH(60),
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  errorColor: {
    borderColor: palette.red,
  },
  floating: {
    // borderWidth: 1,
    // flex: 1,
    height: RH(60),
  },
  lable: {
    //@ts-ignore
    colorFocused: palette.lightGray,
    fontSizeFocused: RF(10),
    colorBlurred: palette.lightGray,
  },
  input: {
    paddingTop: RH(15),
    color: palette.white,
    paddingHorizontal: RW(10),
  },
  titleBold: {
    ...fontHelper(10, family.MulishRegular, palette.black),
  },
  error: { color: palette.red, paddingVertical: 10 },
});

export default styles;
