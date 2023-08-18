import React from 'react';
import coupleImg from '../assets/couple.png'
import CountdownTimer from './CountdownTimer';
import { Slide } from 'react-awesome-reveal';
import weddingData from '../data/wedding.json'

const Opening = () => {
    const weddingDate = new Date(weddingData.wedding_date);
    // Format the timestamp as "DD Month YYYY"
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formattedWeddingDate = weddingDate.toLocaleDateString('id-ID', options);
  return (
    <section id="section-1" className="flex pt-16 pb-16 justify-center font-body">
        <div>
            <h1 className="text-red-800 font-semibold">THE WEDDING OF</h1>
            <div className="w-3/4 mx-auto ">
                <img src={coupleImg} alt="ihwan"></img>
                <Slide>
                  <h2 id="couple-name" className="relative text-center bottom-14 text-2xl text-pink-900 font-display">
                      <span className="py-1 px-3 bg-orange-200 shadow-md text-4xl"> {weddingData.groom.surname} & {weddingData.bride.surname}</span>
                  </h2>
                </Slide>
            </div>
            <p className="w-4/5 -mt-3 mx-auto text-sm">Kami mengharapkan kehadiran Anda pada hari istimewa kami pada:</p>
            <Slide direction='right'>
              <p className="mt-7 font-bold text-pink-900">{formattedWeddingDate}</p>
            </Slide>
            <CountdownTimer targetDate={weddingDate} />
        </div>
    </section>
  )
}

export default Opening