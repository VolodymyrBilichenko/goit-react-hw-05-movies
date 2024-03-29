import axios from "axios";

export async function getmovieFilm () {
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/day`,
    {
        params : {
            api_key: 'de29a5ea9c0d9729421e87b4a8923b93'
            
        }
    }
    )
    return data;

}


export async function getMovieName (query) {
    const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie`,
    {
        params : {
            api_key: 'de29a5ea9c0d9729421e87b4a8923b93',
            query,
            
        }
    }
    )
    return data;
}

export async function getMovieDetails (movieid) {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieid}`,
    {
        params : {
            api_key: 'de29a5ea9c0d9729421e87b4a8923b93'
            
        }
    }
    )
    return data;
}

export async function getMovieDetailsCast (movieid) {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieid}/credits`,
    {
        params : {
            api_key: 'de29a5ea9c0d9729421e87b4a8923b93'
            
        }
    }
    )
    return data;



    
}

export async function getMovieDetailsReview (movieid) {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieid}/reviews`,
    {
        params : {
            api_key: 'de29a5ea9c0d9729421e87b4a8923b93'
            
        }
    }
    )
    return data;
}
