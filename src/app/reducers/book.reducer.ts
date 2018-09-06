import { Book } from '../models/book.model'
import { Action } from '@ngrx/store'
import * as BookActions from '../actions/book.actions'

const initialState = {
    name: "Initial Name",
    url: "https://www.google.com"
}

export function reducer(state: Book[] = [initialState], action: BookActions.Actions) {

    switch (action.type) {
        case BookActions.ADD_BOOK:
            return [...state, action.payload];

        default:
            return state;
    }

}