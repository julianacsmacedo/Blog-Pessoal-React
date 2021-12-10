import React, { useEffect } from "react";
import './Home.css';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import {toast} from 'react-toastify';

function Home() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>((state) => state.tokens);

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
            history.push("/login")

        }
    }, [token])

    return (
        //caminho abreviado
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="back ">
                <Grid alignItems="center" item xs={6}  >
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom component="h3" align="center" className='titulo'>Seja bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom  component="h5" align="center" className='titulo1'>Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1} className="botao">
                            <ModalPostagem />
                        </Box>
                        <Link to="/posts" className='text-decorator-none'>
                            <Button variant="outlined" className="botao">Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} className="back background" >
                </Grid>

                <Grid alignItems="center" item xs={12} className="postagens" >
                    <Box >
                        < TabPostagem />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;