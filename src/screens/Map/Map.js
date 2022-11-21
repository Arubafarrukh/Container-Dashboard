import React from "react";
import { Box, Breadcrumbs, IconButton, TextField, useTheme ,Typography} from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { defaultMarker } from "./defaultMarker";
import { popupContent, popupHead, popupText, okText } from "./popupStyles";
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';
import FormControl from '@mui/material/FormControl';
import DriverDetails from "../DriverDetails";
import {Routes, Route, useNavigate} from 'react-router-dom';
import "./Map.css";


const center = [51.505, -0.09];

const MapComp = () => {
  

  return (
    
     <div  style={{width: 300 , top: 0}}>
      
      

 


     <MapContainer style={{ width: "200%", height: "55vh",left:"0%",top:"12vh"}} center={center} zoom={10}>
     
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={center} icon={defaultMarker}>
       

      <Popup className="request-popup">
        <div style={popupContent}>
          <img
            src="https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/149_check_ok-512.png"
            width="150"
            height="150"
            alt="no img"
          />
          <div className="m-2" style={popupHead}>
            Success!
          </div>
          <span style={popupText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </span>
          <div className="m-2" style={okText}>
            Okay
          </div>
        </div>
      </Popup>
      
    </Marker>
    
    </MapContainer>
 

    </div>
    
  );
};

export default MapComp;