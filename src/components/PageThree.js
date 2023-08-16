import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const PageThree = () => {
  return (
    <section id="section-3" className="flex flex-col justify-center py-20 text-white bg-pink-900">
        <div className="w-4/5 p-6 mx-auto rounded-lg border-4 border-orange-200">
          <h1 className="font-body text-2xl font-semibold mb-7 text-orange-100">Akad Nikah</h1>
          <p className='text-sm'>Kamis, 09 September 2021</p>
          <p className='text-sm'>Pukul 10.00 WIB</p>
          <p className='text-sm'>Lokasi : Kediaman Mempelai Wanita</p>
        </div>

        <div className="w-4/5 m-7 p-6 mx-auto rounded-lg border-4 border-orange-200">
          <h1 className="font-body text-2xl font-semibold mb-7 text-orange-100">Resepsi</h1>
          <p className='text-sm'>Kamis, 09 September 2021</p>
          <p className='text-sm'>Pukul 10.00 WIB</p>
          <p className='text-sm'>Lokasi : Kediaman Mempelai Wanita</p>
        </div>

        <div className='w-3/5 mt-7 mx-auto'>
            <button className="py-2 px-4 bg-orange-50 text-pink-900 rounded-full">
              <p className='font-semibold'><FontAwesomeIcon icon={faLocationDot} /> Lokasi</p>
            </button>
        </div>
    </section>
  )
}

export default PageThree