import React from 'react';
import coupleImg from '../assets/couple.png'

const Opening = () => {
  return (
    <section id="section-1" className="flex mt-16 pb-16 justify-center font-body">
        <div>
            <h1 className="text-red-950 font-semibold">THE WEDDING OF</h1>
            <div className="w-3/4 mx-auto ">
                <img src={coupleImg} alt="ihwan"></img>
                <h2 id="couple-name" className="relative text-center bottom-14 text-2xl font-display">
                    <span className="py-1 px-3 bg-orange-300"> Ihwan & Istri </span>
                </h2>
            </div>
            <p className="w-4/5 -mt-3 mx-auto text-sm">Kami mengharapkan kehadiran Anda pada hari istimewa kami</p>
            <div className="mt-3">DAYS HOURS MINUTES SECOND</div>
            <p className="font-bold">Kamis, 9 Oktober 2023</p>
            <button className="mt-4 bg-amber-700 text-white p-2 rounded-md hover:bg-amber-950 ">Save The Date</button>
        </div>
    </section>
  )
}

export default Opening