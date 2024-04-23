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
    return(<div className="heroSection">
        <h1>
           100 Thousand Songs, ad-free Over thousands podcast episodes
           </h1>
           <img src={phoneimg} alt="Head Phone"/>
        
    </div>)
}

export default HeroSection