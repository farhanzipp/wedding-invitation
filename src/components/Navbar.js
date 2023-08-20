import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faHeart, faCalendarDays, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className="fixed bottom-3 w-full z-49">
        <div className="w-1/2 mx-auto p-2 rounded-lg bg-orange-200 shadow-md md:w-2/5">
            <ul className="flex justify-between text-white text-center">
                <li className='w-9 h-9 p-2 rounded-md bg-pink-800'>
                  <a href='/#section-1'>
                    <FontAwesomeIcon icon={faHouse} />
                  </a>
                </li>
                <li className='w-9 h-9 p-2 rounded-md bg-pink-800'>
                  <a href='/#section-2'>
                    <FontAwesomeIcon icon={faHeart} />
                  </a>
                </li>
                <li className='w-9 h-9 p-2 rounded-md bg-pink-800'>
                  <a href='/#section-3'>
                    <FontAwesomeIcon icon={faCalendarDays} />
                  </a>
                </li>
                <li className='w-9 h-9 p-2 rounded-md bg-pink-800'>
                  <a href='/#section-4'>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar