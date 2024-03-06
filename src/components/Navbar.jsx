import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">Chat Away</span>
        <div className="user">
            <img src="https://plus.unsplash.com/premium_photo-1677636664547-c3d21c579185?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <span>Username</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar