import { Box, Breadcrumbs, IconButton, TextField, useTheme ,Typography} from "@mui/material";
import { Container, Form } from "react-bootstrap";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../Theme.js";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AddIcon from '@mui/icons-material/Add';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import Map  from "../screens/Map/Map"
// import img from ""
import "./Topbar.css"

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  function handleClick() {
  
    console.info('You clicked a breadcrumb.');
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
          Tracking
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href=""
          onClick={handleClick}
        >
          Machines
        </Link>,
        
      ];
  }
  return (
    <Box display="flex" justifyContent="space-between" className="topbar"
     padding={2}>
      
      <Box
        display="flex"
        backgroundColor={colors.primary[500]}
        height="0px"
        
      >
         <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link underline="hover" color="inherit" href="/">
          Tracking
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href=""
        >
         All Machines
        </Link>
        
      </Breadcrumbs>
      </Box>
      <Box>
      
      <div className="headingMap"><h3>ALL MACHINES</h3></div>  
      
      <FormControl  >
  
      
      
   
    <TextField  variant="outlined" size="small" class="input-field" type="text" placeholder="search" ></TextField>
    
    <IconButton  class="searchicon" >
    <SearchIcon className="searchicon"/>
    
        </IconButton>
    <IconButton type="button" sx={{ p: 1 }}>
         
          <AddIcon className="add" />
        </IconButton>
    <IconButton type="button" sx={{ p: 1 }}>
          <FilterListIcon className="FilterListIcon" />
        </IconButton>


 

</FormControl>

      </Box>

      
      <Box className="topbar2">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
            
          ) : (
            
            <DarkModeOutlinedIcon />
          )}
          
        </IconButton>
        <IconButton type="button" sx={{ p: 1 }}>
          <AddIcon />
        </IconButton>
        
        <TextField  variant="outlined" size="small" class="text" type="text" placeholder="newFile" ></TextField>
        <Avatar alt="Remy Sharp" />
         {/* src= {}   */}
        <FormControl variant="outlined" size="small" >
        <Select >
        <MenuItem>
       
          
       
     
      </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        
      </FormControl>
      </Box>
    
    </Box>
    
  );
};

export default Topbar;