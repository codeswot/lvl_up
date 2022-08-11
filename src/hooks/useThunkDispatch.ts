import store from '@redux/store';
import { useDispatch } from 'react-redux';

const useThunkDispatch = () => useDispatch<typeof store.dispatch>();

export default useThunkDispatch;
