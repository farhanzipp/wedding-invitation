import React from 'react'
import basmalahImg from '../assets/basmalah.png'

const PageTwo = () => {
  return (
    <section id="section-2" className="flex flex-col mt-16 justify-center font-body bg-pink-900">
        <div className="p-8 text-white">
            <img src={basmalahImg} className='w-1/2 m-3 mx-auto' alt="bismillah"></img>
            <p className='m-3 text-xs'>Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.</p>
            <p className="font-semibold text-sm">(Qs. Ar. Rum (30) : 21)</p>
        </div>
        <div id="bride-card" className='p-9 rounded-t-xl bg-orange-200'>
          <p>Maha suci Allah yang telah menciptakan mahluk-Nya berpasang-pasangan. Ya Allah rahmatilah pernikahan kami</p>
          <h2 className="mt-16 font-display text-4xl">IKHWAN KHOIRI</h2>
          <p>Putra dari Bapak A</p>
          <p className="my-20 text-3xl font-display">&</p>
          <h2 className="mt-3 font-display text-4xl">ISTRINYA IKHWAN KHOIRI</h2>
          <p>Putri dari Bapak A</p>
        </div>
    </section>
  )
}

export default PageTwo