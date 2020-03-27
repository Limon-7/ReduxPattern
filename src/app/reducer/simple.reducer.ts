import { SPANISH, FRENCH } from '../actions/root.action';
import { Action } from '@ngrx/store';




// state=initial state
export function SimpleReducer(state: string = 'Hellow world', action: Action) {
    switch (action.type) {
        case SPANISH: {
            return state = 'Hola Mundo';
        }
        case FRENCH: {
            return state = 'Bonjour le monde';
        }
        default:
            return state;
    }
}
