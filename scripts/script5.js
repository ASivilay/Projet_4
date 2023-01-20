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

function getModal(element){
    //id = element.id;
    //id = element.getAttribute("date-movie-id");
    //console.log(id);
    //console.log({element}.data('movie-id'));
    id = element.data("movie-id");
    console.log(id);


    //let modal = document.getElementById("movieModal");
    //let span = document.getElementById("closeMovieModal");

}


///////////////////////////////////////////////////////////////////////////////
function initModal(){
    // Get the modal
    let modal = document.getElementById("myModal");
    console.log(modal);

    // Get the button that opens the modal
    let btn = document.getElementById("myBtn");
    console.log(btn);

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}



