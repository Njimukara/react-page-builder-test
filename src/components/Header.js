import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <Box style={{backgroundColor: 'orange', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', color: 'white'}}>
        {/*First section  */}
        <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: '20px'}}> 
            <Box>
                <ArrowBackIosIcon />
            </Box>
            <Box style={{margin: '0 15px'}}>
                <Typography style={{fontSize: '20px'}}>Untitled Page</Typography>
                <Typography style={{fontSize: '12px'}}>https://untitiledPage.com</Typography>
            </Box>
            <Box>
                <MoreVertIcon />
            </Box>
        </Box>

        {/*Middle section  */}
        <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <SettingsIcon style={{marginRight: '10px'}}/>
            <FilterNoneIcon style={{marginRight: '10px'}}/>
            <AddCircleOutlineIcon style={{marginRight: '10px'}}/>
        </Box>

        {/*Third section on Header  */}
        <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box>
                <Button variant='contained' style={{margin: '15px'}}>Publish</Button>
            </Box>
            <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Card style={{backgroundColor: 'purple', minHeight: '20px', minWidth: '25px'}}>
                    <img src='' alt="" />
                    
                </Card>
                <Typography style={{margin: '0 15px'}}>John Doe</Typography>
                <ArrowDropDownIcon style={{marginRight: '15px'}}/>
            </Box>
        </Box>
    </Box>
  )
}

export default Header