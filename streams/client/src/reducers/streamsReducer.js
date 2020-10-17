import _ from 'lodash';
import * as actions from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case actions.FETCH_STREAM:
        case actions.CREATE_STREAM:
        case actions.EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case actions.DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    };
};