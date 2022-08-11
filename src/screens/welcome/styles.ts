import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '@helpers/consts';
import { fontHelper, RH, RW } from '@helpers/responsive';
import { family, palette } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(44, 3, 83, 0.5)',
  },
  darkOverLay: {
    backgroundColor: 'rgba(8, 0, 15, 0.25)',
  },
  container: {
    width: '100%',
    height: '100%',
    paddingVertical: RH(PADDING_VERTICAL),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RW(PADDING_HORIZONTAL),
  },
  btnContainer: {
    width: '100%',
  },
  button: {
    width: '100%',
  },
  text: {
    ...fontHelper(16, family.MulishMedium, palette.white),
    textAlign: 'center',
    lineHeight: RH(20.08),
  },
  iconBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
