import React from "react";
import './Login.css';
import {Grid, Box, Typography, TextField, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

function Login () {

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className="background2 back" >
            <Grid alignItems='center' xs={6} >
                <Box paddingX={20}>
                    <form action="">
                        <Typography variant="h3" gutterBottom align="center" component="h3" className="texto1">Entrar</Typography>
                        <TextField id="usuario" label="usuário" variant="outlined" name="usuario" margin="normal" fullWidth />
                        <TextField id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' className="botao">
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                            <Link to='/cadastrousuario'>
                                <Typography variant='subtitle1' gutterBottom align='center' className="texto1">Cadastre-se</Typography>
                            </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6}>

            </Grid>
        </Grid>
    );
}

export default Login;