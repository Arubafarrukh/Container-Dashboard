import { tokens } from '../Theme';
import './sidebar.css'
import {useState} from 'react';
import { ProSidebar,Menu , MenuItem, ProSidebarProvider } from 'react-pro-sidebar';
import "react-pro-sidebar/dist/css/styles.css";
import { Box ,IconButton , Typography,useTheme} from '@mui/material';
import { Link } from 'react-router-dom';
import FlareIcon from '@mui/icons-material/Flare';
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import Map from "../screens/Map/Map";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import PlayDisabledIcon from '@mui/icons-material/PlayDisabled';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import DetailsIcon from '@mui/icons-material/Details';
import ErrorIcon from '@mui/icons-material/Error';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import BusinessIcon from '@mui/icons-material/Business';
import LayersClearIcon from '@mui/icons-material/LayersClear';
import SettingsInputSvideoIcon from '@mui/icons-material/SettingsInputSvideo';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';
import { Grid } from '@material-ui/core';


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: "#FFFFFF",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      {/* <Link to={to} /> */}
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed]=useState(false);
  const [selected, setSelected]=useState("Dashboard");
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  
  return (
 
       <Grid className="sidebar"
    sx={{
      "& .pro-sidebar-inner": {
        background: `${colors.primary[100]} !important`,
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important",
      },
      "& .pro-inner-item:hover": {
        color: "#fcfcfc !important",
      },
      "& .pro-menu-item.active": {
        color: "transparent !important",
      },
    }}>
      <ProSidebarProvider collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
           
            style={{
              margin: "10px 0 20px 0",
              
            }}
          >
          
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="10px"
              >
                <Item
              title="Arrival"
              to="/"
              icon={<FlareIcon />}
             
              color="#FFFFFF"
            />
                
          
              </Box>
          
          </MenuItem>

          
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
           
               <List>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon  
         >
          <PlayDisabledIcon style={{ color: "white" }} />
        </ListItemIcon>
       
        <ListItemText  
         disableTypography
         primary={<Typography  type="body2" style={{ color: '#FFFFFF' }}>Dashboard</Typography>}
          />
        {open ? <ExpandLess style={{ color: '#FFFFFF' }}  /> : <AddIcon style={{ color: "white" }}/>}
        
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List  component="div" disablePadding>
          <ListItemButton sx={{ pl: 9 }}>
           
            <ListItemText  
             disableTypography
             primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>subitem</Typography>}
            
            />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
          < LayersClearIcon style={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText 
           disableTypography
           primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Tracking</Typography>}
         />
      </ListItemButton>
      <ListItemButton >
        <ListItemIcon>
          <HourglassEmptyIcon style={{ color: "white" }}/>
        </ListItemIcon>
        <ListItemText 
        disableTypography
        primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Ananlysis</Typography>}
         />
        
      </ListItemButton>
      
    </List>

            <Typography
              variant="h6"
              color="#FFFFFF"
              sx={{ m: "15px 0 5px 20px" }}
            >
              System
            </Typography>
            <Item
              title="Reports"
              to="/"
              icon={<DetailsIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Deviations"
              to="/"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Bugs"
              to="/"
              icon={<ErrorIcon  />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color="#FFFFFF"
              sx={{ m: "15px 0 5px 20px" }}
            >

              Transportation
            </Typography>
            
            <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <BusinessIcon style={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText 
        disableTypography
        primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Cargo</Typography>}
         />
        {open ? <ExpandLess style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
        
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List  component="div" disablePadding>
          <ListItemButton sx={{ pl: 9 }}>
           
            <ListItemText 
            disableTypography
            primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>subitem</Typography>}
            />
            {open ? <AddIcon style={{ color: "white" }} /> : <ExpandLess  style={{ color: "white" }}/>}
          </ListItemButton>
          <ListItemButton sx={{ pl: 9 }}>
           
            <ListItemText 
            disableTypography
            primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>subitem</Typography>}
             />
            {open ? <AddIcon style={{ color: "white" }} /> : <ExpandLess style={{ color: "white" }}/>}
          </ListItemButton>
          <ListItemButton sx={{ pl: 9 }}>
           
            <ListItemText    
            disableTypography
            primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>subitem</Typography>}
            />
            {open ? <AddIcon style={{ color: "white" }} /> : <ExpandLess  style={{ color: "white" }}/>}
          </ListItemButton>
        </List>
      </Collapse>
           
        
             <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <BarChartOutlinedIcon style={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText 
        disableTypography
        primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Urban</Typography>}
         />
        {open ? <ExpandLess style={{ color: "white" }} /> : <ExpandMore style={{ color: "white" }}/>}
        
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List  component="div" disablePadding>
          <ListItemButton sx={{ pl: 9 }}>
           
            <ListItemText 
            disableTypography
            primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>subitem</Typography>} />
          </ListItemButton>
        </List>
      </Collapse>
           
               <ListItemButton onClick={handleClick}>
        <ListItemIcon >
          <PieChartOutlineOutlinedIcon style={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText 
        disableTypography
        primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Settings</Typography>}
        
        />
        {open ? <ExpandLess style={{ color: "white" }} /> : <ExpandMore style={{ color: "white" }}/>}
        
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List  component="div" disablePadding>
          <ListItemButton sx={{ pl: 9 }}>
           
            <ListItemText 
            disableTypography
            primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>sub item</Typography>}
            />
          </ListItemButton>
        </List>
      </Collapse>
            <Item
              title="Activity"
              to="/"
              icon={<OpenInNewIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Settings"
              to="/"
              icon={<SettingsInputSvideoIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            
            <Typography
              variant="h6"
              color="#FFFFFF"
              sx={{ m: "15px 0 5px 20px" }}
            >
              
            </Typography>
                   <ListItemButton onClick={handleClick}>
        <ListItemIcon >
          <PieChartOutlineOutlinedIcon style={{ color: "white" }}/>
        </ListItemIcon>
        
        <ListItemText 
               disableTypography
               primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Lorem ipsum</Typography>}
        />
        {open ? <ExpandLess style={{ color: "white" }} /> : <KeyboardDoubleArrowRightIcon style={{ color: "white" }} />}
        
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List  component="div" disablePadding>
          <ListItemButton sx={{ pl: 9 }}>
           
            <ListItemText 
            disableTypography
            primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>sub item</Typography>}

             />
          </ListItemButton>
        </List>
      </Collapse>
          </Box>
        </Menu>
      </ProSidebarProvider>
     
    </Grid>
   
   
   
    
  )
}

export default Sidebar
