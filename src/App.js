import React, { useState, useEffect } from 'react'
import Header from './components/UI/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/UI/Search'
import './App.css'
import axios from 'axios'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setsetIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
      const fetchItems = async () => {
        const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
        
        setItems(result.data)
        setsetIsLoading(false)
      }

      fetchItems()
  }, [query])
  
  return (
  <div className = 'container'>
    <Header />
    <Search getQuery={(q) => setQuery(q)} />
    <CharacterGrid isLoading={isLoading} items={items} />
  </div>
  )
}

export default App