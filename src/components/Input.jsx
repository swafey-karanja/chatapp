import React from 'react'
// import Add from "../img/addAvatar.png"
// import Attach from "../img/attach.png"
import SendIcon from '@mui/icons-material/Send';


function Input() {
  return (
    <div className='input'>
        <input type="text" placeholder='Type...' />
        <div className="send">
            <button>
                <SendIcon/>
            </button>
        </div>
    </div>
  )
}

export default Input