export const fetchRatedMovies = async () => {
    const res = await fetch (
        `https://api.themoviedb.org/3/guest_session/${localStorage.getItem("guest_session_id")}/rated/movies?language=ro-RO&page=1&sort_by=created_at.asc&api_key=02f3192413ff2d7b050242e52d7c6741`,
        
    );
    return res.json();
};
export const fetchRatedTvShows = async () => {
    const res = await fetch (
        `https://api.themoviedb.org/3/guest_session/${localStorage.getItem("guest_session_id")}/rated/tv?language=ro-RO&page=1&sort_by=created_at.asc&api_key=02f3192413ff2d7b050242e52d7c6741`,
        
    );
    return res.json();
}





