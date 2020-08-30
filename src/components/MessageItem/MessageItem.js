import React from 'react'
import { getDateAndTime } from '../../utils/getDateAndTime'

import './MessageItem.scss'

export const MessageItem = ({ message, uId }) => {
  const messageClassName = `messageItem ${message.uId === uId ? 'self' : ''}`

  return (
    <div className={messageClassName}>
      <div className="messageItem-head">
        <div className="messageItem-head-title">{message.uId}</div>
        <div className="messageItem-head-time">
          {getDateAndTime(message.timestamp)}
        </div>
      </div>
      <div className="messageItem-message">{message.text}</div>
    </div>
  )
}
