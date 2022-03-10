
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


const movieArray = [
    {id:'tt1375666'},
    {id:'tt0993846'},
    {id:'tt0468569'},
    {id:'tt0110912'},
    {id:'tt0137523'}
]


function movieApi2(item){
   console.log(`https://imdb-api.com/en/API/Title/k_9hlk7muq/${item.id}`)
    
}


 movieArray.forEach(movieApi2)

// fetch(htmlData2)
//     .then(resp => resp.json())
//     .then(data => console.log(data))
 