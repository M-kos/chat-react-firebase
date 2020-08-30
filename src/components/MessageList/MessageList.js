import React from 'react'

import { MessageItem } from '../MessageItem/MessageItem'

import './MesssageList.scss'

export const MesssageList = ({ messsageList = [] }) => {
  const mapMessageList = messsageList.map((message) => {
    return <MessageItem message={message} />
  })
  return <div className="MesssageList">{mapMessageList}</div>
}
