import React from "react";
import {Grid} from '@mui/material';
import './navbar.css';
import SearchBar from '../SearchBar/search';
import { useTheme } from '@mui/material/styles';
import Logo from '../Logo/logo';
import Button from '../Button/button';


const Navbar = () =>{
    const theme = useTheme();
    return(
       <div>
        <Grid container component="nav" className="navbarBg" sx={{display: theme.palette.display}}>
        <Grid xs={3} >
            <Logo />
        </Grid>
        <Grid xs={6}>
        <SearchBar />
        </Grid>
        <Grid xs={3}>
        <Button />
        </Grid>
        </Grid>
       </div>
    )
}

export default Navbar