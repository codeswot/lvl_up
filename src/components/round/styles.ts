import { RH, RW } from '@helpers/responsive';
import { palette } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    height: RH(52),
    width: RW(52),
    backgroundColor: palette.white,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});

export default styles;
