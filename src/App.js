import Sidebar from "./screens/Sidebar"
import Topbar from "./screens/Topbar";
import Map from "./screens/Map/Map";

import './App.css';
import {ColorModeContext , useMode} from "./Theme.js";
import {CssBaseline, ThemeProvider } from "@mui/material";


function App() {
  
  return (
    <>
      
   
     
    
      <Topbar />
    
      <Sidebar />
      
      <Map />
     
       
    
    
    
    </>
  
    
     
   

  
   
     
    

     
  );
}

export default App;
