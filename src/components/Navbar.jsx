import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">Chat Away</span>
        <div className="user">
            <img src="" alt="" />
            <span>username</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar