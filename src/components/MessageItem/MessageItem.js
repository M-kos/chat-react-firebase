import React from 'react'

import './MessageItem.scss'

export const MessageItem = ({ message }) => {
  const messageClassName = `messageItem ${message.self ? 'self' : ''}`

  return (
    <div className={messageClassName}>
      <div className="messageItem-head">
        <div className="messageItem-title">{message.title}</div>
        <div className="messageItem-time">{message.time}</div>
      </div>
      <div className="messageItem-message">{message.text}</div>
    </div>
  )
}
