// Get html reference/variables

const movieList = document.getElementById('movie-list')
console.log(movies)

// Function to make movie cards using .map() method

function displayMovies(movieArray) {
const cards = movieArray.map(movie => {
const card = `<div class='movie-card' onclick="handleMovieClick(this)">
<h2>${movie.title}</h2>
<img src="${movie.image}" alt="${movie.title} poster" style="width: 100%;"/>
<p>Genre: ${movie.genre}</p>
<p>Director: ${movie.director}</p>
</div>`
return card
})
console.log('All Cards:', cards)

// Add the movies cards together to create one main html string using .join() method
const joined = cards.join('')
console.log('Combined(Joined) movie strings:', joined)
movieList.innerHTML = joined
}
displayMovies(movies)

// Next we need to setup our search input 
const search = document.getElementById('search')
search.addEventListener('input', () => {
// Read the input value of character entered
const query = search.value.toLowerCase()
console.log(query)

//Reading the input value
const results = movies.filter(movie => {
    const parts = [movie.title, movie.genre, movie.director, ...movie.cast]
    console.log('Parts:', parts)

    const match = parts.find(part => {
    const lower = part.toLowerCase()
    const includes = lower.includes(query)
    return includes
    })
        return match
})
        console.log('Results:', results)

    displayMovies(results)
})

function handleMovieClick(card) {
    console.log('Card:', card)
const title = card.querySelector('h2').textContent
console.log('Title:', title)

const movie = movies.find(movie => {
const match = movie.title === title
return match
})
    console.log('Movie:', movie)

    const cast = movie.cast.join(', ')
    const details = `
    <button onclick="window.location.reload
    ()">Back</button>
    <h2>${movie.title}</h2>
    <img src ="${movie.image}" />
    <p>Genre: ${movie.genre}</p>
    <p>Director: ${movie.director}</p>
    <p>Release Year: ${movie.releaseYear}</p>
    <p>Plot: ${movie.plot}</p>
    <p>Cast: ${cast}</p>
    `
    const main = document.getElementById('main')
    main.innerHTML = details
}

