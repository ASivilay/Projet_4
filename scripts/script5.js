async function getMovies(url, category){   
    
    const options = {
        method: "GET"
    }
    
    let response = await fetch(url, options);
    if(response.status === 200){
        let result = await response.json();
        //let titles = new Array();
        //let imageUrls = new Array();

        for(let i = 0; i<result.results.length; i++){
            //titles.push(result.results[i].title);
            //imageUrls.push(result.results[i].image_url);
            getImg(result.results[i].image_url, category, result.results[i].id);
        }

        //console.log(titles);
        //console.log(imageUrls);
    }
    else{
        console.log("HTTP-Error: " + response.status);
    }
}

///////////////////////////////////////////////////////////////////////////////

async function getImg(url, category, id){
    
    const options = {
        method: "GET"
    }

    let response = await fetch(url, options)

    if(response.status === 200){
        let imageBlob = await response.blob();
        let imageObjectURL = URL.createObjectURL(imageBlob);

        let image = document.createElement('img');
        image.src = imageObjectURL;
        image.dataset.movieId = id;
        /*
        image.onclick = function () {
            let id = this.dataset.movieID;
            console.log(id);
        }
        */
        
        image.setAttribute("onclick", "getModal(this)")
        
        //container = document.getElementById("bestratedimages")
        container = document.getElementById(category);
        container.append(image);
    }
    else{
        console.log("HTTP-Error: " + response.status);
    }
}

///////////////////////////////////////////////////////////////////////////////

async function getModal(element){
    
    console.log(element);
    console.log(element.getAttribute("data-movie-id"));
    id = element.getAttribute("data-movie-id");
    console.log(id);
    
    url = "http://localhost:8000/api/v1/titles/" + id;
    
    const options = {
        method: "GET"
    }
    /*
    fetch(url, options)
        .then((response => response.json()))
        .then((data) => console.log(data))
    */
    
    let response = await fetch(url, options);
    if(response.status === 200){
        let result = await response.json();
        console.log(result);
        document.getElementById("movietitle").innerHTML = "Title: " + result.title;
        document.getElementById("moviegenres").innerHTML = "Genre(s): " + result.genres;
        document.getElementById("moviedate").innerHTML = "Date de sortie: " + result.date_published;
        document.getElementById("movierated").innerHTML = "Rated: " + result.rated;
        document.getElementById("movieimdbscore").innerHTML = "IMDB Score: " + result.imdb_score;
        document.getElementById("moviedirector").innerHTML = "Director(s): " + result.directors;
        document.getElementById("movieactors").innerHTML = "Actors: " + result.actors;
        document.getElementById("movieduration").innerHTML = "Duration: " + result.duration;
        document.getElementById("moviecountries").innerHTML = "Country: " + result.countries;
        document.getElementById("movieboxoffice").innerHTML = "Box Office result: " + result.worldwide_gross_income;
        document.getElementById("moviedescription").innerHTML = "Description: " + result.description;
    }
    else{
        console.log("HTTP-Error: " + response.status);
    }
    //let modal = document.getElementById("movieModal");
    //let span = document.getElementById("closeMovieModal");
    let modal = document.getElementById("movieModal");
    modal.style.display = "block";
}


///////////////////////////////////////////////////////////////////////////////
function initModal(){
    // Get the modal
    let movieModal = document.getElementById("movieModal");
    
    // Get the button that opens the modal
    //let btn = document.getElementById("myBtn");
    //console.log(btn);

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    //btn.onclick = function() {
    //    modal.style.display = "block";
    //}

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        movieModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == movieModal) {
            movieModal.style.display = "none";
        }
    }
}



