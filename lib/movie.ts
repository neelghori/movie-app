import { fetchAPICAll } from "./api";


export const fetchMovies = async () => {
    try {
        const url = `/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&query=deadpool`;
        const response = await fetchAPICAll(url, "GET")
        return response;
    } catch (error) {

        return error
    }
}

export const serchMovies = async (query: string) => {
    try {
        const url = `/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
        const response = await fetchAPICAll(url, "GET")
        return response;
    } catch (error) {
        return error
    }
}

export const detailsMovies = async (id: string) => {
    try {
        const url = `/3/movie/${id}?language=en-US`;
        const response = await fetchAPICAll(url, "GET")
        return response;
    } catch (error) {
        return error
    }
}


export const getCastMember = async (id: string) => {
    try {
        const url = `/3/movie/${id}/credits?language=en-US`;
        const response = await fetchAPICAll(url, "GET")
        return response;
    } catch (error) {
        return error
    }
}