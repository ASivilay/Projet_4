//import axios, {isCancel, AxiosError} from 'axios';
//console.log(axios.isCancel('something'));

console.log("hello!")

const myList = document.querySelector("ul");

const myRequest = new Request("http://localhost:8000/api/v1/titles/?page_size=1&year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")

fetch(myRequest)
    .then((response) => {
        if(!response.ok){
            throw new Error(`HTTP error, status = ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        for (const result of data.results){
            const listItem = document.createElement("li");

            const nameElement = document.createElement("strong");
            nameElement.textContent = result.title;

            listItem.append(nameElement);

            myList.appendChild(listItem);
        }
    })

//response = fetch("http://localhost:8000/api/v1/titles/?page_size=1&year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=");
//test = response.json();

//console.log(response);
