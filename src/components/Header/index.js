import React from 'react'
import Message from 'components/Message'
import { useMessage } from 'context/AppContext'

const Header = React.memo(({
  title,
  handleClick=()=>{}
}) => {
  const { message } = useMessage()
  return (
    <div className='header-row'>
      <div className='header-container'>
        <div className='header-navbar'>
          <h1>{title}</h1>
          <p 
            className='header-clickable'
            onClick={()=>handleClick(true)}
          >
            About
          </p>
        </div>
        <div className='header-body'>
          <div className='header-body-col'>
            <Message messageText={message}/>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Header