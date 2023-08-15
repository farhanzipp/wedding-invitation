import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed bottom-4 w-full">
        <div className="w-1/2 mx-auto p-2 rounded-lg bg-sky-300 md:w-2/5">
            <ul className="flex justify-between">
                <li>Menu1</li>
                <li>Menu2</li>
                <li>Menu3</li>
                <li>Menu4</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar