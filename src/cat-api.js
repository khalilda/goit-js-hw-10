const API_KEY = 'live_yUmxPF0trWXyajR5pxz29s90ltG6314hp01KsszxUGbLXH1hFZGBFipTJtHKFnoJ';
const URL = `https://api.thecatapi.com/v1/`;
const ENDPOINT = {
    breeds: 'breeds',
    cat: 'images/search'
}

function fetchBreeds() {
    
     return fetch(`${URL}${ENDPOINT.breeds}`,{headers: {
    'x-api-key': API_KEY
     }
     }).then(response => {
         if (!response.ok) {
             throw new Error();
         }
         return response.json();
  })
}

function fetchCatByBreed(breedId) {
    return fetch(`${URL}${ENDPOINT.cat}?breed_ids=${breedId}`,{headers: {
    'x-api-key': API_KEY
     }
    }).then(response => {
        if (!response.ok) {
            throw new Error()
        }
        return response.json();
    })
}

export { fetchBreeds, fetchCatByBreed };