import { faGift } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CommentSection from './CommentSection'

const PageFour = () => {
  return (
    <section id="section-4" className="flex flex-col pt-16 pb-20 font-body">
        <div className='w-4/5 mx-auto'>
           <h1 className='text-xl font-semibold text-pink-900'>Mohon Doa Restu</h1>
           <p className='m-7'>Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.</p>
           <button className="py-2 px-4 bg-pink-900 text-orange-200 rounded-full">
              <p><FontAwesomeIcon icon={faGift} />  Kirim Hadiah</p>
          </button>
        </div>

        <div className="mt-12 p-6 mx-auto rounded-lg">
          <h1 className="font-body text-xl font-semibold mb-3 text-pink-900">Ucapkan Sesuatu</h1>
          <p className='text-md'>Sampaikan Harapan Baik Anda Pada Kami</p>
          <CommentSection />
        </div>
    </section>
  )
}

export default PageFour