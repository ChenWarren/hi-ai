import React from 'react'

const Footer = React.memo(({
    footerText
}) => {
    return (
        <div className='footer-row'>
            <div className='footer-container'>
                <p className='footer-body'>{footerText}</p>
            </div>
        </div>
    )
})

export default Footer