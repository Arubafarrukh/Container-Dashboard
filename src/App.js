

import React from 'react'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";
import { useState } from "react";
import { Routes, Route ,BrowserRouter} from "react-router-dom";
import '../node_modules/rsuite/dist/rsuite.min.css';
import { Grid, Row, Col } from 'rsuite';
import Sidebar from './screens/Sidebar';
import Topbar from "./screens/Topbar"
import Map from "./screens/Map/Map"
import DriverInfo from './screens/DriverInfo';
import DriverDetails from './screens/DriverDetails';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import SignUp from './screens/Register';

export default function App() {
	const [theme, colorMode] = useMode();
	const [isSidebar, setIsSidebar] = useState(true);

	return (
		
		
		
		 <BrowserRouter>
		<Routes>
             
              <Route path="/" element={<Login />} /> 
              <Route path="/home" element={<Dashboard />} /> 
              <Route path="/signup" element={<SignUp />} /> 
              
             
            </Routes>
		</BrowserRouter> 
	
		
		
	
		
			
    
	)
				
		
	
}






