import React from 'react'
import { Slide } from 'react-awesome-reveal'
import weddingData from '../data/wedding.json'

const PageFive = () => {
  return (
    <section id="section-3" className="flex flex-col justify-center py-2 bg-pink-900">
        <div className="w-5/6 mx-auto text-orange-200">
          <h1 className="font-body text-2xl font-semibold m-5 text-orange-100">Terima Kasih</h1>
          <p className='text-sm'>Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas kehadiran dan doa restunya, kami mengucapkan terima kasih</p>
          <p className='my-5 font-semibold text-md'>Wassalamualaikum Wr. Wb.</p>
          <Slide>
            <p className='pb-14 text-3xl font-display'>{weddingData.groom.surname} & {weddingData.bride.surname}</p>
          </Slide>
        </div>
    </section>
  )
}

export default PageFive