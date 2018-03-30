import {BASIC_INFO_FETCH, BASIC_INFO_FETCHED} from './types';
import fetchBasicInfoAPI from '../../api/fetchBasicInfoAPI';

export function fetchBasicInfo() {
    return (dispatch) => {
        dispatch({ type: BASIC_INFO_FETCH });
        fetchBasicInfoAPI().then((data) => {
            dispatch({
                type: BASIC_INFO_FETCHED,
                data
            });
        });
    }
};