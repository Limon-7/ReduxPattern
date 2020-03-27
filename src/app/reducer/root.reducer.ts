import { Root } from '../models/root.model';
import * as RootAction from '../actions/root.action';

export type Action = RootAction.all;
const initialState: Root = {
    count: 0
};
const newState = (state, newData) => {
    return Object.assign({}, state, newData);
};

// state=initial state
export function RootReducer(state: Root = initialState, action: Action) {
    switch (action.type) {
        case RootAction.INCREMENT: {
            return Object.assign({}, state, { count: state.count + 1 });
        }
        default:
            return state;
    }
}
