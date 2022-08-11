import { StyleSheet } from 'react-native';
import { RH, RW } from '@helpers/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  containerList: {
    paddingBottom: 10,
  },
  headerContainer: {
    width: '100%',
    marginBottom: 10,
  },
  imgStyle: {
    width: RW(200),
    height: RH(200),
  },
});
