import React, { useEffect, useRef } from 'react'

import { MessageItem } from '../MessageItem/MessageItem'

import './MesssageList.scss'

export const MesssageList = ({ messsageList = [], uId }) => {
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
