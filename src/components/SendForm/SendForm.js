import React from 'react'

import './SendForm.scss'

export const SendForm = () => {
  const formHandler = (event) => {
    event.preventDefault()
    console.log('form')
  }

  return (
    <div className="sendForm-wrapper">
      <form className="sendForm" onSubmit={formHandler}>
        <textarea
          className="sendForm-textarea"
          placeholder="Enter your message..."
          rows="3"
        ></textarea>
        <button className="sendForm-button">
          <i className="material-icons">send</i>
        </button>
      </form>
    </div>
  )
}
