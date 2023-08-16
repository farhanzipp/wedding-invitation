import React from 'react';
import coupleImg from '../assets/couple.png'
import CountdownTimer from './CountdownTimer';
import ScrollAnimation from 'react-animate-on-scroll';

const Opening = () => {
  const targetDate = new Date('2023-08-31T23:59:59');
  return (
    <section id="section-1" className="flex pt-16 pb-16 justify-center font-body">
        <div>
            <h1 className="text-red-800 font-semibold">THE WEDDING OF</h1>
            <ScrollAnimation animateIn="fadeInRight">
            <div className="w-3/4 mx-auto ">
                <img src={coupleImg} alt="ihwan"></img>
                  <h2 id="couple-name" className="relative text-center bottom-14 text-2xl text-pink-900 font-display">
                      <span className="py-1 px-3 bg-orange-200 shadow-md text-4xl"> Suami & Istri </span>
                  </h2>
            </div>
            </ScrollAnimation>
            <p className="w-4/5 -mt-3 mx-auto text-sm">Kami mengharapkan kehadiran Anda pada hari istimewa kami pada:</p>
            <p className="mt-7 font-bold text-pink-900">Kamis, 9 Oktober 2023</p>
            <CountdownTimer targetDate={targetDate} />
        </div>
    </section>
  )
}

export default Opening