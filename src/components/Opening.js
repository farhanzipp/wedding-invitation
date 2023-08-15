import React from 'react';
import coupleImg from '../assets/couple.png'
import CountdownTimer from './CountdownTimer';

const Opening = () => {
  const targetDate = new Date('2023-08-31T23:59:59');
  return (
    <section id="section-1" className="flex pt-16 pb-16 justify-center font-body">
        <div>
            <h1 className="text-red-950 font-semibold">THE WEDDING OF</h1>
            <div className="w-3/4 mx-auto ">
                <img src={coupleImg} alt="ihwan"></img>
                <h2 id="couple-name" className="relative text-center bottom-14 text-2xl font-display">
                    <span className="py-1 px-3 bg-orange-300 text-4xl"> Ihwan & Istri </span>
                </h2>
            </div>
            <p className="w-4/5 -mt-3 mx-auto text-sm">Kami mengharapkan kehadiran Anda pada hari istimewa kami pada:</p>
            <p className="mt-5 font-bold">Kamis, 9 Oktober 2023</p>
            <CountdownTimer targetDate={targetDate} />
        </div>
    </section>
  )
}

export default Opening