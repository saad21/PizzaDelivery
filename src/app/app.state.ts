import { pizza } from '../app/models/pizza';
import { cart } from './models/cart';

export interface AppState {
  readonly pizza: pizza[];
  readonly cart:cart[];
}