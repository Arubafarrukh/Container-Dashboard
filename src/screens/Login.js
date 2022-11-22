import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Box ,Button,Input,TextField,Typography}from '@mui/material';
import  ButtonProps   from '@mui/material/Button';
import { useNavigate ,Link} from 'react-router-dom';
import {useState} from 'react';
import  "./Login.css";
import Stack from '@mui/material/Stack';
import img from "../images/logo.png";
import image from "../images/Group 1.png";
import { SettingsInputAntenna } from '@mui/icons-material';
import { orange, purple } from '@mui/material/colors';
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(orange[purple]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

export default function Login() {
  const navigate= useNavigate();
  

  const [input,setInput]=useState({
    email:"",
    password:"",
  });

  const handleLogin = (e) => {
   
    e.preventDefault();
    localStorage.setItem("loggedin" ,true);
    navigate("/home");
   
   
  }

  return (
    <div className='wrapper'>

      <div className='item1'>  <img  src={img}/> </div>
      <div className='item2'>
       <form >
        <Box display="flex" flexDirection={"column"} maxWidth={400}
        alignItems="center" justifyContent={"center"} margin="auto"
        marginTop={5} padding={3} borderRadius={5} 

       
         >
          
          <TextField margin="normal"  type={'email'} variant='outlined' placeholder='Email' name='email'
          sx= {{ height: 0,marginBottom:6}}
          value={input.email} onChange={(e)=> setInput({...input,
          [e.target.name]:e.target.value})}/>
          <TextField margin="normal"  type={'password'} variant='outlined'  placeholder='Password' name='password'
          value={input.password}
          sx= {{ height: 0 ,marginBottom:8}}
          onChange={(e)=> setInput({...input,
            [e.target.name]:e.target.value})} />
         
         
         <Button variant='contained' onClick={handleLogin} 
         sx={{ width:210 ,borderRadius:3,color: 'white', backgroundColor: 'orange',':hover': {
          bgcolor: 'orange', 
          color: 'white',
          
        }, }}>Login
          </Button> 
         
                   
        <Button href="/signup"   lg={{marginTop:6,borderRadius:3}}> 
        if not register SignUp
          </Button>
        </Box>
       </form>

        
         </div>
        
         
        
         
      </div>
      
 
       
  );
}