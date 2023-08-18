import React from 'react'

const WelcomePage = ({ showWelcome, onHideWelcome }) => {
  if (!showWelcome) {
    return null;
  }
    return (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-sky-400 z-50'>
            <div className="bg-white p-6 rounded shadow-xl">
                <h1 className="text-xl font-semibold mb-4">Welcome to My App</h1>
                <button
                onClick={onHideWelcome}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                Get Started
                </button>
            </div>
        </div>
  )
}

export default WelcomePage