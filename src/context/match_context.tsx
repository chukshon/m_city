import React, { useEffect, useContext, useReducer } from 'react'

import { CartProviderProps } from '../utils/types'
import match_reducer from './reducers/match_reducer'

const MatchContext = React.createContext<any>({})

const initialState: any = {
  test: '',
}

export const MatchContextProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(match_reducer, initialState)
  return (
    <MatchContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </MatchContext.Provider>
  )
}
