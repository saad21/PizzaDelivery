import { Action } from '@ngrx/store';
import { pizza } from '../models/pizza';
import * as PiazzaActions from '../Actions/pizza.action';
import * as CartActions from '../Actions/cart.action';
import { cart } from '../models/cart';


// Section 1
const initialState: cart[] = [

];

// Section 2
export function reducer(state: cart[] = initialState, action: CartActions.Actions) {

    // Section 3
    switch (action.type) {
        case CartActions.ADD:
            return [...state, action.payload];
        case CartActions.UPDATE:
            const tempState = JSON.parse(JSON.stringify([...state]));
            tempState.map((cur, index) => {
                if (cur.id == action.payload.id) {
                    tempState[index] = action.payload;
                }
            });
            return tempState;
        case CartActions.REMOVE:
            const tem = [...state];
            const index = tem.findIndex(x => x.id == action.payload);
            tem.splice(index, 1);
            return tem;
        case CartActions.EMPTY:
            const empty = [];
            return empty;


        default:
            return state;
    }
}
