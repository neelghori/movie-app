import { serchMovies } from '@movieapp/lib/movie';
import  { useEffect, useState } from 'react'

const useMovies = (data:any) => {
    const [search, setSearch] = useState("")
    const [loader, setLoader] = useState(false)

    const [movieList, setMoviesList] = useState(data);
    useEffect(() => {
        setMoviesList(data)
    }, [data])

    const fetchMovieBySearch = async (search: string) => {
        if(search == ""){
            setMoviesList(data)
            return;
        }
        setLoader(true)
        const getSearchResult = await serchMovies(search);
        if (getSearchResult?.results) {
            setMoviesList(getSearchResult)
        }else{
            setMoviesList(data)
        }
        setLoader(false)
    }
    useEffect(() => {
      const debounce = setTimeout(() => {
            fetchMovieBySearch(search);
        }, 600)
        return ()=>{
            clearTimeout(debounce)
        }
    }, [search])
    return {
        search,setSearch,
        movieList,loader
    }
}

export default useMovies
