import React from 'react';
import {NavLink} from 'react-router-dom';
import SearchBar from '../Component/SearchBar.jsx'

const NavBar=(props)=>{
    return(
        <div className='navbar navbar-expand-lg bg-body-tertiary' style={{backgroundColor: '#fcff4fc9'}}>
            <div className='container-fluid'>
                <NavLink to='/home' className='navbar-brand'>Home</NavLink>
                <NavLink to='/about' className='navbar-brand'>About</NavLink>
                <NavLink to='/favorite' className='navbar-brand'>Favorites</NavLink>
                <SearchBar onSearch={(characterID) =>props.onSearch(characterID)} />
            </div>
            
        </div>
    )
}

export default NavBar;