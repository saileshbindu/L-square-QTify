import React from "react";
import './navbar.css';
import { useTheme } from '@mui/material/styles';
import SearchBar from '../searchBar/search';
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