//const myRequest = new Request("http://localhost:8000/api/v1/titles/?page_size=1&year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
//fetch(myRequest)


//console.log(myRequest)

/*
.then(function(response){
    return response.blob();
})
.then(function(myBlob){
    const objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
})
*/

const myImage= document.querySelector('img');

fetch('https://m.media-amazon.com/images/M/MV5BNDEyYTA5OWEtYjNiYS00MGZlLThjYzEtMTc1Zjk2NDRmZmYxXkEyXkFqcGdeQXVyNzIwNTQyMw@@._V1_UY268_CR1,0,182,268_AL_.jpg')
.then(response => response.blob())
.then(imageBlob => {
    const imageObjectURL = URL.createObjectURL(imageBlob);
    console.log(imageObjectURL);
});