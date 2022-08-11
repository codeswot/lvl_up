import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '@helpers/consts';
import { RH, RW } from '@helpers/responsive';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: RW(PADDING_HORIZONTAL),
    paddingVertical: RH(PADDING_VERTICAL),
  },
  wrapper: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default styles;
