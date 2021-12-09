import React, { useEffect } from "react";
import './Home.css';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useHistory } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

function Home() {

    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")

        }
    }, [token])

    return (
        //caminho abreviado
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="background back">
                <Grid alignItems="center" item xs={6} >
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo1'>Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button variant="outlined" className="botao">Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} className="back">
                </Grid>

                <Grid alignItems="center" item xs={12} className="postagens">
                    <Box >
                    < TabPostagem />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;