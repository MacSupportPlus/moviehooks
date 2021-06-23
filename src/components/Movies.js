import React, {useState} from 'react'

const Movies = ({movies}) => {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState(1999);
    const [poster, setPoster] = useState("")
    console.log(movies)

    const handleClick = (index) => {
        console.log(index)
        let movie= movies[index];
        setTitle(movie.Title)
        setYear(movie.Year)
        setPoster(movie.Poster)
        
    }
   
  return (
    <>
    
    {movies.map((movie, index) => {
        return (
            <div>
                <h2>{movie.Title}</h2>
                <h3>{movie.Year}</h3>
                <button onClick={() => handleClick(index)}><img src={movie.Poster} alt="" /></button>
            </div>
            
            
            )
    })}

    <div>
        -------------------------------
        <h1>Movie Results</h1>
        <h3>{title}</h3>
        <h5>{year}</h5>
        <img src={poster} alt="" />
    </div>
    </>
  )
}

export default Movies
