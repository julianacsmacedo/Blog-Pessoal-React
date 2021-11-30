import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { Grid, Box, Typography } from '@material-ui/core';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#D92B4B", height: "80px" }} >
                        <Box paddingTop={1} alignItems="center" justifyContent="center">
                            <Typography variant="h6" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://twitter.com/doramoucast" target="_blank" rel="noreferrer">
                                <TwitterIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                            <a href="https://www.instagram.com/doramoucast/" target="_blank" rel="noreferrer">
                                <InstagramIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                            <a href="https://open.spotify.com/show/1WBCtXiL3c04sVpE1NgisX?si=f4b9deeab5514ec1" target="_blank" rel="noreferrer">
                                <PlayCircleFilledIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#D92B4B", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2021 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" rel="noreferrer" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;