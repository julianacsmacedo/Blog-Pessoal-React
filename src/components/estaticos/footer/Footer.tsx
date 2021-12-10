import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { Grid, Box, Typography } from '@material-ui/core';
import './Footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    var footerComponent;

    if(token != "") {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12}>
            <Box className="box1">
                <Box paddingTop={1} alignItems="center" justifyContent="center">
                    <Typography variant="h6" align="center" gutterBottom className="cor-texto">Siga-nos nas redes sociais </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://twitter.com/doramoucast" target="_blank" rel="noreferrer">
                        <TwitterIcon className="icon"/>
                    </a>
                    <a href="https://www.instagram.com/doramoucast/" target="_blank" rel="noreferrer">
                        <InstagramIcon className="icon"/>
                    </a>
                    <a href="https://open.spotify.com/show/1WBCtXiL3c04sVpE1NgisX?si=f4b9deeab5514ec1" target="_blank" rel="noreferrer">
                        <PlayCircleFilledIcon className="icon"/>
                    </a>
                </Box>
            </Box>
            <Box className="box2">
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" className="cor-texto" >© 2021 Copyright:</Typography>
                </Box>
                <Box>
                    <a target="_blank" rel="noreferrer" href="https://brasil.generation.org" className='text-decorator-none'>
                        <Typography variant="subtitle2" gutterBottom className="cor-texto" align="center">brasil.generation.org</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;