import React, { useState } from 'react'
import HeartImg from '../assets/Jumping heart.gif'

const WelcomePage = ({ onShowMain }) => {
  const [showMain, setShowMain] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);

  const handleShowMain = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowMain(true);
      setIsLoading(false);
      onShowMain();
    }, 1000)
  }

  if (isLoading) {
    return (
      <div className='fixed left-0 w-full h-screen flex items-center justify-center bg-white z-50 overflow-y-hidden'>
        <div><img src={HeartImg} alt="loading" /></div>
      </div>
    );
  }

  if (!showMain) {
    return (
      <div className='fixed left-0 w-full h-screen flex items-center justify-center bg-pink-900 z-50 overflow-y-hidden'>
          <div className='w-5/6 p-3 text-orange-200 text-center border-2 rounded-lg border-orange-200 font-body'>
            <p className='font-semibold'>The Wedding Of</p>
            <h1 className='m-5 font-display text-3xl'>Chafidz & Bojo</h1>
            <p className='text-xs'>Kepada Bapak/Ibu/Saudara</p>
            <p className='m-3 font-bold'>Pak Undangan</p>
            <button
              onClick={handleShowMain}
              className="m-5 font-bold bg-orange-200 text-pink-900 px-4 py-2 rounded-full hover:bg-orange-300"
              >
              Buka Undangan
            </button>
          </div>
        </div>
  );
}

return null;
};

export default WelcomePage