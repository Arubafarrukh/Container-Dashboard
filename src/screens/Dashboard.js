

import React from 'react'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../Theme";
import { useState } from "react";
import { Routes, Route ,BrowserRouter} from "react-router-dom";
import { Grid, Row, Col } from 'rsuite';
import Sidebar from './Sidebar';
import Topbar from "./Topbar"
import Map from "./Map/Map"
import DriverInfo from './DriverInfo';
import DriverDetails from './DriverDetails';
export default function App() {
	const [theme, colorMode] = useMode();
	const [isSidebar, setIsSidebar] = useState(true);

	return (
		
		
		
		
			 <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
		
			<Grid fluid>
			
				<Row gutter={2}>
					
					<Col xs={5}>
						<div style={{ backgroundColor: '' }}
							className="show-col"><Sidebar/></div>
					</Col>
					
					<Col xs={19}>
						<div style={{ backgroundColor: '' }}
							className="show-col"><Topbar setIsSidebar={setIsSidebar}/></div>
					</Col>
					
					
					<Col xs={12}>
					
						<div style={{  backgroundColor: ''}}
							className="show-col"><Map/></div>
					</Col>
					
					<Col xs={7}>
					
						<div style={{  backgroundColor: ''}}
							className="show-col"><br/><br/><br/><br/><DriverInfo/></div>
					</Col>
					<Col xs={10}>
					
						<div style={{  backgroundColor: ''}}
							className="show-col"><DriverDetails/></div>
					</Col>

					
				</Row>
				
				</Grid>
			
      </ThemeProvider>
</ColorModeContext.Provider>
	)
				
		
	
}






