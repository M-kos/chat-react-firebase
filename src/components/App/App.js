import React from 'react'

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
    title: 'zxc',
    time: 12345,
    text: 'qwewqew qqwrkjqpowr qpwo jopqwr pqopoqwroqpkqpwo kopqkw ropqr'
  }
]

function App() {
  return (
    <div className="App">
      <MesssageList messsageList={mochVes} />
      <SendForm />
    </div>
  )
}

export default App
