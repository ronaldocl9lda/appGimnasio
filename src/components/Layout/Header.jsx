import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { Button, MenuList } from '@mui/material';
import TableViewIcon from '@mui/icons-material/TableView';
import PersonIcon from '@mui/icons-material/Person';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';


function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElMant, setAnchorElMant] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenMantMenu = (event) => {
    setAnchorElMant(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseMantMenu = () => {
    setAnchorElMant(null);
  };

  return (
    <AppBar position="static" sx={{
      backgroundColor: 'primary.main',
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FitnessCenterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Gimnasio Moar
          </Typography>
          
          <Typography
            variant="p"
            noWrap
            component="a"
            href="/ejercicios/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 500,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Ejercicios
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
                <MenuItem component='a' href='/movie-table/'>
                  <Typography textAlign="center">Mantenimiento Ejercicios</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <LocalMoviesIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          
          <Typography
            variant="p"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 500,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Gimnasio Moar
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               <Typography
            variant="p"
            noWrap
            component="a"
            href="/ejercicios/"
            sx={{
              mr: 2,
              display: { xs: 'flex', ms: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            Ejercicios
          </Typography>
              </Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               <Typography
            variant="p"
            noWrap
            component="a"
            href="/rutinas/"
            sx={{
              mr: 2,
              display: { xs: 'flex', ms: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            Rutinas
          </Typography>
              </Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               <Typography
            variant="p"
            noWrap
            component="a"
            href="/actividadesGrupales/"
            sx={{
              mr: 2,
              display: { xs: 'flex', ms: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            Actividades Grupales
          </Typography>
              </Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               <Typography
            variant="p"
            noWrap
            component="a"
            href="/servicios/"
            sx={{
              mr: 2,
              display: { xs: 'flex', ms: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            Servicios
          </Typography>
              </Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               <Typography
            variant="p"
            noWrap
            component="a"
            href="/planes/"
            sx={{
              mr: 2,
              display: { xs: 'flex', ms: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            Planes
          </Typography>
              </Button>
          </Box>
          
{/* Menu Mantenimientos */}
<Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Mantenimientos">
              <IconButton onClick={handleOpenMantMenu} sx={{ p: 1 }}>
                <TableViewIcon style={{ fill:'white'}} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElMant}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElMant)}
              onClose={handleCloseMantMenu}
            >
              <MenuList>
              <MenuItem component='a' href='/servicios-table/'>
                  <Typography textAlign="center">Mantenimiento Servicios</Typography>
                </MenuItem>
                <MenuItem component='a' href='/planes-table/'>
                  <Typography textAlign="center">Mantenimiento Planes</Typography>
                </MenuItem>
                <MenuItem component='a' href='/ejercicios-table/'>
                  <Typography textAlign="center">Mantenimiento Ejercicios</Typography>
                </MenuItem>
                <MenuItem component='a' href='/rutinas-table/'>
                  <Typography textAlign="center">Mantenimiento Rutinas</Typography>
                </MenuItem>
                <MenuItem component='a' href='/actividadesGrupales-table/'>
                  <Typography textAlign="center">Mantenimiento Actividades</Typography>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
{/* Menu Mantenimientos */}



        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;