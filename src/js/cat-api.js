const API_URL = "https://api.thecatapi.com/v1";
const API_KEY = "live_gb4MTNbcNBjbElttJSWq66MSRR3pLv9e5jMuge6UhiF1PKASS2JvcZrVQVNccPzg";

export function fetchBreeds() {
    return fetch(`${API_URL}/breeds`, { headers: {'x-api-key': API_KEY} })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return (response).json();
      });
  };
  
   export function fetchCatByBreed(breedId) {
    return fetch(`${API_URL}/images/search?breed_ids=${breedId}`, { headers: {'x-api-key': API_KEY} })
    .then(response => {
      if(!response.ok){
        throw new Error(response.statusText)
      }
      return (response).json();
    })
  }