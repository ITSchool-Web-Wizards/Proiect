export const mutationLogin = async () => {
    // Facem o solicitare HTTP pentru a obține un nou `guest_session_id`
    const res = await fetch("https://api.themoviedb.org/3/authentication/guest_session/new", {
        headers: {
            accept: 'application/json',  // Specificăm că acceptăm răspunsuri JSON
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmYzMTkyNDEzZmYyZDdiMDUwMjQyZTUyZDdjNjc0MSIsIm5iZiI6MTcxOTI1MTMyMC41MDc3NzcsInN1YiI6IjY2NzQxZDkxMWQwZjAyZDEwY2M0ZjFkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0yQbLqlWBwI4fGpD4bfrRIR4e7BuXiwMdvQCICfNJGc'  // Autorizarea necesară
        },
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
