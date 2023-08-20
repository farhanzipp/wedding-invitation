import React, { useState } from 'react'

const WelcomePage = ({ onShowMain }) => {
  const [showMain, setShowMain] = useState(false);

  const handleShowMain = () => {
    setShowMain(true);
    onShowMain();
  }

  if (!showMain) {
    return (
      <div className='fixed left-0 w-full h-screen flex items-center justify-center bg-pink-900 z-50 overflow-y-hidden'>
          <div>
            <button
              onClick={handleShowMain}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
              Get Started
            </button>
          </div>
        </div>
  )
}

return null;
};

export default WelcomePage