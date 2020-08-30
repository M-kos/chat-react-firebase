import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { MessageItem } from '../MessageItem/MessageItem'

import './MesssageList.scss'

/**
 * Компонент выводит список сообщений
 *
 * @component
 * @example
 * const messages = [
 *  {
 *    timestamp: 125125125152
 *    text: 'Hello'
 *    uId: '1123'
 *  },
 *  {
 *    timestamp: 125125125152
 *    text: 'Hello'
 *    uId: '1123'
 *  }
 * ]
 *
 * return (
 *   <MesssageList messsageList={messages} />
 * )
 */

export const MesssageList = ({ messsageList, uId }) => {
  const messageContainer = useRef(null)

  useEffect(() => {
    messageContainer.current.scrollTop = messageContainer.current.scrollHeight
  }, [messsageList])

  const mapMessageList = messsageList.map((message) => {
    return <MessageItem key={message.id} message={message} uId={uId} />
  })

  return (
    <div ref={messageContainer} className="messsageList">
      {mapMessageList}
    </div>
  )
}

MesssageList.propTypes = {
  uId: PropTypes.string,
  messsageList: PropTypes.array
}
MesssageList.defaultProps = {
  uId: '',
  messsageList: []
}
