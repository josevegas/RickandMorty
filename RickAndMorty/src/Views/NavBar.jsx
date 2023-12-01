import React from 'react';
import {NavLink} from 'react-router-dom';
import SearchBar from '../Component/SearchBar.jsx';
import {useDispatch} from 'react-redux';
import {closeAction} from '../../redux/cardSlice.js'

const NavBar=(props)=>{
    const dispatch=useDispatch();
    const handleClose=(e)=>{
       dispatch(closeAction());
    }
    return(
        <div className='navbar navbar-expand-lg bg-body-tertiary' style={{backgroundColor: '#fcff4fc9'}}>
            <div className='container-fluid'>
                <NavLink to='/home' className='navbar-brand'>Home</NavLink>
                <NavLink to='/about' className='navbar-brand'>About</NavLink>
                <NavLink to='/favorite' className='navbar-brand'>Favorites</NavLink>
                <SearchBar onSearch={(characterID) =>props.onSearch(characterID)} />
                <NavLink to='/' className='navbar-brand'><button type="button" className="btn btn-danger m-2" onClick={handleClose}>Cerrar</button></NavLink>
            </div>
            
        </div>
    )
}

export default NavBar;