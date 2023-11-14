import React from "react";

const Paginado=({cardsPerPage,allCards,paginado,currentPage})=>{
    const pageNumbers=[];
    for(let i=1; i<=Math.ceil(allCards/cardsPerPage);i++){
        pageNumbers.push(i);
    }
    console.log(pageNumbers)

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {
                    pageNumbers?.map(
                        number=>{
                            if(number===currentPage){
                                return(
                                    <li className="page-item active">
                                        <a onClick={()=>paginado(number)} className="page-link">{number}</a>
                                    </li>
                                )
                            }else{
                                return(
                                    <li className="page-item">
                                        <a onClick={()=>paginado(number)} className="page-link">{number}</a>
                                    </li>
                                )
                            }
                        }
                    )
                }
            </ul>
        </nav>
    )
}

export default Paginado;