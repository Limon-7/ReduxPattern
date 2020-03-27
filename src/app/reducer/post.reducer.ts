
import * as PostActions from '../actions/root.action';
import { PostModel } from '../models/post.model';

export type Action = PostActions.all;

const initialState: PostModel = {
    text: 'hello bangladesh',
    likes: 0
};

const newState = (state, newData) => {
    return Object.assign({}, state, newData);
};

export function PostReducer(state: PostModel = initialState, action: Action) {
    switch (action.type) {
        case PostActions.EDIT_TEXT:
            return newState(state, { text: action.payload });
        case PostActions.UPVOTE:
            return newState(state, { likes: state.likes + 1 });
        case PostActions.DOWNVOTE:
            return newState(state, { likes: state.likes - 1 });
        case PostActions.RESET:
            return initialState;
        default:
            return state;
    }

}
