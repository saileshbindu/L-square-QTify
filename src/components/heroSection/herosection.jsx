import React from "react";
import phoneimg from '../../assets/hero_headphones.png';
import './herosection.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#121212',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const HeroSection = () =>{
    return(<div>
        <Grid container className="heroSection">
        <Grid container className="innerHerosection">
        <Grid item xs={7} justifyContent="right">
          <Item> <h1>
           100 Thousand Songs, ad-free <br/>
           Over thousands podcast episodes
           </h1></Item>
        </Grid>
        <Grid item xs={5}>
           <Item> <img src={phoneimg} alt="Head Phone" justifyContent="left"/></Item>
        </Grid>

        </Grid>
        </Grid>
    </div>)
}

export default HeroSection