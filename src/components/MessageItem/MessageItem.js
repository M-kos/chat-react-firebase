import React from 'react'
import PropTypes from 'prop-types'
import { getDateAndTime } from '../../utils/getDateAndTime'

import './MessageItem.scss'

/**
 * Компонент показывает сообщение
 *
 * @component
 * @example
 * const message = {
 *  timestamp: 125125125152
 *  text: 'Hello'
 *  uId: '1123'
 * }
 *
 * return (
 *   <MessageItem message={message} />
 * )
 */

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

MessageItem.propTypes = {
  uId: PropTypes.string,
  message: PropTypes.shape({
    uId: PropTypes.string,
    text: PropTypes.string,
    timestamp: PropTypes.number
  })
}
MessageItem.defaultProps = {
  uId: '',
  message: {}
}
