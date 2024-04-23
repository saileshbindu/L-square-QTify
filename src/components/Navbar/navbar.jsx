import React from "react";
import './navbar.css';
import SearchBar from '../searchBar/search';
import { useTheme } from '@mui/material/styles';
import Logo from '../logo/logo';
import Button from '../button/button';


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