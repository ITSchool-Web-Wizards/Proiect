export const fetchTvShowDetails = async (tvShowId: string) => {
    const res = await fetch (
        `https://api.themoviedb.org/3/tv/${tvShowId}?language=ro-RO`,
        {
            headers: {
                accept: 'application/json',  // Specificăm că acceptăm răspunsuri JSON
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmYzMTkyNDEzZmYyZDdiMDUwMjQyZTUyZDdjNjc0MSIsIm5iZiI6MTcxOTI1MTMyMC41MDc3NzcsInN1YiI6IjY2NzQxZDkxMWQwZjAyZDEwY2M0ZjFkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0yQbLqlWBwI4fGpD4bfrRIR4e7BuXiwMdvQCICfNJGc'  // Autorizarea necesară
            },
        }
    );
    return res.json();
}