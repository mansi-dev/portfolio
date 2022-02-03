
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import styles from '../styles/Toolbar.module.css';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

export const ToolbarComp = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
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
        <div>
            <AppBar position="static" className={styles.appBar}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                       
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit">
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
                                }}>

                                <MenuItem key='About' onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">About</Typography>
                                </MenuItem>
                                <MenuItem key='Experience' onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Experience</Typography>
                                </MenuItem>
                                <MenuItem key='Projects' onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Projects</Typography>
                                </MenuItem>
                                <MenuItem key='Contact' onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Contact</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} className={styles.logo}>
                            MZ
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
                            <Button
                                key='About'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#23272a', display: 'block' }}>
                                About
                            </Button>
                            <Button
                                key='Experience'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#23272a', display: 'block' }}>
                                Experience
                            </Button>
                            <Button
                                key='Projects'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#23272a', display: 'block' }}>
                                Projects
                            </Button>
                            <Button
                                key='Contact'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#23272a', display: 'block' }}>
                                Contact
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default ToolbarComp;