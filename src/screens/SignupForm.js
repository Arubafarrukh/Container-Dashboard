import React from 'react'

import {Box ,Button,Input,TextField,Typography}from '@mui/material';
import { useNavigate ,Link} from 'react-router-dom';
import {useState} from 'react';
import  "./Login.css";
import img from "../images/logo.png";
import image from "../images/Group 1.png";


function SignupForm() {
    const navigate= useNavigate();
  
   const [input,setInput]=useState({
    phonenumber:"",
    username:"",
    email:"",
    password:"",
    confirmpassword:"",

   }

   );
  
 

  const handleLogin = (e) => {
   
    e.preventDefault();
    console.log("SUBMIT")
    console.log(input);
    localStorage.setItem("user" , JSON.stringify(input));
    navigate("/");
   
   
  }

  return (
    <div className='wrapper'>

    <div className='item1'>  <img  src={image}/> </div>
    <div className='item2'>
     <form  >
      <Box display="flex" flexDirection={"column"} maxWidth={400}
      alignItems="center" justifyContent={"center"} margin="auto"
      marginTop={5} padding={3} borderRadius={5} 

     
       >
        <img src={img}/>
        <TextField margin="normal"  type={'name'} variant='outlined' placeholder='PhoneNumber' name='phonenumber'
        value={input.phonenumber} onChange={(e)=> setInput({...input,
            [e.target.name]:e.target.value})}/>
        
        <TextField margin="normal"   type={'name'} variant='outlined' placeholder='UserName' name='username'
        value={input.username} onChange={(e)=> setInput({...input,
        [e.target.name]:e.target.value})}/>
        <TextField margin="normal"  type={'email'} variant='outlined' placeholder='Email' name='email'
        value={input.email} onChange={(e)=> setInput({...input,
        [e.target.name]:e.target.value})}/>
        
        <TextField margin="normal"  type={'password'} variant='outlined'  placeholder='Password' name='password'
        value={input.password}
        onChange={(e)=> setInput({...input,
          [e.target.name]:e.target.value})} />
          <TextField margin="normal"  type={'password'} variant='outlined' placeholder='ConfirmPassword' name='confirmpassword'
        value={input.confirmpassword} onChange={(e)=> setInput({...input,
        [e.target.name]:e.target.value})}/>
       
       
       <Button variant='contained' 
        onClick={handleLogin}
        
       sx={{marginTop:3,borderRadius:3,color: 'white', backgroundColor: 'orange',':hover': {
        bgcolor: 'orange', 
        color: 'white',
      }, }}>Sign Up
        </Button> 
      
      </Box>
     </form>

      
       </div>
      
       
      
       
    </div>
    
  )
}

export default SignupForm
