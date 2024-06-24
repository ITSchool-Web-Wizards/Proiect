export const rateMovie = async (movieId: number, rating :number) => {
    // Facem o solicitare HTTP pentru a obține un nou `guest_session_id`
    const res = await fetch(`"https://api.themoviedb.org/3/movie/${movieId}/rating?guest_session_id=${localStorage.getItem("guest_session_id")}?api_key=02f3192413ff2d7b050242e52d7c6741`, 
    {
        method: "POST",
        headers: {
            accept: 'application/json',  // Specificăm că acceptăm răspunsuri JSON
            "content-type": "aplication/json;charset=utf-8",
        },
        body:`{"value": ${rating}}`,
    });

    // Verificăm dacă răspunsul este OK
    if (!res.ok) {
        // Aruncăm o eroare dacă răspunsul nu este OK
        throw new Error("Network response was not ok");
    }

    // Parsăm răspunsul JSON și îl returnăm
    const data = await res.json();
    return data;
};

export const rateTvShow = async (tvShowId: number, rating :number) => {
    // Facem o solicitare HTTP pentru a obține un nou `guest_session_id`
    const res = await fetch(`"https://api.themoviedb.org/3/tv/${tvShowId}/rating?guest_session_id=${localStorage.getItem("guest_session_id")}?api_key=02f3192413ff2d7b050242e52d7c6741`, 
    {
        method: "POST",
        headers: {
            accept: 'application/json',  // Specificăm că acceptăm răspunsuri JSON
            "content-type": "aplication/json;charset=utf-8",
        },
        body:`{"value": ${rating}}`,
    });

    // Verificăm dacă răspunsul este OK
    if (!res.ok) {
        // Aruncăm o eroare dacă răspunsul nu este OK
        throw new Error("Network response was not ok");
    }

    // Parsăm răspunsul JSON și îl returnăm
    const data = await res.json();
    return data;
};