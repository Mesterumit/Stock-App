import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import PasswordIcon from '@mui/icons-material/Password';
import LogoutIcon from '@mui/icons-material/Logout';
import { styled, Toolbar, IconButton, Typography, Avatar, Menu, MenuItem, Stack, Box, Divider } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui';
import { useState } from 'react';
import { logout } from '../../store/auth';
import { useNavigate } from 'react-router-dom/dist';



const drawerWidth = 240;

const Appbar = styled(MuiAppBar)(({ theme, open }) => ({

    xIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create('width'),
    ...(open && {
        width: `cals(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.leavingScreen
        })
    })
}))

const Header = () => {
    const sidebarOpen = true;
    const [anchorEl, setAnchorEl] = useState(null)
    const dispacth = useDispatch()
    const navigate = useNavigate()

    const currentUser = sessionStorage.getItem('username')
    return (
        <>
            <Appbar open={sidebarOpen ?? true}>
                <Toolbar>
                    <IconButton
                        onClick={() => dispacth(uiActions.toggleMenu())}
                        color='inherit' size='large' edge='start'
                        sx={{ mr: 2 }}>
                        <MenuIcon />

                    </IconButton>
                    <Typography component='h1' variant='h6' noWrap sx={{ flexGrow: 1 }}>Clarusway Stock App</Typography>
                    <Box sx={{ cursor: 'pointer' }}
                        onClick={(e) => setAnchorEl(e.currentTarget)}
                    >
                        {currentUser &&
                            <Avatar src='/broken-image.jpg' alt={currentUser.toUpperCase()} />}

                    </Box>
                    {currentUser && (
                        <Menu
                            //     the code you provided seems to be set up to open 
                            //     the component when anchorEl is not null and close
                            //     it when anchorEl is null. However, if anchorEl is 
                            //     initially set to null, it should not be open
                            //      by default.
                            //      The open prop should be false when anchorEl is null,
                            //       and when you click on the element associated with
                            //        anchorEl, you typically set anchorEl to the target
                            //         element to open the component. When anchorEl is set
                            //          to a non-null value, it will trigger the component
                            //          to open, and when you close it, you set anchorEl back
                            //           to null.
                            //  This pattern is often used in libraries like Material-UI to
                            //   control the visibility of components like menus or 
                            //   popovers. It allows you to conditionally open and close 
                            //   these components based on user interactions or other 
                            //   criteria.
                            open={Boolean(anchorEl)}
                            anchorEl={anchorEl}
                            onClose={() => setAnchorEl(null)}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            marginThreshold={64}

                        >
                            <MenuItem>
                                <Stack direction='row'
                                    justifyContent='space-between'
                                    alignItems='center'>
                                    <Avatar src='/broken-image.jpg'
                                        alt={currentUser.toUpperCase()}
                                        variant='square' />
                                    <Stack direction='column' textAlign='center'>
                                        <Typography ml='50px'
                                            variant='h6'
                                        //  sx={{textTransfrom:'capitalize'}}
                                        >

                                            {currentUser}  </Typography>

                                        <Typography ml='50px'
                                            variant='subtitle2'
                                            sx={{ textTransform: 'capitalize', color: 'gray' }}
                                        >
                                            {/* if we dont use a equal singe to "true"
                                        then we would get the admin unless if it is null or undifened
                                        otherwise, we would get a something and it would lead us the
                                        show "admin" most time  */}
                                            {sessionStorage.getItem("admin") === true ?
                                                "admin" :
                                                "user"}</Typography>

                                    </Stack>

                                </Stack>
                            </MenuItem>
                            <Divider />

                            <MenuItem onClick={() => navigate('/stock/profile')}>
                                <PasswordIcon sx={{ mr: 2 }} />
                                Change Password
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={() => dispacth(logout(navigate))}>
                                <LogoutIcon sx={{ mr: 2 }} />
                                Logout
                            </MenuItem>

                        </Menu>

                    )}

                </Toolbar>


            </Appbar>
        </>
    )
}

export default Header;

