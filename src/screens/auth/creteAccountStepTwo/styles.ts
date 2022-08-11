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
  stepContainer: {
    alignSelf: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
    paddingVertical: RH(PADDING_VERTICAL),
    alignItems: 'center',
    paddingHorizontal: RW(PADDING_HORIZONTAL),
  },
  btnContainer: {
    width: '100%',
  },
  button: { backgroundColor: color.primary, width: '100%', borderWidth: 0 },

  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RH(80),
  },
  Welcome: {
    //@ts-ignore
    ...fontHelper(26, family.MulishExtraBold, palette.white),
    textAlign: 'center',
  },
  pSignin: {
    ...fontHelper(20, family.MulishSemiBold, palette.white),
    textAlign: 'center',
  },
  subText: {
    ...fontHelper(16, family.MulishBold, palette.darkGray),
  },
  text: {
    ...fontHelper(14, family.MulishMedium, palette.darkGray),
  },
  altText: {
    ...fontHelper(14, family.MulishMedium, palette.purple),
  },
  altSubText: {
    ...fontHelper(16, family.MulishSemiBold, palette.purple),
  },
  dateOver: { justifyContent: 'center' },
  birthText: {
    ...fontHelper(14, family.MulishSemiBold, palette.darkGray),
    textAlign: 'left',
    alignSelf: 'flex-start',
  },

  genderBox: {
    height: RH(130),
    width: '100%',
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: RH(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  altGenderBox: {
    backgroundColor: 'white',
  },
  inView: {
    height: '100%',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subView: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 10,
    paddingVertical: 5,
  },
  image: {
    height: RH(20),
    width: RW(20),
  },
});

export default styles;
