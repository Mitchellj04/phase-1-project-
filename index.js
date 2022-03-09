// Create a movie review page.
//recent movies will be posted to the page for people to review. 
//It will include the image of the movie and a like or dislike glyph. 
//You will also be able to post a review about the movie which will be posted in the review section. 




// // postReview.addEventListener('click', () =>  alert("I have been posted."))

// document.addEventListener('DOMContentLoaded', () =>{
//     document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault()
//     postNameReview(e.target.name.value + " - "+ e.target.post.value)  
//     // postNameReview(e.target.post.value)
// })
// })

// function postNameReview(addPost){
//     let post = document.createElement('p')
//     post.textContent = addPost
//     newPost.appendChild(post)
// }

// //Create the full API for the fetch function 
// function movieData(movie){
//    const movieData2 = `${movie.url}${movie.key}/${movie.id}` 
//    return movieData2
// }

// // Pass the API into the fetch to create a new div with all the content
function fetchMovie(movieData){
fetch(movieData)
    .then(data => data.json())
    .then( (response) => generateMovie(response) )

const generateMovie = (data) => {
    const html = 
    `   <div class="movie-container"><h1 class="movie-title">${data.fullTitle}</h1>
        <img src=${data.image} class="poster">
        <div class="movie-block">
        <h2>Description: </h2>
       <p>${data.plot}</p>
       <h3 style= text-align:left;>Director: ${data.directors}</h3>
       <h3>Genre: ${data.genres}</h3>
       <h3>Rated: ${data.contentRating}</h3>
        <h3>imDb Movie Rating: ${data.imDbRating}</h3>
        <div class = "button"></div>
        </div>`
    const movieGenertor = document.createElement('div')
    movieGenertor.classList.add("movie-generator")
    document.body.appendChild(movieGenertor)
    movieGenertor.innerHTML = html
    //create button elements here 
    const buttonDiv = document.createElement('div')
    const likebtn = document.createElement('button')
    const dislikebtn = document.createElement('button')
    likebtn.innerText = 'button'
    dislikebtn.innerText = 'dislike'
    movieGenertor.appendChild(buttonDiv)
    buttonDiv.append(likebtn)
    buttonDiv.append(dislikebtn)

    // const button = createButton
    //create textarea 
    const formBox = document.createElement('form')
    const inputBox = document.createElement('input')
    inputBox.placeholder = "Full Name"
    const textBox = document.createElement('textarea')
    textBox.placeholder = "Revie Movie Here."
    const submit = document.createElement('button')
    submit.innerHTML = "submit"
    formBox.append(inputBox)
    formBox.append(textBox)
    formBox.append(submit)
    movieGenertor.appendChild(formBox)

}  
}
 

// document.addEventListener('DOMContentLoaded', () =>{
//     document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault()
//     postNameReview(e.target.name.value + " - "+ e.target.post.value)  
//     // postNameReview(e.target.post.value)
// })
// })


// calling the movies to the page with its correct API 

    fetchMovie(movieData(puplFiction))
    fetchMovie(movieData(batMan))
    fetchMovie(movieData(WolfOfWall))
    fetchMovie(movieData(inception))
    fetchMovie(movieData(fightClub))
    fetchMovie(movieData(titanic))
    
const thumbsUp = document.querySelector("#thumbsUp")
const thumbsDown = document.querySelector("#thumbsDown")

console.log('data')


{/* <div class ="buttons">
<button class= "thumbs_up_button" id='thumbsUp'><image src="images/thumbsUp.png" id="thumbsUpPic"></button>
<input type = "number" id = "likeNumber" value= "0">
<button class= "thumbs_down_button" id='thumbsDown'><image src="images/thumbsDown.png" id="thumbsDownPic"></button> 
<input type = "number" id = "dislikeNumber" value= "0">
</div>
<div class="post-container">
<form>
    <label for="post" class="label"> Movie Review</label>
    <input tpye="text" placeholder="Name">
    <textarea placeholder="Your Thoughts" class="review-box"></textarea>
    <input type="submit" ></input>
</form>
</div> */}