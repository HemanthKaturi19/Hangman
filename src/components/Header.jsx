import React from 'react'

const Header = ({category}) => {
  return (
    <div className="header-block">
      <h1>Hangman</h1>
      <p className="para">Find the hidden word related to <p className="category">{category}</p><p>- Enter a Letter</p></p>
    </div>
  )
}

export default Header
