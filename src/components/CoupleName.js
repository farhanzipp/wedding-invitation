import React from 'react'
import basmalahImg from '../assets/bismillahw.png'
import { Fade } from 'react-awesome-reveal'
import weddingData from '../data/wedding.json'

const CoupleName = () => {
  return (
    <section id="section-2" className="flex flex-col mt-16 justify-center font-body bg-pink-900">
        <div className="p-8 text-white">
            <img src={basmalahImg} className='w-3/5 m-3 mx-auto' alt="bismillah"></img>
            <p className='m-3 text-xs'>Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.</p>
            <p className="font-semibold text-sm">(Qs. Ar. Rum (30) : 21)</p>
        </div>
        <div id="bride-card" className='p-9 pb-28 rounded-xl bg-orange-200 shadow-md'>
          <p className='text-sm'>Maha suci Allah yang telah menciptakan mahluk-Nya berpasang-pasangan. Ya Allah rahmatilah pernikahan kami</p>
          <Fade direction='right'>
            <h2 className="mt-16 font-display text-4xl text-pink-800">{weddingData.groom.full_name}</h2>
          </Fade>
          <p className='mt-2 text-sm'>Putra {weddingData.groom.orders} dari {weddingData.groom.parents}</p>
          <p className="my-20 text-4xl font-display">&</p>
          <Fade direction='left'>
            <h2 className="mt-3 font-display text-4xl text-pink-800">{weddingData.bride.full_name}</h2>
          </Fade>
          <p className='mt-2 text-sm'>Putri {weddingData.bride.orders} dari {weddingData.bride.parents}</p>
        </div>
    </section>
  )
}

export default CoupleName