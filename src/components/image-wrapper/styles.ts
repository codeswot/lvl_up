import { color } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: color.primary,
    opacity: 0.2,
    position: 'relative',
  },
  content: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});

export default styles;
