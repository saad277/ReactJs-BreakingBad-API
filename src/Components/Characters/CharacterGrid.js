import React from 'react'


import CharacterItem from "./CharacterItem";

import Spinner from '../Spinner'

const CharacterGrid = ({ isLoading, items }) => {

    return isLoading ? (<Spinner />) :
        (
            <section className="cards">
                {
                    items.map((x,index)=>{
                           
                        return(  <CharacterItem key={index} item={x}/>)
                  
                    })
                }

            </section>
        )

}


export default CharacterGrid;