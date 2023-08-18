import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import weddingData from '../data/wedding.json'

const PageThree = () => {
    const weddingDate = new Date(weddingData.wedding_date);
    const resepsiDate = new Date(weddingData.resepsi_date);
    // Format the timestamp as "DD Month YYYY"
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formattedWeddingDate = weddingDate.toLocaleDateString('id-ID', options);
    let formattedResepsiDate = resepsiDate.toLocaleDateString('id-ID', options);
    let weddingHours = `${weddingDate.getHours()}:${weddingDate.getMinutes()}`;
    const resepsiHours = `${resepsiDate.getHours()}:${resepsiDate.getMinutes()}`;
  return (
    <section id="section-3" className="flex flex-col justify-center py-20 text-white bg-pink-900">
        <Fade>
          <div className="w-4/5 p-6 mx-auto rounded-lg border-4 border-orange-200">
            <h1 className="font-body text-2xl font-semibold mb-7 text-orange-100">Akad Nikah</h1>
            <p className='text-sm'>{formattedWeddingDate}</p>
            <p className='text-sm'>Pukul: {weddingHours} WIB</p>
            <p className='text-sm'>Lokasi : Kediaman Mempelai Putra</p>
          </div>
        </Fade>
        <Fade delay={300}>
          <div className="w-4/5 m-7 p-6 mx-auto rounded-lg border-4 border-orange-200">
            <h1 className="font-body text-2xl font-semibold mb-7 text-orange-100">Resepsi</h1>
            <p className='text-sm'>{formattedResepsiDate}</p>
            <p className='text-sm'>Pukul {resepsiHours} WIB</p>
            <p className='text-sm'>Lokasi : Kediaman Mempelai Putri</p>
          </div>
        </Fade>

        <div className='w-3/5 mt-7 mx-auto'>
            <button className="py-2 px-4 bg-orange-50 text-pink-900 rounded-full">
              <p className='font-semibold'><FontAwesomeIcon icon={faLocationDot} /> Lokasi</p>
            </button>
        </div>
    </section>
  )
}

export default PageThree