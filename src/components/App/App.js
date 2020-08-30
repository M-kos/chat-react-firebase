import React from 'react'
import { useFireBase } from '../../hooks/useFireBase'
import { useGetId } from '../../hooks/useGetId'

import { MesssageList } from '../MessageList/MessageList'
import { SendForm } from '../SendForm/SendForm'

import './App.scss'

const App = () => {
  const [state, pushMessage] = useFireBase()
  const [userId] = useGetId()

  const { isLoading, isError, messages } = state

  return (
    <div className="App">
      {isError && <div>Something went wrong...</div>}

      {isLoading ? (
        <div className="App-loading">Loading...</div>
      ) : (
        <MesssageList messsageList={messages} uId={userId} />
      )}

      <SendForm submitHandler={pushMessage} uId={userId} />
    </div>
  )
}

export default App
