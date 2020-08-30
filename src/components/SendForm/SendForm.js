import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './SendForm.scss'

/**
 * Компонент выводит инпут и кнопку для отправки сообщения
 *
 * @component
 * @example
 * const submitHandler = () => {}
 * const uId = '123'
 * return (
 *   <SendForm submitHandler={submitHandler} uId={uId} />
 * )
 */

export const SendForm = ({ submitHandler, uId }) => {
  const [text, setText] = useState('')

  const formHandler = async (event) => {
    event.preventDefault()
    if (text) {
      await submitHandler({
        uId,
        text,
        timestamp: Date.now()
      })

      setText('')
    }
  }

  const inputHandler = (event) => {
    setText(event.target.value)
  }

  return (
    <div className="sendForm-wrapper">
      <form className="sendForm" onSubmit={formHandler}>
        <input
          className="sendForm-input"
          placeholder="Enter your message..."
          onChange={inputHandler}
          value={text}
        />
        <button className="sendForm-button">
          <i className="material-icons">send</i>
        </button>
      </form>
    </div>
  )
}

SendForm.propTypes = {
  uId: PropTypes.string,
  submitHandler: PropTypes.func
}
SendForm.defaultProps = {
  uId: '',
  submitHandler: () => {}
}
