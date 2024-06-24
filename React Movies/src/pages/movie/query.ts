export const fetchMovieDetails = async (movieId:string) => {
    const res = await fetch (
        `https://api.themoviedb.org/3/movie/${movieId}?language=ro-RO`,
        {
            headers: {
                accept: 'application/json',  // Specificăm că acceptăm răspunsuri JSON
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTczOTg3MjMzMDA5NDgzMzFlNTRlZGZiMzViOGJhZSIsInN1YiI6IjY2NzQxZDkxMWQwZjAyZDEwY2M0ZjFkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0ahV9tS6rFEAc3Ttiy3bd0BIsNmOiHrcPaNJsbvlmas'  // Autorizarea necesară
            },
        }
    );
    return res.json();
}