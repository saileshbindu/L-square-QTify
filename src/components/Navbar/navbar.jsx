import React from "react";
import {Grid} from '@mui/material';
import './navbar.css';
import Search from '../search/search';
import { useTheme } from '@mui/material/styles';
import Logo from '../logo/logo';
import FeedbackBut from '../button/button';


const Navbar = () =>{
    const theme = useTheme();
    return(
       <div>
        <Grid container className="navbarBg" sx={{display: theme.palette.display}}>
        <Grid xs={3} >
            <Logo />
        </Grid>
        <Grid xs={6}>
        <Search />
        </Grid>
        <Grid xs={3}>
        <FeedbackBut />
        </Grid>
        </Grid>
       </div>
    )
}

export default Navbar