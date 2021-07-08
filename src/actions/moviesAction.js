import axios from 'axios';


//initial loaded movies with avengers  search

export const  asyncMoviesList=()=>{
    return (dispatch)=>{
        axios.get('http://www.omdbapi.com/?s=marvel&apikey=7a80e1e9')
            .then((response)=>{
                const result=response.data.Search;
                console.log(result)
                dispatch(setMoviesList(result))
            })
            .catch((error)=>{
                alert('error.message')
            })
    }
}

const setMoviesList=(moviesData)=>{
    return{
        type:'MOVIES_LIST',
        payload:moviesData
    }
}

//action custom to search movies
export const  asyncSearchedMovies=(searchTerm)=>{
    return (dispatch)=>{
        axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=7a80e1e9`)
            .then((response)=>{
                const result=response.data.Search;
                console.log(result,'searched movies')
                dispatch(setSearchedMovies(result))
            })
            .catch((error)=>{
                alert('error.message')
            })
    }
}

const setSearchedMovies=(searchedMovies)=>{
    return{
        type:'SEARCHED_MOVIES',
        payload:searchedMovies
    }
}

//get individual movie info
export const  asyncMovieInfo=(imdbID)=>{
    return (dispatch)=>{
        axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=7a80e1e9`)
            .then((response)=>{
                const result=response.data;
                console.log(result,'movie info')
                dispatch(setMovieInfo(result))
            })
            .catch((error)=>{
                alert('error.message')
            })
    }
}

const setMovieInfo=(movieInfo)=>{
    return{
        type:'MOVIE_INFO',
        payload:movieInfo
    }
}







