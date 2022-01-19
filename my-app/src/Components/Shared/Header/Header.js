// import Logo from "../Logo";
// import Menu from "../Menu/Menu";
// import SearchBar from "../SearchBar/SearchBar";


// function Header(){
    
//     return(
//         <header>
//             <Logo/>
//             <SearchBar></SearchBar>
//             <Menu 
//                 menuItems={menuItems}
//                 cName="headerMenuItem"
//             />           
//         </header>
//     )
    
// }
// export default Header


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from "../Logo/Logo"

// const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const menuItems=[
    {            
        id:1,
        title:'Home',
        path: '',        
    },
    {   
        id:2,         
        title:'Services',
        path: 'services',  
    },
    {   
        id:3,          
        title:'Products',
        path: 'products',
    },
    {            
        id:4, 
        title:'Partners',
        path: 'partners',
    },
    {            
        id:5, 
        title:'Contact Us',
        path: 'contactUs',
    },
]

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" 
    sx={{
        backgroundColor: '#fff',
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Logo/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {menuItems.map((menuItem) => (
                <MenuItem key={menuItem.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{menuItem.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
             <Logo/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((menuItem) => (
              <Button
                key={menuItem.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#39335C', display: 'block' }}
              >
                {menuItem.title}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0}}>
            <Button variant="outlined"
            sx={{ border: '1px solid #A259FF', color: '#A259FF','&:hover':{
                backgroundColor: 'rgba(162,89,255,0.1)',border: '1px solid #A259FF'
            } }}>Log in</Button>
            <Button variant="contained" 
            sx={{ backgroundColor: '#A259FF', color: '#fff','&:hover':{
                backgroundColor: '#763bc1'
            } }}>Register</Button>            
          </Box>
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;