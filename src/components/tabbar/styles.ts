import { RH } from '@helpers/responsive';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: '#526085',
    flexDirection: 'row',
  },

  eachTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: RH(13),
  },
});

export default styles;
