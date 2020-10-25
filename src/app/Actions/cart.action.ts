import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { cart } from '../models/cart';
import { pizza } from '../models/pizza';

// Section 2
export const ADD = '[PIAZZA] Add';
export const REMOVE = '[PIZZA] Remove';
export const UPDATE = '[PIZZA] Update';
export const EMPTY = '[PIZZA] Empty';

// Section 3
export class AddToCart implements Action {
    readonly type = ADD;

    constructor(public payload: cart) { }
}

export class RemoveFromCart implements Action {
    readonly type = REMOVE;

    constructor(public payload: number) { }
}
export class UpdateCart implements Action {
    readonly type = UPDATE;

    constructor(public payload: cart) { }
}
export class EmptyCart implements Action {
    readonly type = EMPTY;

    constructor() { }
}

// Section 4
export type Actions = AddToCart | RemoveFromCart | UpdateCart | EmptyCart;
