import React from 'react'

const PageThree = () => {
  return (
    <section id="section-3" className="flex flex-col justify-center py-20 text-white bg-pink-900">
        <div className="w-4/5 p-7 mx-auto rounded-md border-2 border-white">
          <h1 className="text-xl">Akad Nikah</h1>
          <p>Kamis, 09 September 2021</p>
          <p>Pukul 10.00 WIB</p>
          <p>Lokasi : Kediaman Mempelai Wanita</p>
        </div>
        <div className="w-4/5 mt-7 p-7 mx-auto rounded-md border-2 border-white">
          <h1 className="text-xl">Resepsi</h1>
          <p>Kamis, 09 September 2021</p>
          <p>Pukul 10.00 WIB</p>
          <p>Lokasi : Kediaman Mempelai Wanita</p>
        </div>
        <div className='w-3/5 mt-7 mx-auto'>
            <button className="py-2 px-3 bg-orange-50 text-pink-900 rounded-full">Lokasi</button>
        </div>
    </section>
  )
}

export default PageThree