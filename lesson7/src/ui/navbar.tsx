import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import React from 'react'

function Navbar() {
  return <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{mr: 2}}
      >
        <MenuIcon/>
      </IconButton>
      <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
        My first app with ReactJS
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
}

export default Navbar