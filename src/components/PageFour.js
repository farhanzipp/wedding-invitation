import { faGift } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const PageFour = () => {
  return (
    <section id="section-4" className="flex pt-16 pb-20 justify-center font-body">
        <div className='w-4/5 mx-auto'>
           <h1 className='text-xl font-semibold text-pink-900'>Mohon Doa Restu</h1>
           <p className='m-7'>Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.</p>
           <button className="py-2 px-4 bg-pink-900 text-orange-200 rounded-full">
              <p><FontAwesomeIcon icon={faGift} />  Kirim Hadiah</p>
          </button>
        </div>
    </section>
  )
}

export default PageFour