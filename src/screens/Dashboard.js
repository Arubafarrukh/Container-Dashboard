

import React from 'react'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../Theme";
import { useState } from "react";
import { Routes, Route ,BrowserRouter} from "react-router-dom";
// import '../node_modules/rsuite/dist/rsuite.min.css';
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
					{/* <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes> */}
					
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






