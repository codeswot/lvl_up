import { GLOBAL_STYLES } from '@helpers/consts';
import { RH, RW } from '@helpers/responsive';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  checkbox: {
    ...GLOBAL_STYLES.boxStyles,
    width: RW(30),
    height: RH(31),
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: 8,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
