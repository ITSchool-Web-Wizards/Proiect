export const rateMovie = async (movieId: number, rating: number) => {
    // Construim URL-ul pentru solicitarea HTTP pentru a acorda un rating unui film
    const url = `https://api.themoviedb.org/3/movie/${movieId}/rating?guest_session_id=${localStorage.getItem("guest_session_id")}&api_key=02f3192413ff2d7b050242e52d7c6741`;

    // Facem o solicitare POST către API-ul TMDB
    const res = await fetch(url, {
        method: "POST",
        headers: {
            accept: 'application/json', 
            "Content-Type": "application/json;charset=utf-8", 
        },
        body: JSON.stringify({ value: rating }), 
    });

  
    if (!res.ok) {
       
        throw new Error("Network response was not ok");
    }

    // Parsăm răspunsul JSON și îl returnăm
    const data = await res.json();
    return data;
};

export const rateTvShow = async (tvShowId: number, rating: number) => {
   
    const url = `https://api.themoviedb.org/3/tv/${tvShowId}/rating?guest_session_id=${localStorage.getItem("guest_session_id")}&api_key=02f3192413ff2d7b050242e52d7c6741`;

    
    const res = await fetch(url, {
        method: "POST",
        headers: {
            accept: 'application/json',
            "Content-Type": "application/json;charset=utf-8", 
        },
        body: JSON.stringify({ value: rating }), 
    });


    if (!res.ok) {
       
        throw new Error("Network response was not ok");
    }


    const data = await res.json();
    return data;
};
