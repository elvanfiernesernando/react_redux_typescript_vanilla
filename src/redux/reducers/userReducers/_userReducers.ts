import { IUserState, IUserActions } from "./_userTypes"

const initialStateUsers: IUserState = {
	isLoading: false,
	errorMessage: "",
	data: []
}

export const userReducer = (state: IUserState = initialStateUsers, actions: IUserActions): IUserState => {
	switch(actions.type) {
		case "FETCH_USER_REQUEST":
			return {
				...state, 
				isLoading: true
			}
		case "FETCH_USER_SUCCESS":
			return {
				...state, 
				isLoading: false,
				data: actions.data
			}
		case "FETCH_USER_ERROR":
			return {
				...state, 
				isLoading: false,
				errorMessage: actions.errorMessage
			}
			default:
				return state
	}
}