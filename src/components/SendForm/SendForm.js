import React from 'react'

import './SendForm.scss'

export const SendForm = () => {
  const formHandler = (event) => {
    event.preventDefault()
  }

  return (
    <div className="sendForm-wrapper">
      <form className="sendForm" onSubmit={formHandler}>
        <input className="sendForm-input" />
        <button className="sendFor-button">Send</button>
      </form>
    </div>
  )
}
