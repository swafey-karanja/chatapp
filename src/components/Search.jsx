import React from 'react'

function Search() {
  return (
    <div className='search'>
        <div className="searchForm">
            <input type="text" placeholder='Search'/>
        </div>
        <div className="userChat">
            <img src="https://plus.unsplash.com/premium_photo-1677636664547-c3d21c579185?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="userChatInfo">
                <span>Itachi</span>
            </div>
        </div>
    </div>
  )
}

export default Search