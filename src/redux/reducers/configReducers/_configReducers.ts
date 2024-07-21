import { IConfig, IConfigActions } from "./_configTypes";

const initialConfigState: IConfig = {
  darkMode: false
}

export const configReducers = (state: IConfig = initialConfigState, actions: IConfigActions): IConfig => {
  switch(actions.type) {
    case "TOGGLE_DARK_MODE":
      return {
        ...state, 
        darkMode: !state.darkMode
      }
      default:
        return state
  }
}