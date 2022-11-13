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
        color: colors.grey[100],
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
        background: `${colors.primary[400]} !important`,
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important",
      },
      "& .pro-inner-item:hover": {
        color: "#868dfb !important",
      },
      "& .pro-menu-item.active": {
        color: "#6870fa !important",
      },
    }}>
      <ProSidebarProvider collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
           
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
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
              selected={selected}
              setSelected={setSelected}
              color={colors.grey[100]}
            />
                
          
              </Box>
            )}
          </MenuItem>

          
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
           
               <List>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <PlayDisabledIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        {open ? <ExpandLess /> : <AddIcon />}
        
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List  component="div" disablePadding>
          <ListItemButton sx={{ pl: 9 }}>
           
            <ListItemText primary="subitem" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
          < LayersClearIcon />
        </ListItemIcon>
        <ListItemText primary="Tracking" />
      </ListItemButton>
      <ListItemButton >
        <ListItemIcon>
          <HourglassEmptyIcon />
        </ListItemIcon>
        <ListItemText primary="Ananlysis" />
        
      </ListItemButton>
      
    </List>

            <Typography
              variant="h6"
              color={colors.grey[300]}
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
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Transportation
            </Typography>
            
            <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <ListItemText primary="Cargo" />
        {open ? <ExpandLess /> : <AddIcon />}
        
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List  component="div" disablePadding>
          <ListItemButton sx={{ pl: 9 }}>
           
            <ListItemText primary="subitem" />
            {open ? <AddIcon /> : <ExpandLess />}
          </ListItemButton>
          <ListItemButton sx={{ pl: 9 }}>
           
            <ListItemText primary="subitem" />
            {open ? <AddIcon /> : <ExpandLess />}
          </ListItemButton>
          <ListItemButton sx={{ pl: 9 }}>
           
            <ListItemText primary="subitem" />
            {open ? <AddIcon /> : <ExpandLess />}
          </ListItemButton>
        </List>
      </Collapse>
           
        
             <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <BarChartOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Urban" />
        {open ? <ExpandLess /> : <ExpandMore />}
        
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List  component="div" disablePadding>
          <ListItemButton sx={{ pl: 9 }}>
           
            <ListItemText primary="subitem" />
          </ListItemButton>
        </List>
      </Collapse>
           
               <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <PieChartOutlineOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
        {open ? <ExpandLess /> : <ExpandMore />}
        
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List  component="div" disablePadding>
          <ListItemButton sx={{ pl: 9 }}>
           
            <ListItemText primary="subitem" />
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
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              
            </Typography>
                   <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <PieChartOutlineOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="lorem ipsum" />
        {open ? <ExpandLess /> : <KeyboardDoubleArrowRightIcon />}
        
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List  component="div" disablePadding>
          <ListItemButton sx={{ pl: 9 }}>
           
            <ListItemText primary="subitem" />
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
