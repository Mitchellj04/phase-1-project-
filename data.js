
// Generato the movies API
class movieApi{
    constructor(url, key, id){
        this.url = 'https://imdb-api.com/en/API/Title/'
        this.key = 'k_9hlk7muq'
        this.id = id
    }}

// New movies to be add to the page 
const inception = new movieApi(this.url,this.key,'tt1375666')
const WolfOfWall = new movieApi(this.url,this.key,'tt0993846')
const batMan = new movieApi(this.url,this.key, 'tt0468569')
const puplFiction = new movieApi(this.url, this.key, 'tt0110912')
const fightClub = new movieApi(this.url, this.key, 'tt0137523')
const titanic = new movieApi(this.url, this.key, 'tt0120338') 

//Create the full API for the fetch function 
function movieData(movie){
    const movieData2 = `${movie.url}${movie.key}/${movie.id}` 
    return movieData2
 }

// function fetchMovie(movieData){
//     fetch(movieData)
//         .then(data => data.json())
//         .then( (response) => generateMovie(response) )
    
//     const generateMovie = (data) => {
//         const html = {
//         title: data.fullTitle,
//         movieImg: data.image,
//         plot: data.plot,
//         directors: data.directors,
//         genre: data.genres,
//         contentRating: data.contentRating,
//         imDb: data.imDbRating
//         }
      
//         console.log(html)

//         function renderOneMovie(movie){
//     const movieContainer = document.createElement('div')
//     movieContainer.className = 'movie-container'
//     movieContainer.innerHTML = `
//     <h1 class="movie-title">${data.fullTitle}</h1>
//     <img src=${data.image} class="poster">
//     <div class="movie-block">
//     <h2>Description: </h2>
//    <p>${data.plot}</p>
//    <h3 style= text-align:left;>Director: ${data.directors}</h3>
//    <h3>Genre: ${data.genres}</h3>
//    <h3>Rated: ${data.contentRating}</h3>
//     <h3>imDb Movie Rating: ${data.imDbRating}</h3>
//     <div class ="buttons">
//     <button class= "thumbs_up_button" id='thumbsUp'><image src="images/thumbsUp.png" id="thumbsUpPic"></button>
//     <input type = "number" id = "likeNumber" value= "0">
//     <button class= "thumbs_down_button" id='thumbsDown'><image src="images/thumbsDown.png" id="thumbsDownPic"></button> 
//     <input type = "number" id = "dislikeNumber" value= "0">
//   </div>
//   <div class="post-container">
//   <form id = "movie-post">
//         <label for="post" class="label"> Movie Review</label>
//         <input tpye="text" id="name" placeholder="Name">
//         <textarea id="post" placeholder="Your Thoughts" class="review-box"></textarea>
//         <input type="submit" id="post-review"></input>
//     </form>
//     </div>
//     `
//     console.log(movieContainer)
//     const movieGenertor = document.createElement('div')
//     movieGenertor.classList.add("movie-generator")
//     document.body.appendChild(movieGenertor)
//     movieGenertor.innerHTML = html
// }
// renderOneMovie()
  



//     }  

//     }

// function renderOneMovie(movie){
//     let movieContainer = document.createElement('div')
//     movieContainer.className = 'movie-container'
//     movieContainer.innerHTML = `
//     <h1 class="movie-title">${htmlArray.title}</h1>
//     `
//     console.log(movieContainer)
// }

console.log('data2')