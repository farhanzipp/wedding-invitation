import React from 'react'
import WAImg from '../assets/whatsapp.svg'

const Footer = () => {
  return (
    <footer>
        <div className='flex flex-col justify-center items-center pt-5 pb-20'>
            <p>Digital invitation by far</p>
            <p>
                <a href='/#' className='bg-pink-800'>
                  <span>
                  <img src={WAImg} alt='whatsapp' />
                  </span>
                </a>
            </p>
        </div>
    </footer>
  )
}

export default Footer