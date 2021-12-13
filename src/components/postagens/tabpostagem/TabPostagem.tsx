import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
    return (
        <>
        <TabContext value={value}>
            <AppBar position="static">
            <Tabs centered className="fundo" onChange={handleChange}>
                <Tab label="Todas as postagens" value="1" className="texto"/>
                <Tab label="Sobre Nós" value="2" />
            </Tabs>
            </AppBar>
            <TabPanel value="1" >
            <Box display="flex" flexWrap="wrap" justifyContent="center">
                <ListaPostagem />
            </Box>
            </TabPanel>
            <TabPanel value="2">
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre Nós</Typography>
            <Typography variant="body1" gutterBottom color="textPrimary" align="justify">O Doramoucast consiste em um podcast criado por dorameiras para dorameiras no intuito de informar tudo sobre o universo dos kdramas. Nosso podcast é postado todos os sábados.</Typography>
            </TabPanel>
        </TabContext>
        </>
    );
}
export default TabPostagem;