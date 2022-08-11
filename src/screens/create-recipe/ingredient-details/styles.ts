import { RH } from '@helpers/responsive';
import { palette } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderColor: palette.white,
  },
  dropDown: { height: RH(65) },
});

export default styles;
