'use server'

export async function getFilmesPopulares() {
    console.log('consultado API filmes populares')
    const headers = { 
        accept: 'application/json',    
        Authorization: 'Bearer '+ process.env.MOVIE_API_TOKEN
    }
    const auth_url = 'https://api.themoviedb.org/3/authentication'
    const data = await fetch(auth_url, { method: 'GET', headers:headers})
    if (data.status === 200) {
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
        const movies = await fetch(url, { method: 'GET', headers:headers})
        return movies.json()
    }

}


export async function getFilmesMaiorNota() {
    console.log('consultado API filmes com maior nota')
    const headers = { 
        accept: 'application/json',    
        Authorization: 'Bearer '+ process.env.MOVIE_API_TOKEN
    }
    const auth_url = 'https://api.themoviedb.org/3/authentication'
    const data = await fetch(auth_url, { method: 'GET', headers:headers})
    if (data.status === 200) {
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200'
        const movies = await fetch(url, { method: 'GET', headers:headers})
        return movies.json()
    }

}
