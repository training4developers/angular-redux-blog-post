import { Injectable } from "@angular/core";
import { createStore, Store, Action } from "redux";

export interface AppState {
    colors?: string[];
}

export interface ColorAction extends Action {
    color: string;
}

export enum ColorActions {
    AddColor,
    RemoveColor,
}

export const addColorAction = (color: string) => ({ type: ColorActions.AddColor, color });

export const removeColorAction = (color: string) => ({ type: ColorActions.RemoveColor, color });

@Injectable()
export class AppStore {

    private store: Store<AppState>;

    constructor() {

        const reducer = (state: AppState = { colors: ["red", "white", "blue"] }, action: ColorAction) => {
            switch (action.type) {
                case ColorActions.AddColor:
                    return Object.assign({}, state, { colors: state.colors.concat(action.color) });
                case ColorActions.RemoveColor:
                    return Object.assign({}, state, { colors: state.colors.filter((color) => color !== action.color) });
                default:
                    return state;
            }
        };

        this.store = createStore(reducer);
    }

    public getStore() {
        return this.store;
    }

    public addColor(color: string) {
        this.store.dispatch(addColorAction(color));
    }

    public removeColor(color: string) {
        this.store.dispatch(removeColorAction(color));
    }
}
