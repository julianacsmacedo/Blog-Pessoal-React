import React from "react";
import './CadastroUsuario.css';
import {Grid, Typography, TextField, Box, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';

function CadastroUsuario() {

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='imagem2 rotação-img'>
            <Grid item xs={6} ></Grid>
            <Grid item xs={6} alignItems='center'>
            <Box>
                <form>
                    <Typography variant="h3" gutterBottom align="center" component="h3" className="texto1">Entrar</Typography>
                    <TextField id="usuario" label="usuário" variant="outlined" name="usuario" margin="normal" fullWidth />
                    <TextField id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
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
            </Box>
            </Grid>
            
        </Grid>
    );
}

export default CadastroUsuario;