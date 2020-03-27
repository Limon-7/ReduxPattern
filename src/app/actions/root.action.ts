import { Action } from '@ngrx/store';


export const SPANISH = 'Spaniish';
export const FRENCH = 'FRENCH';
export const EDIT_TEXT = 'EDIT';
export const UPVOTE = 'Upvote';
export const DOWNVOTE = 'Downvote';
export const RESET = 'Reset';
// root reducer
export const INCREMENT = 'Increment';
export class EditText implements Action {
    readonly type = EDIT_TEXT;
    constructor(public payload: string) {
    }
}
export class Upvote implements Action {
    readonly type = UPVOTE;
}
export class Downvote implements Action {
    readonly type = DOWNVOTE;
}
export class Reset implements Action {
    readonly type = RESET;
}
export class Increment implements Action {
    readonly type = INCREMENT;
}

export type all = Upvote
    | Downvote
    | Reset
    | EditText
    | Increment;
