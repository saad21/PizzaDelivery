import { Action } from '@ngrx/store'
import { pizza } from '../models/pizza'
import * as PiazzaActions from '../Actions/pizza.action'

// Section 1
const initialState: pizza[] = [
    { id: 1, name: 'Chicken Tikka', price: 12, image: '../../../assets/Images/italian.jpeg' },

    { id: 2, name: 'Chicken Fajita', price: 9, image: '../../../assets/Images/../../../assets/Images/tikka.jpg' },

    { id: 3, name: 'Chicken Barbecue', price: 14, image: '../../../assets/Images/ketchup.jpeg' },

    { id: 4, name: 'Vegetable Crunch', price: 12, image: '../../../assets/Images/italian.jpeg' },

    { id: 5, name: 'Chicken Tikka', price: 10, image: '../../../assets/Images/crunch.jpg' },

    { id: 6, name: 'Chicken Tikka', price: 8, image: '../../../assets/Images/ketchup.jpeg' },

    { id: 7, name: 'Chicken Tikka', price: 14, image: '../../../assets/Images/italian.jpeg' },
    { id: 8, name: 'Chicken Tikka', price: 13, image: '../../../assets/Images/veg.jpeg' },
];

// Section 2
export function pizzareducer(state: pizza[] = initialState, action: PiazzaActions.Actions) {

    // Section 3
    switch (action.type) {
        case PiazzaActions.ADD_PIZZA:
            return [...state, action.payload];
        default:
            return state;
    }
}
