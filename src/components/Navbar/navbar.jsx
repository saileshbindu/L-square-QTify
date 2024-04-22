import React from "react";
import './navbar.css';
import SearchBar from '../SearchBar/search';
import { useTheme } from '@mui/material/styles';
import Logo from '../Logo/logo';
import Button from '../Button/button';


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