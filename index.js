// Create a movie review page.
//recent movies will be posted to the page for people to review. 
//It will include the image of the movie and a like or dislike glyph. 
//You will also be able to post a review about the movie which will be posted in the review section. 

// make the search button functional to search by movie title 


// // Pass the API into the fetch to create a new div with all the content




//Global variable 
        const movieGenertor = document.createElement('div')
        movieGenertor.classList.add("movie-generator")
        document.body.appendChild(movieGenertor)

       

function movieApi2(){
    fetch(` http://localhost:9500/moviejs`)
        .then(resp => resp.json())
        .then(movie => movie.forEach(movies => generateMovie(movies)))

}


const generateMovie = (data) => {
    const movieHtml = 
        `<div class="movie-container"><h1 class="movie-title">${data.title}</h1>
        <img src=${data.image} class="poster">
        <div class="movie-block">
        <h2>Description: </h2>
        <p>${data.plot}</p>
        <h3>Director: ${data.directors}</h3>
        <h3>Genre: ${data.genres}</h3>
        <h3>Rated: ${data.contentRating}</h3>
        <h3>imDb Movie Rating: ${data.imDbRating}</h3>
        <div class = "button"></div>
        </div> `
    

        const newMovieGenerator = document.createElement('div')
        newMovieGenerator.classList.add("movie-generator")
        movieGenertor.append(newMovieGenerator)
        newMovieGenerator.innerHTML = movieHtml

        const movieGenertor2 = document.createElement('div')
        movieGenertor2.classList.add('button-div')
        newMovieGenerator.appendChild(movieGenertor2)

       
        movieGenertor2.appendChild(buttonHandler())
       

        movieGenertor2.appendChild(reviewForm())

        


}  

//create a counter that will increase when the like button is pressed 
//the new count element should start at 0 and increase by 1 when liked 




function buttonHandler(){

    

     //create button elements here 
     const buttonDiv = document.createElement('div')

     //count 
    let count = 0
    let countElement = document.createElement('p')
    countElement.innerHTML = `Votes: ${count}`
    buttonDiv.appendChild(countElement)


     //like button
     const likebtn = document.createElement('button')
     likebtn.classList.add("like-button")


     //dislike button
     const dislikebtn = document.createElement('button')
     dislikebtn.classList.add('dislike-button')

      //button content 
      likebtn.innerHTML = `<i class="fa-solid fa-thumbs-up"></i>`
      dislikebtn.innerHTML = `<i class="fa-solid fa-thumbs-down"></i>`

      // buttonDiv.append(like)
      buttonDiv.append(likebtn)
        

      // buttonDiv.append(dislike)
      buttonDiv.append(dislikebtn)



      //event listener for the buttons 
      likebtn.addEventListener('click', (e) =>{
        likebtn.style.color = 'green'
        dislikebtn.style.color = 'black' 
        countElement.innerHTML = `Votes: ${count += 1}`


    })

    dislikebtn.addEventListener('click', (e) =>{
        likebtn.style.color = 'black'
        dislikebtn.style.color = 'red'
        countElement.innerHTML = `Votes: ${count = count - 1}`
    })

    return buttonDiv;
}


function reviewForm(){
     //create textarea 
     const divPost = document.createElement('div')
     const formBox = document.createElement('form')
     divPost.append(formBox)

     //name box 
     const inputBox = document.createElement('input')
     inputBox.classList.add('name')
     inputBox.placeholder = "Full Name"

     //review box 
     const textBox = document.createElement('textarea')
     textBox.classList.add('post')
     textBox.placeholder = "Revie Movie Here."

    //submit review button
    const submit = document.createElement('button')
    submit.classList.add("submit-button")
    submit.innerHTML = "submit"
    let review = document.createElement('h3')
    review.innerHTML = "Reviews:"
    formBox.append(inputBox)
    formBox.append(textBox)
    formBox.append(submit)
    formBox.appendChild(review)

    //event listener for the text box 
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        postNameReview(inputBox.value + " - "+ textBox.value)
        inputBox.value = ""
        textBox.value = ""
        console.log(inputBox.value)
    })

    const postDiv = document.createElement('div')
    postDiv.classList.add('post-div')

    const postNameReview = (addPost) =>{ 
    let post = document.createElement('p')
    post.classList.add('post-new')
    post.textContent = addPost
    formBox.appendChild(postDiv)
    postDiv.appendChild(post)
}
    return divPost
    

}





const searchBar = (data) => {
    let searchInput = document.getElementById('searchInput')
    
    // let mapper = data.map(movie => movie.title)
    console.log(data)
        
    searchBarButton.addEventListener('click', () => {
        let finder = data.find(movie => movie.title == searchInput.value)

        const html =
        `<div class="movie-container"><h1 class="movie-title">${finder.title}</h1>
            <img src=${finder.image} class="poster">
            <div class="movie-block">
            <h2>Description: </h2>
            <p>${finder.plot}</p>
            <h3>Director: ${finder.directors}</h3>
            <h3>Genre: ${finder.genre}</h3>
            <h3>Rated: ${finder.contentRating}</h3>
            <h3>imDb Movie Rating: ${finder.imDbRating}</h3>
            <div class = "button"></div>
            </div> `

        movieGenertor.innerHTML = html
        document.body.appendChild(movieGenertor)
        console.log(finder)
    })
}


function movieApi(){
    fetch(`http://localhost:8000/movies`)
        .then(resp => resp.json())
        .then((data) => { 
            searchBar(data)
        })
        
}

let searchBarButton = document.getElementById('search-bar')
console.log(searchBarButton)

movieApi2()
movieApi()

