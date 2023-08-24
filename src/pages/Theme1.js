import React, { useState } from 'react'
import Opening from '../components/Opening';
import CoupleName from '../components/CoupleName';
import Footer from '../components/Footer';
import WelcomePage from '../components/WelcomePage';
import ClosingMessage from '../components/ClosingMessage';
import WeddingDate from '../components/WeddingDate';
import Comment from '../components/Comment';

const Theme1 = () => {
    const [showMain, setShowMain] = useState(false);

    const handleShowMain = () => {
      setShowMain(true);
    }

  return (
    <div className='mx-auto md:w-[393px]'>
        <WelcomePage onShowMain = {handleShowMain} />
          {showMain && (
            <main className="container mx-auto text-center">
                <Opening />
                <CoupleName /> 
                <WeddingDate />
                <Comment />
                <ClosingMessage />
            </main>
          )}
        <Footer />
    </div>
  )
}

export default Theme1