import { ICountState, ICountActions } from "./_types"

const counterReducer = (state: ICountState, actions: ICountActions): ICountState => {
  switch(actions.type) {
    case "INCREMENT":
      return {
        ...state, count: state.count + 1
    }
    case "DECREMENT":
      return {
        ...state, count: state.count - 1
    }
  }
}

export default counterReducer