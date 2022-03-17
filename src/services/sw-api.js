const baseUrl = 'https://swapi.dev/api/'

export function getStarship() {
    return fetch(`${baseUrl}/starships`)
    .then(res => res.json())
}

export function getDetails(spaceshipUrl) {
    return fetch (`${spaceshipUrl}`)
    .then(res => res.json())
}

