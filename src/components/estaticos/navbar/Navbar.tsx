import React from 'react';
import { AppBar, Toolbar, Box } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function logout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })
        history.push('/login');
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static">
            <Toolbar variant="dense" className="fundo" >
                <Box paddingX={3.5} className="cursor" >
                    <Link to='/home' className='text-decorator-none'>
                        <Typography variant="h5" component="div" className="texto" sx={{ flexGrow: 1 }} >
                            Doramoucast
                        </Typography>
                    </Link>
                </Box>

                <Link to="/home" className="text-decorator-none">
                    <Box mx={1} className="cursor">
                        <Typography component="div" variant="h6" className="texto" sx={{ flexGrow: 1 }}>
                            home
                        </Typography>
                    </Box>
                </Link>

                <Box mx={1} className="cursor" >
                    <Link to="/posts" className="text-decorator-none">
                        <Typography variant="h6" className="texto" sx={{ flexGrow: 1 }}>
                            postagens
                        </Typography>
                    </Link>
                </Box>

                <Box mx={1} className="cursor">
                    <Link to="/temas" className="text-decorator-none">
                        <Typography variant="h6" className="texto" sx={{ flexGrow: 1 }}>
                            temas
                        </Typography>
                    </ Link>
                </Box>

                <Box mx={1} className="cursor" >
                    <Link to="/formularioTema" className="text-decorator-none">
                        <Typography variant="h6" className="texto" sx={{ flexGrow: 1 }}>
                            cadastrar tema
                        </Typography>
                    </Link>
                </Box>

                <Box paddingLeft={70} mx={1} className='cursor' sx={{ flexGrow: 1 }}>
                    {/* botão de logout com evento de click */}
                    <Typography variant="h6" className="texto" onClick={() => logout()}>
                        logout
                    </Typography>
                    {/* botão de logout com evento de click */}
                </Box>
            </Toolbar>
        </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;