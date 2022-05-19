import React from 'react'
import { FaTimes, FaGithub, FaLinkedin, FaIdCard } from "react-icons/fa"

const Popup = React.memo(({
    popupTitle,
    popupText,
    handleClose,
    portfolioLink,
    linkedinLink,
    githubLink
}) => {

    const handleLink = (text) => {
        if(text==='port') {
            window.open(portfolioLink)
        } else if (text === 'linkedin') {
            window.open(linkedinLink)
        } else if (text === 'github') {
            window.open(githubLink)
        }
    }

    return (
        <div className='popup-container'>
            <div onClick={()=>handleClose(false)} className='popup-header'>
                <FaTimes size={21}/>
            </div>
            <h3 className='popup-title'>{popupTitle}</h3>
            <p className='popup-body'>
                {popupText}
            </p>
            <div className='popup-footer'>
                <div className='popup-clickable' onClick={()=>handleLink('port')}>
                    <FaIdCard size={38}/>
                </div>
                <div className='popup-clickable' onClick={()=>handleLink('linkedin')}>
                    <FaLinkedin size={35}/>
                </div>
                <div className='popup-clickable' onClick={()=>handleLink('github')}>
                    <FaGithub size={35}/>
                </div>
            </div>
        </div>
    )
})

export default Popup