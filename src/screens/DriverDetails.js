import * as React from 'react';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import GpsFixedIcon from '@mui/icons-material/GpsFixed';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    
    
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
    
    <>
 
 <TableContainer  >
     <Table  stickyHeader  >
       <TableHead>
         <TableRow>
           <TableCell>Car Name</TableCell>
           <TableCell >Cars Location</TableCell>
          
         </TableRow>
       </TableHead>
       <TableBody>
         
           <TableRow >
             <TableCell>
               QST-201
             </TableCell>
             <TableCell ><GpsFixedIcon/>  Lorem ipsum lorem ipsum</TableCell>
             
           </TableRow>
           <TableRow >
             <TableCell>
               QST-201
             </TableCell>
             <TableCell ><GpsFixedIcon/>  Lorem ipsum lorem ipsum</TableCell>
             
           </TableRow>
           <TableRow >
             <TableCell>
               QST-201
             </TableCell>
             <TableCell ><GpsFixedIcon/>  Lorem ipsum lorem ipsum</TableCell>
             
           </TableRow>
           <TableRow >
             <TableCell>
               QST-201
             </TableCell>
             <TableCell ><GpsFixedIcon/>  Lorem ipsum lorem ipsum</TableCell>
             
           </TableRow>
         
       </TableBody>
     </Table>
   </TableContainer>
   
  
  </>
  )
}

export default DriverDetails

