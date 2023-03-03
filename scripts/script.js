async function createBestMovieSection(url, categoryName){
    const options = {
        method: "GET"
    }

    let response = await fetch(url, options);
    if(response.status === 200){
        let result = await response.json();
        console.log(result);
    
        //creating wrapper   
        let wrapperDiv = document.getElementById("bestmoviewrapper");
        wrapperDiv.setAttribute("class", "wrapper");
        //wrapper section label
        /*
        let label = document.createElement('label');
        label.id = categoryName + "title";
        label.className = categoryName + "label";
        label.innerHTML = "Best All Time Movie";
        wrapperDiv.appendChild(label);
        */
        let h3 = document.createElement('h3');
        h3.id = categoryName + "title";
        h3.className = categoryName + "h3";
        h3.innerHTML = "Best All Time Movie";
        wrapperDiv.appendChild(h3);
        //wrapper section
        let section = document.createElement('section');
        section.id = categoryName;
        section.className = "bestmoviesection";
        wrapperDiv.appendChild(section);

        //insert image
        getImg(result.results[0].image_url, categoryName, result.results[0].id, result.results[0].title);   
        
        //second column div
        let secondColumnDiv = document.createElement('div');
        secondColumnDiv.className = "secondcolumn";
        section.appendChild(secondColumnDiv);
        //best movie details div
        let bestMovieDetailsDiv = document.createElement('div');
        bestMovieDetailsDiv.className = "bestmoviedetails";
        secondColumnDiv.appendChild(bestMovieDetailsDiv);
        //play button
        let button = document.createElement('button');
        button.type = "button";
        button.className = "bestmoviebutton";
        button.innerHTML = "PLAY";
        secondColumnDiv.appendChild(button);
        //movie title div
        let bestMovieTitleDiv = document.createElement('div');
        bestMovieTitleDiv.className = "bestmovietitle";
        bestMovieTitleDiv.innerHTML = result.results[0].title;
        bestMovieDetailsDiv.appendChild(bestMovieTitleDiv);
        //movie year and genres
        let bestMovieYearGenresDiv = document.createElement('div');
        bestMovieYearGenresDiv.className = "bestmovieyeargenres";
        bestMovieYearGenresDiv.innerHTML =  result.results[0].genres + " - " + result.results[0].year;
        bestMovieDetailsDiv.appendChild(bestMovieYearGenresDiv);
        //movie directors
        let bestMovieDirectorsDiv = document.createElement('div');
        bestMovieDirectorsDiv.className = "bestmoviedirectors";
        bestMovieDirectorsDiv.innerHTML = "Directors: " + result.results[0].directors;
        bestMovieDetailsDiv.appendChild(bestMovieDirectorsDiv);
        //movie actors div
        let bestMovieActorsDiv = document.createElement('div');
        bestMovieActorsDiv.className = "bestmovieactors";
        bestMovieActorsDiv.innerHTML = "Actors: " + result.results[0].actors;
        bestMovieDetailsDiv.appendChild(bestMovieActorsDiv);

        //movie description
        let movieURL = result.results[0].url;
        let response2 = await fetch(movieURL, options);
        if (response2.status === 200){
            let result2 = await response2.json();
            console.log(result2);
            let bestMovieDescriptionDiv = document.createElement('div');
            bestMovieDescriptionDiv.className = "bestmoviedescription";
            bestMovieDescriptionDiv.innerHTML = result2.description;
            bestMovieDetailsDiv.appendChild(bestMovieDescriptionDiv);
        }

    } else{
        console.log("HTTP-Error: " + response.status);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////

async function createBestRatedSection(url, categoryName){
    const options = {
        method: "GET"
    };

    let response = await fetch(url, options);
    if(response.status === 200){
        let result = await response.json();
        //console.log(result);

        //creating wrapper
        let div = document.getElementById("bestratedwrapper");
        div.setAttribute("class", "wrapper");
        //wrapper section
        let section = document.createElement('section');
        section.setAttribute("id", categoryName);
        //wrapper section label
        /*
        let label = document.createElement('label');
        label.setAttribute("id", categoryName + "title");
        label.innerHTML = "Best Rated Movies";
        section.appendChild(label);
        */
        let h3 = document.createElement('h3');
        h3.id = categoryName + "title";
        h3.innerHTML = "Best Rated Movies";
        section.appendChild(h3);
        //left button
        let leftButton = document.createElement('button');
        leftButton.className = "leftarrowbtn";
        leftButton.id = categoryName + "moveleft";
        leftButton.innerHTML = "‹";
        section.appendChild(leftButton);
        //append all elements in body
        div.appendChild(section);
        
        //inserting images
        for(let i = 1; i < result.results.length; i++){
            getImg(result.results[i].image_url, categoryName, result.results[i].id, result.results[i].title);
        }
        //right button
        let rightButton = document.createElement('button');
        rightButton.className = "rightarrowbtn";
        rightButton.id = categoryName + "moveright";
        rightButton.innerHTML = "›";
        section.appendChild(rightButton);
        //adding click event on buttons
        leftButton.addEventListener("click", () => moveLeftEvent(leftButton.id));
        rightButton.addEventListener("click", () => moveRightEvent(rightButton.id));

    }else{
        console.log("HTTP-Error: " + response.status);
    }
    initDisplaySlider(document.getElementById(categoryName), categoryName);
}

/////////////////////////////////////////////////////////////////////////////////////////

async function createMoviesSection(url, categoryName){
    const options = {
        method: "GET"
    };

    let response = await fetch(url, options);
    if(response.status === 200){
        let result = await response.json();

        //creating wrapper
        let div = document.createElement('div');
        div.setAttribute("class", "wrapper");
        //wrapper section
        let section = document.createElement('section');
        section.setAttribute("id", categoryName);
        //wrapper section label
        /*
        let label = document.createElement('label');
        label.id = categoryName + "title";
        label.innerHTML = categoryName;
        section.appendChild(label);
        */
        let h3 = document.createElement('h3');
        h3.id = categoryName + "title";
        h3.innerHTML = categoryName;
        section.appendChild(h3);
        //left button
        let leftButton = document.createElement('button');
        leftButton.className = "leftarrowbtn";
        leftButton.id = categoryName + "moveleft";
        leftButton.innerHTML = "‹";
        section.appendChild(leftButton);
        //append all elements in body
        div.appendChild(section);
        document.body.append(div);
        //insert images
        for(let i = 0; i < result.results.length; i++){
            getImg(result.results[i].image_url, categoryName, result.results[i].id, result.results[i].title);
        }
         //right button
         let rightButton = document.createElement('button');
         rightButton.className = "rightarrowbtn";
         rightButton.id = categoryName + "moveright";
         rightButton.innerHTML = "›";
         section.appendChild(rightButton);
         //adding click events on buttons
         leftButton.addEventListener("click", () => moveLeftEvent(leftButton.id));
         rightButton.addEventListener("click", () => moveRightEvent(rightButton.id));
         
    }else{
        console.log("HTTP-Error: " + response.status);
    }
    initDisplaySlider(document.getElementById(categoryName), categoryName);
}

//////////////////////////////////////////////////////////////////////////////////////////

async function getImg(url, categoryName, id, movietitle){
        //console.log(url);
        let image = document.createElement('img');
        image.src = url;
        image.dataset.movieId = id;
        image.alt = movietitle;
        
        // image.setAttribute("onclick", "getModal(this)");
        image.setAttribute("class", "item");
        image.style.display = "flex";
        
        container = document.getElementById(categoryName);
        container.append(image);
        image.addEventListener("click", () => getModal(image));
}

/////////////////////////////////////////////////////////////////////////////////

function initDisplaySlider(container, categoryName){
    let images = container.getElementsByTagName("img");
    //console.log(images);
    let i = 0;
    for(let image of images){
        if(i>3){
            image.style.display = "none";
        }
        i++;
    }
    let leftButton = document.getElementById(categoryName + "moveleft");
    leftButton.style.display = "none";
}

//////////////////////////////////////////////////////////////////////////////////

function moveLeftEvent(id){
    //console.log(id);
    let leftButton = document.getElementById(id);
    let categoryName = leftButton.closest("div > section").id;
    let sectionContainer = document.getElementById(categoryName);
    let images = sectionContainer.getElementsByTagName("img");
    let rightButton = document.getElementById(categoryName + "moveright");

    let leftIsDisplayed = new Boolean(false);
    let rightIsDisplayed = new Boolean(false);

    //checking edge conditions
    if(images[0].style.display == "none"){
        leftIsDisplayed = false;
    }else{
        leftIsDisplayed = true;
    }

    if(images[6].style.display == "none"){
        rightIsDisplayed = false;
    }else{
        rightIsDisplayed = true;
    }

    //getting index of first image displayed
    let i = 0;
    let firstImgDisplayed = 0;
    for(let image of images){
        if(image.style.display == "flex"){
            firstImgDisplayed = i;
            //console.log(firstImgDisplayed);
            break;
        }
        i++;
    }

    //SLIDING TO THE LEFT
    if(leftIsDisplayed == false){
        images[firstImgDisplayed - 1].style.display = "flex";  //show
        images[firstImgDisplayed + 3].style.display = "none";  //hide
    }
     
    //hiding button
    if(firstImgDisplayed == 1){
        leftButton.style.display = "none";
    }

    //showing right button
    if(firstImgDisplayed == 3){
        rightButton.style.display = "block";
    }
}

///////////////////////////////////////////////////////////////////////////////////

function moveRightEvent(id){
    //console.log(id);
    let rightButton = document.getElementById(id);
    let categoryName = rightButton.closest("div > section").id;
    let sectionContainer = document.getElementById(categoryName);
    let images = sectionContainer.getElementsByTagName("img");
    let leftButton = document.getElementById(categoryName + "moveleft");

    let leftIsDisplayed = new Boolean(false);
    let rightIsDisplayed = new Boolean(false);

    //checking edge conditions
    if(images[0].style.display == "none"){
        leftIsDisplayed = false;
    }else{
        leftIsDisplayed = true;
    }

    if(images[6].style.display == "none"){
        rightIsDisplayed = false;
    }else{
        rightIsDisplayed = true;
    }

    //getting index of first image displayed
    let i = 0;
    let firstImgDisplayed = 0;
    for(let image of images){
        if(image.style.display == "flex"){
            firstImgDisplayed = i;
            //console.log(firstImgDisplayed);
            break;
        }
        i++;
    }

    //SLIDING TO THE RIGHT
    if(rightIsDisplayed == false){
        images[firstImgDisplayed + 4].style.display = "flex";  //show
        images[firstImgDisplayed].style.display = "none";  //hide
    }
     
    //hiding button
    if(firstImgDisplayed == 2){
        rightButton.style.display = "none";
    }

    //showing left button
    if(firstImgDisplayed == 0){
        leftButton.style.display = "block";
    }
}

///////////////////////////////////////////////////////////////////////////////

function createModal(){
    //modal
    let modal = document.createElement('div');
    modal.setAttribute("id", "movieModal");
    modal.setAttribute("class", "modal");

    //modal content
    let modalContent = document.createElement('div');
    modalContent.setAttribute("class", "modal-content");
    modalContent.setAttribute("id", "modal-content");

    //span
    let span = document.createElement('span');
    span.setAttribute("class","close");
    span.innerHTML ="&times;";
    modalContent.append(span);

    //img
    let img = document.createElement('img');
    img.setAttribute("id", "movieimage");
    img.setAttribute("alt", "movie image");
    img.src = "data:,";
    modalContent.append(img);

    //modal details
    let moviedetails = document.createElement('div');
    moviedetails.setAttribute("id", "moviedetails");
    modalContent.append(moviedetails);

    let movietitle = document.createElement('div')
    movietitle.setAttribute("id", "movietitle");
    moviedetails.append(movietitle);

    let moviegenres = document.createElement('div')
    moviegenres.setAttribute("id", "moviegenres");
    moviedetails.append(moviegenres);


    let moviedate = document.createElement('div')
    moviedate.setAttribute("id", "moviedate");
    moviedetails.append(moviedate);

    let movierated = document.createElement('div')
    movierated.setAttribute("id", "movierated");
    moviedetails.append(movierated);

    let movieimdbscore = document.createElement('div')
    movieimdbscore.setAttribute("id", "movieimdbscore");
    moviedetails.append(movieimdbscore);

    let moviedirector = document.createElement('div')
    moviedirector.setAttribute("id", "moviedirector");
    moviedetails.append(moviedirector);

    let movieactors = document.createElement('div')
    movieactors.setAttribute("id", "movieactors");
    moviedetails.append(movieactors);

    let movieduration = document.createElement('div')
    movieduration.setAttribute("id", "movieduration");
    moviedetails.append(movieduration);

    let moviecountries = document.createElement('div')
    moviecountries.setAttribute("id", "moviecountries");
    moviedetails.append(moviecountries);

    let movieboxoffice = document.createElement('div')
    movieboxoffice.setAttribute("id", "movieboxoffice");
    moviedetails.append(movieboxoffice);

    let moviedescription = document.createElement('div')
    moviedescription.setAttribute("id", "moviedescription");
    moviedetails.append(moviedescription);
    
    //append modal to body
    modal.append(modalContent);
    document.body.append(modal)
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

///////////////////////////////////////////////////////////////////////////////

async function getModal(element){
    
    id = element.getAttribute("data-movie-id");
    url = "http://localhost:8000/api/v1/titles/" + id;
    
    const options = {
        method: "GET"
    }
    
    //console.log("11")
    let response = await fetch(url, options);
    //console.log("22")
    if(response.status === 200){
        let result = await response.json();
        //console.log(result)
        //checking null attributes
        for(let item in result){
            let child = result[item];
            if(child === null){
                result[item] = "";
            }
        }

        document.getElementById("movieimage").src = result.image_url;
        document.getElementById("movieimage").alt = result.original_title;
        document.getElementById("movietitle").innerHTML = "Title: " + result.title;
        document.getElementById("moviegenres").innerHTML = "Genre(s): " + result.genres;
        document.getElementById("moviedate").innerHTML = "Release date: " + result.date_published;
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

    //DISPLAY
    let modal = document.getElementById("movieModal");
    modal.style.display = "block";
}



