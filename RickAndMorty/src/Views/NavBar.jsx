import React from 'react';
import {NavLink} from 'react-router-dom';
import SearchBar from '../Component/SearchBar.jsx'

const NavBar=(props)=>{
    return(
        <div>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/favorite'>Favorites</NavLink>
            <SearchBar onSearch={(characterID) =>props.onSearch(characterID)} />
        </div>
    )
}

export default NavBar;