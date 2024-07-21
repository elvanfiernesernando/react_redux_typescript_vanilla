export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export interface ICountState {
    count: number
}

export interface ICountAction {
    type: "INCREMENT" | "DECREMENT"
}

