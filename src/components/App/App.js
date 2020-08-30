import React from 'react'
import { useFireBase } from '../../hooks/useFireBase'
import { useGetId } from '../../hooks/useGetId'

import { MesssageList } from '../MessageList/MessageList'
import { SendForm } from '../SendForm/SendForm'

import './App.scss'

const App = () => {
  const [state, pushMessage] = useFireBase()
  const [userId] = useGetId()

  return (
    <div className="App">
      <MesssageList messsageList={state.messages} uId={userId} />
      <SendForm submitHandler={pushMessage} uId={userId} />
    </div>
  )
}

export default App
