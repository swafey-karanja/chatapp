import React from 'react'
// import Add from "../img/addAvatar.png"
// import Attach from "../img/attach.png"
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

function Input() {
  return (
    <div className='input'>
        <input type="text" placeholder='Type...' />
        <div className="send">
            <img src="" alt="" />
            <input type="file" style={{display:"none"}} id='file'/>
            <label htmlFor="file">
                <AttachFileIcon/>
            </label>
            <button>
                <SendIcon/>
            </button>
        </div>
    </div>
  )
}

export default Input