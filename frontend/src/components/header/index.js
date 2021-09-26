import React from 'react'
import './style.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
const Header = (props) => {
    return (

         <div > 
        <Box sx={{ flexGrow: 1 }} className="nav" >
            <AppBar position="static" >
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                       To-Do App Mern Stack  <WorkOutlineIcon/>
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
        </div>

    )
}

export default Header
