import React from 'react'

import { MessageItem } from '../MessageItem/MessageItem'

import './MesssageList.scss'

export const MesssageList = ({ messsageList = [], uId }) => {
  const mapMessageList = messsageList.map((message) => {
    return <MessageItem key={message.id} message={message} uId={uId} />
  })

  return <div className="messsageList">{mapMessageList}</div>
}
