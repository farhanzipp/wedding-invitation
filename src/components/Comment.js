
import React from 'react'
import CommentSection from './CommentSection'
import Accordion from './Accordion'


const Comment = () => {
  return (
    <section id="section-4" className="flex flex-col pt-16 pb-20 font-body">
        <div className='w-4/5 mx-auto'>
           <h1 className='text-xl font-semibold text-pink-900'>Mohon Doa Restu</h1>
           <p className='m-7'>Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.</p>
            <Accordion title="Kirim Hadiah">
              <div className='absolute w-full left-0'>
                <p className='w-2/3 my-2 mx-auto text-xs'>Anda dapat mengirimkan hadiah kepada kami via online</p>
                <div className='bg-white w-2/3 mx-auto shadow-lg text-center'>
                  <p className='font-semibold'>SHOPEEPAY</p>
                  <p>0812345670</p>
                </div>
              </div>
            </Accordion>
          
        </div>

        <div className="mt-20 p-6 mx-auto rounded-lg">
          <h1 className="font-body text-xl font-semibold mb-3 text-pink-900">Ucapkan Sesuatu</h1>
          <p className='text-md'>Sampaikan Harapan Baik Anda Pada Kami</p>
          <CommentSection />
        </div>
    </section>
  )
}

export default Comment