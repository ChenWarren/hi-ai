import React from 'react'

const Header = React.memo(({
  title,
  headerText,
}) => {
  return (
    <div className='header-row'>
      <div className='header-container'>
        <h1>{title}</h1>
        <div className='header-body'>{headerText}</div>
      </div>
    </div>
  )
})

export default Header