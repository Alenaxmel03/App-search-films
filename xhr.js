// const getData = (url) => new Promise( (resolve, reject) => {

//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', url);
//     xhr.send();
//     xhr.onload = () => {
//         if(xhr.status === 200 ){
//             const json = JSON.parse(xhr.response);
//             resolve(json.Search)
//         } else {
//             reject(xhr.statusText)
//         }
//     }

//     xhr.onerror = (err) => reject(err);
//    });

let searchLast = null;

const getData = (url) => fetch(url)
.then((res) => res.json())
.then((json) => {
    if(!json || !json.Search) throw Error('Error');
    return json.Search
})




inputSearch.addEventListener('keyup', (e) => {
    delay(() => {
    const searchString = e.target.value;
    if(searchString && searchString.length > 2 && searchString !== searchLast){

        if(!triggerMode) clearMovieMarkup();
    getData(`http://www.omdbapi.com/?apikey=2a956e24&s=${searchString}`)
        .then(movies => movies.forEach(movie => addMovieToList(movie)))
        .catch(err => console.log(err));
    }
    }, 1000)
    
})


// getData(`http://www.omdbapi.com/?apikey=2a956e24&s=${search}`)
// .then(movies => movies.forEach(movie => addMovieToList(movie)))
// .catch(err => console.log(err));


// const search1 = "Iron man";
// const search2 = "Batman";
// const search3 = "Superman";

// const ironman = getData(`http://www.omdbapi.com/?apikey=2a956e24&s=${search1}`);
// const batman = getData(`http://www.omdbapi.com/?apikey=2a956e24&s=${search2}`);
// const superman = getData(`http://www.omdbapi.com/?apikey=2a956e24&s=${search3}`);

// Promise.all([ironman,batman,superman])
// .then((res) => res.forEach((movies) => movies.forEach((movie) => addMovieToList(movie))));