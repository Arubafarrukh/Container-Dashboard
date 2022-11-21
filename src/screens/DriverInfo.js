import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from "../images/images.jpg";
import ListItemIcon from '@mui/material/ListItemIcon';
import PlaceIcon from '@mui/icons-material/Place';
import Avatar from '@material-ui/core/Avatar';

function DriverInfo() {
  return (
    <div>
       <Card className='cards' sx={{ maxWidth:345  }}>
      <CardMedia
        component="img"
        height="250"
        image={img}
        alt="cars"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Car Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
              <ListItemIcon><PlaceIcon/>Location Descriptiom</ListItemIcon>
                
              </Typography>
        
      </CardContent>
      <CardActions>
      <Avatar
      
      src="/static/images/avatar/1.jpg"
    />
  
       Driver's Name
      </CardActions>
    </Card>
    </div>
  )
}

export default DriverInfo
