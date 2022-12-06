import React,{useRef,useContext} from 'react'
import AuthContext from '../Store/auth-context';

const ContactDetail = (props) => {
    const authCntxt = useContext(AuthContext)
    
    const displayName = useRef();
    const photoUrl = useRef();
    const submitHandler =(event)=>{  
        event.preventDefault();
        const data1 = {
            displayName: displayName.current.value,
            photoUrl: photoUrl.current.value,
            idToken: authCntxt.isLoggedIn,
            returnSecureToken: true
        };
       console.log(data1);
        props.onAddData(data1);
      } 

  return (
    <div>
      <h1>Contact Details</h1>
      <form onSubmit={submitHandler} >
        <label htmlFor="fname">Full Name</label>
        <input type="text" id='fname' ref={displayName}/><br />
        <label htmlFor="photo">Profile photo url</label><br />
        <input type="url" id='photo' ref={photoUrl}/>
        <button type='submit' >Update</button>
        <button  onClick={props.cancelclk} >Cancel</button>
      </form>
    </div>
  )
}

export default ContactDetail
