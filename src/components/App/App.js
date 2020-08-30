import React from 'react'
import { useFireBase } from '../../hooks/useFireBase'
import { useGetId } from '../../hooks/useGetId'

import { MesssageList } from '../MessageList/MessageList'
import { SendForm } from '../SendForm/SendForm'

import './App.scss'

const mochVes = [
  {
    id: 1,
    title: 'qwe',
    time: 12345,
    text: 'qwewqew qqwrkjqpowr qpwo jopqwr pqopoqwroqpkqpwo kopqkw ropqr'
  },
  {
    id: 2,
    title: 'ads',
    time: 12345,
    text: 'qwewqew qqwrkjqpowr qpwo jopqwr pqopoqwroqpkqpwo kopqkw ropqr'
  },
  {
    id: 3,
    title: 'z111xc',
    time: 12345,
    text: 'qwewqew qqwrkjqpowr qpwo jopqwr pqopoqwroqpkqpwo kopqkw ropqr'
  }
]

const App = () => {
  const [state, pushMessage] = useFireBase()
  const [userId] = useGetId()

  return (
    <div className="App">
      <MesssageList messsageList={state.messages} />
      <SendForm submitHandler={pushMessage} uId={userId} />
    </div>
  )
}

export default App
