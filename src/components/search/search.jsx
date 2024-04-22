import { Button } from "@mui/base";
import React from "react";
import searchIcon from '../../assets/search-icon.svg';
import './search.css';
const search = () =>{
    return(<div className="searchMain">
        <form>
            <input
            placeholder="Search a song of your choice"
            />
            <Button type="submit">
                <img src={searchIcon} alt="search"/>
            </Button>
        </form>
    </div>)
}

export default search