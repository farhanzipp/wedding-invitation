import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='flex flex-col justify-center items-center pt-5 pb-20'>
            <p>Made with <FontAwesomeIcon icon={faHeart} /> by far</p>
            <p>
                <a href='/#'>Whatsapp</a>
            </p>
        </div>
    </footer>
  )
}

export default Footer