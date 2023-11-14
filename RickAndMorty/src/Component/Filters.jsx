import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { discardFilterAction, filterGenderAction, filterStatusAction, orderCharAction } from "../../redux/cardSlice";

const Filters=({setCurrentPage})=>{
    const dispatch=useDispatch();
    const [filter,setFilter]=useState({
        gender: '',
        status: '',
        order: '',
    })
    
    const handleFilterGender=(e)=>{
        e.preventDefault();
        dispatch(filterGenderAction(e.target.value));
        setCurrentPage(1);
        setFilter({
            gender: e.target.value,
            status: 'all',
            order: 'rdm',
        })
    }
    const handleFilterStatus=(e)=>{
        e.preventDefault();
        dispatch(filterStatusAction(e.target.value));
        setCurrentPage(1);
        console.log(filter);
        setFilter({
            gender,
            status: e.target.value,
            order: 'rdm',
        });
    }
    const handleOrder=(e)=>{
        e.preventDefault();
        dispatch(orderCharAction(e.target.value));
        setCurrentPage(1);
        setFilter({
            gender: 'all',
            status: 'all',
            order: e.target.value,
        })
    }
    const discardFilter=(e)=>{
        e.preventDefault();
        dispatch(discardFilterAction());
        setCurrentPage(1);
        setFilter({
            gender: 'all',
            status: 'all',
            order: 'rdm',
        })
    }

    return (
        <div className="row">
            <button className="btn btn-primary" onClick={discardFilter} style={{width: 'fit-content'}}>Deshacer Filtros</button>
            <div style={{width: '200px'}}>
                <select className="form-select" aria-label="Default select example" onClick={handleFilterGender} onSelect={filter.gender}>
                    <option selected value='all'>Filtrar por Género</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='Unknown'>Unknown</option>
                </select>
            </div>
            <div style={{width: '200px'}}>
                <select className="form-select" aria-label="Default select example" onClick={handleFilterStatus} onSelect={filter.status}>
                    <option selected value='all'>Filtrar por Status</option>
                    <option value='Alive'>Alive</option>
                    <option value='Dead'>Dead</option>
                    <option value='Unknown'>Unknown</option>
                </select>
            </div>
            <div style={{width: '200px'}}>
                <select className="form-select" aria-label="Default select example" onClick={handleOrder} onSelect={filter.order}>
                    <option selected value='rdm'>Ordenar Alfabéticamente</option>
                    <option value='asc'>A - Z</option>
                    <option value='des'>Z - A</option>
                </select>
            </div>
        </div>
    )
}

export default Filters;