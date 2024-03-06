import React, { useState } from 'react'
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,db,storage } from "../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const[err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);
     
      const storageRef = ref(storage, userName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          setErr(true);
          console.log(error);
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
             // Update user profile with userName and photoURL
            await updateProfile(res.user,{
              userName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid),{
              uid: res.user.uid,
              userName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid),{});
            navigate("/");
          });
        }
      );

    }catch(err){
      setErr(true);
      console.log(err);
    }
      
  }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Chat Away</span>
            <span className="title">Sign Up</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='userName'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display:"none"}} type="file" id="file"/>
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
                {err && <span>Something went Wrong</span>}
            </form>
            <p>Already signed up? Login</p>
        </div>
    </div>
    
  )
}

export default Register