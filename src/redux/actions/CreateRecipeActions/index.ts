import { doSearch } from '@network';
import { AuthActionTypes } from '@redux/actionTypes';
import { Dispatch } from 'redux';

const search: Function = () => (dispatch: Dispatch) => {
  doSearch()
    .then((res: any) => {
      console.log({ res: res?.data });
    })
    .catch((e: any) => {
      console.log('there is an err', e?.response?.data);
    })
    .finally(() =>
      dispatch({
        type: AuthActionTypes.LOADING,
        payload: false,
      }),
    );
};

export default {
  search,
};
