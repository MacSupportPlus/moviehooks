import React,{useState, useEffect} from 'react'
import Movies from './components/Movies'

const App = () => {
  const [movies, setMovies] = useState([]);
  



  useEffect(() =>{
    let key =  'b23bfd28'
    
    const moviesData = async() => {
    let response = await fetch(`http://www.omdbapi.com/?s=batman&apikey=${key}`)

    let data = await response.json();
    console.log(data.Search)
    setMovies(data.Search)
  

    }
    moviesData();
  }, [])
  return (
    <>
      <Movies movies={movies}/>
    
    </>
  )
}

export default App

