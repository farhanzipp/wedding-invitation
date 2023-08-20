import React, { useState } from 'react'
import Opening from '../components/Opening';
import PageTwo from '../components/PageTwo';
import PageThree from '../components/PageThree';
import PageFour from '../components/PageFour';
import Footer from '../components/Footer';
import PageFive from '../components/PageFive';
import WelcomePage from '../components/WelcomePage';

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
                <PageTwo />
                <PageThree />
                <PageFour />
                <PageFive />
            </main>
          )}
        <Footer />
    </div>
  )
}

export default Theme1