export function getAvailability () {
    return fetch('http://localhost:8080/availability')
        .then(data => data.json())
}