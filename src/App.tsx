// USEREDUCERS
// import { useReducer } from 'react'
// import { ICountState } from './useReducer/counterReducer/_types'
// import counterReducer from './useReducer/counterReducer/_reducer'

import { useDispatch, useSelector } from 'react-redux'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Text from './components/commons/Text/Text'
import Button from './components/commons/Button/Button'
import { TRootState } from './redux/reducers/_rootReducers'
import { counterActions } from './redux/reducers/counterReducers/_counterActions'
import { useEffect } from 'react'
import { fetchUser } from './redux/reducers/userReducers/_userActions'
import { configActions } from './redux/reducers/configReducers/_configActions'
// import { fetchUser } from './redux/reducers/userReducers/_userActions'

function App() {

  // USEREDUCERS
  // const counterInitialState: ICountState = {
  //   count: 0
  // }

  // USEREDUCERS
  // const [ counter, counterDispatch ] = useReducer(counterReducer, counterInitialState)

  const dispatch = useDispatch()

  const counter = useSelector((state: TRootState) => {
    return state.counter.count
  })

  const users = useSelector((state: TRootState) => {
    return state.users.data
  })

  const darkMode = useSelector((state: TRootState) => {
    return state.config.darkMode
  })

  useEffect(() => {
    dispatch(fetchUser() as any)
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      {/* USEREDUCERS */}
      {/* <div>
        <p>{counter.count}</p>
        <button onClick={() => counterDispatch({type: 'INCREMENT'}) }>
          INCREMENT
        </button>
        <button onClick={() => counterDispatch({type: 'DECREMENT'}) }>
          DECREMENT
        </button>
      </div> */}

      {/* REDUX THUNK */}
      {users?.map((e) => {
        return (
          <p key={e.id}>{e.name}</p>
        )
      })}

      <Text text={`${counter}`} />
      <Button text='Increment' onClick={() => dispatch(counterActions.increment())} />

      <Text text={`MODE: ${darkMode ? 'DARK' : 'LIGHT'}`} />
      <Button text='TOGGLE DARK MODE' onClick={() => dispatch(configActions.changeConfigMode())} />
    </>
  )
}

export default App
