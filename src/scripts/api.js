export const fetchMusic = async () => {
    const url = `https://openmusic-fake-api.onrender.com/api/musics`;


    const data = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(response => response.json())
    .then(response => response)

    return data
}