import React, { useState,useEffect } from 'react';
import './App.css';

import Header from './Components/Header'
import Axios from 'axios';
import CharacterGrid from './Components/Characters/CharacterGrid'
import Search from './Components/Search' 



const App = () => {

  const [items,setItems]=useState([])
  const [isLoading,setLoading]=useState(true)
  const [query,setQuery]=useState("")

  const fetchItems=async()=>{

    const result=await Axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

    console.log(result.data)

    setItems(result.data)
    setLoading(false)

  }

  useEffect(()=>{

    fetchItems()

  },[query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q)=>setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )

}

export default App;
