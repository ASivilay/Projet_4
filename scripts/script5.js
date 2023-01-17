async function test(){
    url = "http://localhost:8000/api/v1/titles/?page_size=1&year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains="
    let response = await fetch(url);
    let result = await response.json();

    console.log(result);



}

