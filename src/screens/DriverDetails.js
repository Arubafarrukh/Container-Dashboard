import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PlaceIcon from '@mui/icons-material/Place';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
function DriverDetails() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
    
    sx={{ width: '120%', maxWidth: 360 }}
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
      <ListSubheader component="div" id="nested-list-subheader"  >  
        <ListItemButton onClick={handleClick}>
      
        <StyledBadge  color="secondary">
      <ListItemText className='list' primary="Availble Drivers" />
        <PersonIcon />
      </StyledBadge>
      <IconButton >
      <div>{open ? < ExpandLess /> : <ExpandMore />}</div>
    </IconButton>
    
     
    </ListItemButton>
    <Collapse in={open} timeout="auto" unmountOnExit>
      
    <List sx={{ width: '100%', maxWidth: 360 }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src="" />
        </ListItemAvatar>
        <ListItemText
         
          primary="Drivers Name"
          secondary={
            <React.Fragment>
              <Typography
                
                variant="body2"
                color="text.primary"
              > 
              <ListItemIcon><PlaceIcon/>Location</ListItemIcon>
                
              </Typography>
              {"Lorem ipsum dolor sit amet. "}
            
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar  src="" />
        </ListItemAvatar>
        <ListItemText
         
          primary="Drivers Name"
          secondary={
            <React.Fragment>
              <Typography
                
                variant="body2"
                color="text.primary"
              > 
              <ListItemIcon><PlaceIcon/>Location</ListItemIcon>
                
              </Typography>
              {"Lorem ipsum dolor sit amet. "}
            
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar  src="" />
        </ListItemAvatar>
        <ListItemText
         
         primary="Drivers Name"
         secondary={
           <React.Fragment>
             <Typography
               
               variant="body2"
               color="text.primary"
             > 
             <ListItemIcon><PlaceIcon/>Location</ListItemIcon>
               
             </Typography>
             {"Lorem ipsum dolor sit amet. "}
           
           </React.Fragment>
         }
       />
      </ListItem>
    </List>
  
    </Collapse>
      </ListSubheader>
    }
  >
  
   
  </List>
  )
}

export default DriverDetails

