import { fontHelper, RH, RW } from '@helpers/responsive';
import { color, family, palette } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    alignSelf: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: color.whiteBorder,
    borderRadius: 10,
    paddingVertical: RH(18),
    paddingHorizontal: RW(20),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: RH(25),
  },
  buttonText: {
    ...fontHelper(20, family.MulishBold, palette.white),
  },
});

export default styles;
