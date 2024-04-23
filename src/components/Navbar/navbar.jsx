import React from "react";
import './navbar.css';
import { useTheme } from '@mui/material/styles';
import Logo from '../Logo/logo';
import Button from '../Button/button';
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