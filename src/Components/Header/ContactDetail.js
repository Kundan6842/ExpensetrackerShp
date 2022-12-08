import React,{useContext,useEffect} from 'react'
import { useState } from 'react';
import AuthContext from '../Store/auth-context';

const ContactDetail = (props) => {
    
    const authCntxt = useContext(AuthContext)
    const[Inputname,setInputname] = useState('')
    const[Photourl,setPhotourl] = useState('')
    // const displayName = useRef();
    // const photoUrl = useRef();
    async function getUserData() {

      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyANtNuRfZ4qD9R-7t5p05uN9TjqzPbj93o",
        {
          method: "POST",
          body: JSON.stringify({
            idToken:authCntxt.isLoggedIn,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data)
      setInputname(data.users[0].displayName)
      setPhotourl(data.users[0].photoUrl)
      // setisNewHome((current) => !current);
      // setIsShown((current) => !current);
  
    }

     useEffect(()=>{
      getUserData();
     },[])
    const submitHandler =(event)=>{ 
       event.preventDefault();
        const data1 = {
            displayName: Inputname,
            photoUrl: Photourl,
            idToken: authCntxt.isLoggedIn,
            returnSecureToken: true
        };
       console.log(data1);
        props.onAddData(data1);
      } 
    const InputNameHandler =(e)=>{
      e.preventDefault();
      setInputname(e.target.value)
      }
      const PhotourlHandler =(e)=>{
        e.preventDefault();
        setPhotourl(e.target.value)
        }
  return (
    <div>
      <h1>Contact Details</h1>
      <form onSubmit={submitHandler} >
        <label htmlFor="fname">Full Name</label>
        <input type="text" id='fname'value={Inputname} onChange={InputNameHandler} required/><br />
        <label htmlFor="photo">Profile photo url</label><br />
        <input type="url" id='photo' value={Photourl} onChange={PhotourlHandler} required/>
        <button type='submit' >Update</button>
        <button  onClick={props.cancelclk} >Cancel</button>
      </form>
    </div>
  )
}

export default ContactDetail
