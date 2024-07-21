import { ICountState, ICountAction } from "./_counterTypes" 

const counterInitialState: ICountState = {
  count: 0
}

export const counterReducer = (state: ICountState = counterInitialState, action: ICountAction): ICountState => {
	switch(action.type) {
		case "INCREMENT":
			return {
				...state, count: state.count + 1
			}
		case "DECREMENT":
			return {
				...state, count: state.count -1
			}
    default:
      return state
	}
}