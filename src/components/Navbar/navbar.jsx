import React from "react";
import './navbar.css';
import { useTheme } from '@mui/material/styles';
import Logo from '../logo/logo';
import Button from '../button/button';
import SearchBar from '../SearchBar/search';


const Navbar = () =>{
    const theme = useTheme();
    return(
       <div>
        <nav className="navbarBg">
            <Logo />
            <SearchBar/>
            <Button />
        </nav>
       </div>
    )
}

export default Navbar