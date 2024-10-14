import React, { useState } from 'react'

const Notofication = ({showNotification}) => {
  return (
    <div className={`notification-container ${showNotification?'show':'' }`} id="notification-container">
      <p>You have already entered this letter</p>
    </div>

  )
}

export default Notofication
