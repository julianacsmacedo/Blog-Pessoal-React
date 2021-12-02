import React from "react";
import './CadastroUsuario.css';
import {Grid, Typography, TextField, Box, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';

function CadastroUsuario() {

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='back'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
            <Box paddingX={10}>
                <form>
                    <Typography variant="h3" gutterBottom align="center" component="h3" className="texto2">Cadastrar</Typography>
                    <TextField id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth/>
                    <TextField id="usuario" label="usuário" variant="outlined" name="usuario" margin="normal" fullWidth />
                    <TextField id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                    <TextField id="confirmarSenha" label="confirmarSenha" variant="outlined" name="confirmarSenha" margin="normal" type="password" fullWidth />
                    <Box marginTop={2} textAlign='center'>
                        <Link to='/login' className='text-decorator-none'>
                            <Button variant='contained' color="secondary" className='btnCancelar'>
                                Cancelar
                            </Button>
                            <Button type='submit' variant='contained' color="primary">
                                Cadastrar
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