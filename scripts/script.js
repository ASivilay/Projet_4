async function createBestMovieSection(url, categoryName){
    const options = {
        method: "GET"
    }

    let response = await fetch(url, options);
    if(response.status === 200){
        let result = await response.json();
    
        //wrapper
        let div = document.createElement('div');
        div.setAttribute("class", "wrapper");
        //wrapper section
        let section = document.createElement('section');
        section.setAttribute("id", categoryName);
        div.appendChild(section);
        //wrapper section label
        let label = document.createElement('label');
        label.setAttribute("id", categoryName + "title");
        label.innerHTML = "Best All Time Movie: " + result.results[0].title;
        div.appendChild(label);
        //append all elements in body
        document.body.append(div);
    
        getImg(result.results[0].image_url, categoryName, result.results[0].id);    
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

        //wrapper
        let div = document.createElement('div');
        div.setAttribute("class", "wrapper");
        //wrapper section
        let section = document.createElement('section');
        section.setAttribute("id", categoryName);
        div.appendChild(section);
        //wrapper section label
        let label = document.createElement('label');
        label.setAttribute("id", categoryName + "title");
        label.innerHTML = "Best Rated Movies";
        div.appendChild(label);
        //left button
        let leftButton = document.createElement('button');
        leftButton.setAttribute("class", "leftarrowbtn");
        leftButton.setAttribute("id", categoryName + "moveleft");
        leftButton.setAttribute("click", () => moveLeftEvent(this.id));
        leftButton.innerHTML = "‹";
        div.appendChild(leftButton);
        //right button
        let rightButton = document.createElement('button');
        rightButton.setAttribute("class", "rightarrowbtn");
        rightButton.setAttribute("id", categoryName + "moveright");
        rightButton.setAttribute("click", () => moveRightEvent(this.id));
        rightButton.innerHTML = "›";
        div.appendChild(rightButton);
        //append all elements in body
        document.body.append(div);
        
        //insert images
        for(let i = 1; i < result.results.length; i++){
            getImg(result.results[i].image_url, categoryName, result.results[i].id);
        }
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

        //wrapper
        let div = document.createElement('div');
        div.setAttribute("class", "wrapper");
        //wrapper section
        let section = document.createElement('section');
        section.setAttribute("id", categoryName);
        div.appendChild(section);
        //wrapper section label
        let label = document.createElement('label');
        label.setAttribute("id", categoryName + "title");
        label.innerHTML = "Best Rated Movies";
        div.appendChild(label);
        //left button
        let leftButton = document.createElement('button');
        leftButton.setAttribute("class", "leftarrowbtn");
        leftButton.setAttribute("id", categoryName + "moveleft");
        leftButton.setAttribute("click", () => moveLeftEvent(this.id));
        leftButton.innerHTML = "‹";
        div.appendChild(leftButton);
        //right button
        let rightButton = document.createElement('button');
        rightButton.setAttribute("class", "rightarrowbtn");
        rightButton.setAttribute("id", categoryName + "moveright");
        rightButton.setAttribute("click", () => moveRightEvent(this.id));
        rightButton.innerHTML = "›";
        div.appendChild(rightButton);
        //append all elements in body
        document.body.append(div);

        for(let i = 0; i < result.results.length; i++){
            getImg(result.results[i].image_url, categoryName, result.results[i].id);
        }
    }else{
        console.log("HTTP-Error: " + response.status);
    }
    initDisplaySlider(document.getElementById(categoryName), categoryName);
}

//////////////////////////////////////////////////////////////////////////////////////////

async function getImg(url, categoryName, id){
        console.log(url);
        let image = document.createElement('img');
        image.src = url;
        image.dataset.movieId = id;
        
        // image.setAttribute("onclick", "getModal(this)");
        image.setAttribute("class", "item");
        image.style.display = "grid";
        
        container = document.getElementById(categoryName);
        container.append(image);
        image.addEventListener("click", () => getModal(image));
}

/////////////////////////////////////////////////////////////////////////////////

function initDisplaySlider(container, categoryName){
    let images = container.getElementsByTagName("img");
    console.log(images);
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
    console.log(id);
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
        if(image.style.display == "grid"){
            firstImgDisplayed = i;
            console.log(firstImgDisplayed);
            break;
        }
        i++;
    }

    //SLIDING TO THE LEFT YEAH
    if(leftIsDisplayed == false){
        images[firstImgDisplayed - 1].style.display = "grid";  //show
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
    console.log(id);
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
        if(image.style.display == "grid"){
            firstImgDisplayed = i;
            console.log(firstImgDisplayed);
            break;
        }
        i++;
    }

    //SLIDING TO THE RIGHT YEAH
    if(rightIsDisplayed == false){
        images[firstImgDisplayed + 4].style.display = "grid";  //show
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
    img.setAttribute("alt", "");
    modalContent.append(img);

    //modal details
    let movietitle = document.createElement('div')
    movietitle.setAttribute("id", "movietitle");
    modalContent.append(movietitle);

    let moviegenres = document.createElement('div')
    moviegenres.setAttribute("id", "moviegenres");
    modalContent.append(moviegenres);


    let moviedate = document.createElement('div')
    moviedate.setAttribute("id", "moviedate");
    modalContent.append(moviedate);

    let movierated = document.createElement('div')
    movierated.setAttribute("id", "movierated");
    modalContent.append(movierated);

    let movieimdbscore = document.createElement('div')
    movieimdbscore.setAttribute("id", "movieimdbscore");
    modalContent.append(movieimdbscore);

    let moviedirector = document.createElement('div')
    moviedirector.setAttribute("id", "moviedirector");
    modalContent.append(moviedirector);

    let movieactors = document.createElement('div')
    movieactors.setAttribute("id", "movieactors");
    modalContent.append(movieactors);

    let movieduration = document.createElement('div')
    movieduration.setAttribute("id", "movieduration");
    modalContent.append(movieduration);

    let moviecountries = document.createElement('div')
    moviecountries.setAttribute("id", "moviecountries");
    modalContent.append(moviecountries);

    let movieboxoffice = document.createElement('div')
    movieboxoffice.setAttribute("id", "movieboxoffice");
    modalContent.append(movieboxoffice);

    let moviedescription = document.createElement('div')
    moviedescription.setAttribute("id", "moviedescription");
    modalContent.append(moviedescription);
    
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
        console.log(result)
            
        document.getElementById("movieimage").src = result.image_url;
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



