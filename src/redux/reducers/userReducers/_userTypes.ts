import { Action } from "redux";

// USER OBJECT

export interface IUser {
	id: number,
	name: string,
	username: string,
	email: string
}

// REDUX STATE

export interface IUserState {
	isLoading: boolean
	errorMessage?: string
	data?: IUser[]
}

// REDUX ACTIONS

export interface IUserActions {
	type: "FETCH_USER_REQUEST" | "FETCH_USER_SUCCESS" | "FETCH_USER_ERROR",
	errorMessage?: string
	data?: IUser[]
}


// export interface FetchUserRequestAction extends Action<'FETCH_USER_REQUEST'> {}
// export interface FetchUserSuccessAction extends Action<'FETCH_USER_SUCCESS'> {
//   data: IUser[];
// }
// export interface FetchUserErrorAction extends Action<'FETCH_USER_ERROR'> {
//   errorMessage: string;
// }

// export type UserActions = FetchUserRequestAction | FetchUserSuccessAction | FetchUserErrorAction;
