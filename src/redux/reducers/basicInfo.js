import {BASIC_INFO_FETCHED} from "../actions/types";

export const basicInfo = (state = {}, action) => {
    switch (action.type) {
        case BASIC_INFO_FETCHED:
            return {
                ...state,
                basicInfo: action.data
            };
        default:
            return state;
    }
};