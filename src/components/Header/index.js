import React from 'react'
import Message from 'components/Message'
import { useMessage } from 'context/AppContext'

const Header = React.memo(({
  title,
  headerText,
}) => {
  const { message } = useMessage()
  return (
    <div className='header-row'>
      <div className='header-container'>
        <h1>{title}</h1>
        <div className='header-body'>
          {/* <div className='header-body-col-left'>
            {headerText}
          </div> */}
          <div className='header-body-col'>
            <Message messageText={message}/>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Header