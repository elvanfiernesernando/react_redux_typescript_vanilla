import { ThunkAction } from "redux-thunk"
import { IUser, IUserState } from "./_userTypes"
import { UnknownAction } from "redux"

export const fetchUserRequest = () => ({
    type: "FETCH_USER_REQUEST"
})

export const fetchUserSuccess = (data: IUser[]) => ({
    type: "FETCH_USER_SUCCESS",
    data: data
})

export const fetchUserError = (errorMessage: string) => ({
    type: "FETCH_USER_ERROR",
    errorMessage: errorMessage
})

export const fetchUser = (): ThunkAction<void, IUserState, unknown, UnknownAction> => {
    return async (dispatch) => {
        dispatch(fetchUserRequest())

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();

            const arrayUser: IUser[] =  data.map((user: IUser) => ({
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email
            }))

            dispatch(fetchUserSuccess(arrayUser))
        } catch (error) {
            dispatch(fetchUserError(`${error}`))
        }

    }
}