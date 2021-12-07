import React from 'react';
import { AppBar, Toolbar, Box } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import {Link, useHistory} from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css';

function Navbar() {
    let history = useHistory(); // para redireccionar
    const [token, setToken] = useLocalStorage('token'); // para guardar el token en el localstorage
    function logout(){
        setToken(''); // para apagar el token del localstorage
        history.push('/login'); // para redireccionar a la pagina de login
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense" className="back" >
                    <Box paddingX={3.5} className="cursor" >
                        <Link to='/home' className='text-decorator-none'>
                            <Typography variant="h5" component="div" className="texto" sx={{ flexGrow: 1 }} >
                                Doramoucast
                            </Typography>
                        </Link>
                    </Box>

                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography component="div" variant="h6" className="texto"  sx={{ flexGrow: 1 }}>
                                    home
                                </Typography>
                            </Box>
                        </Link>
                        
                        <Box mx={1} className="cursor" >
                            <Typography variant="h6" className="texto" sx={{ flexGrow: 1 }}>
                                postagens
                            </Typography>
                        </Box>

                        <Box mx={1} className="cursor">
                            <Typography variant="h6" className="texto" sx={{ flexGrow: 1 }}>
                                temas
                            </Typography>
                        </Box>

                        <Box mx={1} className="cursor" >
                            <Typography variant="h6" className="texto" sx={{ flexGrow: 1 }}>
                                cadastrar tema
                            </Typography>
                        </Box>
                        
                        <Box paddingLeft={70} mx={1} className='cursor' sx={{ flexGrow: 1 }}>
                                {/* botão de logout com evento de click */}
                                <Typography variant="h6" className="texto" onClick={()=> logout()}>
                                    logout
                                </Typography>
                                   {/* botão de logout com evento de click */}
                        </Box> 
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;