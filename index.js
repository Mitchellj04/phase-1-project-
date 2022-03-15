// Create a movie review page.
//recent movies will be posted to the page for people to review. 
//It will include the image of the movie and a like or dislike glyph. 
//You will also be able to post a review about the movie which will be posted in the review section. 



// // Pass the API into the fetch to create a new div with all the content

function movieApi2(item){
    fetch(`https://imdb-api.com/en/API/Title/k_9hlk7muq/${item.id}`)
    .then(resp => resp.json())
    .then(data => generateMovie(data))



const generateMovie = (data) => {
    const html = 
    `   <div class="movie-container"><h1 class="movie-title">${data.fullTitle}</h1>
        <img src=${data.image} class="poster">
        <div class="movie-block">
        <h2>Description: </h2>
       <p>${data.plot}</p>
       <h3>Director: ${data.directors}</h3>
       <h3>Genre: ${data.genres}</h3>
       <h3>Rated: ${data.contentRating}</h3>
        <h3>imDb Movie Rating: ${data.imDbRating}</h3>
        <div class = "button"></div>
        </div>`
    const movieGenertor = document.createElement('div')
    movieGenertor.classList.add("movie-generator")
    document.body.appendChild(movieGenertor)
    const movieGenertor2 = document.createElement('div')
    movieGenertor2.classList.add('button-div')
    movieGenertor.innerHTML = html
     movieGenertor.appendChild(movieGenertor2)


    //create button elements here 
    const buttonDiv = document.createElement('div')
    //like button
    const likebtn = document.createElement('button')
    likebtn.classList.add("like-button")
    //dislike button
    const dislikebtn = document.createElement('button')
    dislikebtn.classList.add('dislike-button')
    //button content 
    likebtn.innerHTML = `<i class="fa-solid fa-thumbs-up"></i><span class="count"> 0</span>`
    dislikebtn.innerHTML = `<i class="fa-solid fa-thumbs-down"></i><span class="count2"> 0</span>`
    movieGenertor2.appendChild(buttonDiv)
    buttonDiv.append(likebtn)
    buttonDiv.append(dislikebtn)
    let count = document.querySelector('.count')
    let count2 = document.querySelector('.count2')
    let clicked = false
//event listener for the buttons 
    likebtn.addEventListener('click', (e)=>{
        count.textContent++; 
        likebtn.style.color = 'green'
        
    })

    dislikebtn.addEventListener('click', (e) =>{
        count2.textContent++;
        dislikebtn.style.color = 'red'
    })

    // const button = createButton
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
    movieGenertor2.appendChild(divPost)


//event listener for the text box 
submit.addEventListener('click', (e) => {
    e.preventDefault()
    postNameReview(inputBox.value + " - "+ textBox.value)
})

function postNameReview(addPost){
    let post = document.createElement('p')
    post.classList.add('post-new')
    post.textContent = addPost
    formBox.appendChild(post)
}
    
}  
}


movieArray.forEach(movieApi2)

const globalLike = document.getElementsByClassName('like-button')
console.log(globalLike)

globaldislike = document.getElementsByClassName('dislike-button')


    
