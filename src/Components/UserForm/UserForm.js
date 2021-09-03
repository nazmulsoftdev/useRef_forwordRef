import React,{useRef,useEffect} from 'react';
import InputComponent from '../InputComponent/InputComponent';



const UserForm = ()=>{

  const userName = useRef();
  const userEmail = useRef();
  const userNumber = useRef();
  const userPassword = useRef();
  

  useEffect(() => {

    userName.current.focus();
    userName.current.addEventListener('keypress',(even)=>{

      even.target.style.color = 'green';
      let userText = even.target.value;

      if (userText.length===5) {
        alert('Length is 5');
        
      }
      else {
        return false;
      }

    })
    
  },[]);


   return(
       <div className="wrapperForm">
        <form>

         <InputComponent type="text" placeholder="Name" required="required" ref={userName}/>
         <InputComponent type="email" placeholder="Email" required="required" ref={userEmail}/>
         <InputComponent type="number" placeholder="Phone" required="required" ref={userNumber}/>
         <InputComponent type="password" placeholder="Password" required="required" ref={userPassword}/>
         <InputComponent type="submit" value="Send"/>
         </form>
       </div>
   );

}




export default UserForm;