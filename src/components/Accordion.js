import React, { useState } from 'react'
import { faGift } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Accordion = ({title, children}) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    }

  return (
    <div>
        <button 
            className="py-2 px-4 bg-pink-900 text-orange-200 rounded-full"
            onClick={toggleCollapse}
        >
            <p>
                <FontAwesomeIcon icon={faGift} /> {title}
            </p>
        </button>
        {!isCollapsed && <div className='mt-2'>{children}</div>}
    </div>
  )
}

export default Accordion