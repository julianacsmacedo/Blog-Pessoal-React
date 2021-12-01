import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" className="back" >
                    <Box className="cursor" >
                        <Typography variant="h5" className="texto">
                            Doramoucast
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className="cursor" >
                            <Typography variant="h6" className="texto">
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor" >
                            <Typography variant="h6" className="texto">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor" >
                            <Typography variant="h6" className="texto">
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor" >
                            <Typography variant="h6" className="texto">
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className="cursor" >
                                <Typography variant="h6" className="texto">
                                    logout
                                </Typography>
                            </Box>
                        </Link>
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;