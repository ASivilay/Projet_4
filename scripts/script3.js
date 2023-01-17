async function load_pic(){
    const url = "https://m.media-amazon.com/images/M/MV5BNDEyYTA5OWEtYjNiYS00MGZlLThjYzEtMTc1Zjk2NDRmZmYxXkEyXkFqcGdeQXVyNzIwNTQyMw@@._V1_UY268_CR1,0,182,268_AL_.jpg"

    const options = {
        method: "GET"
    }

    let response = await fetch(url, options)

    if(response.status === 200){
        const imageBlob = await response.blob()
        const imageObjectURL = URL.createObjectURL(imageBlob)

        const image = document.createElement('img')
        image.src = imageObjectURL
        
        const container = document.getElementById("bestmovie")
        container.append(image)
    }
    else{
        console.log("HTTP-Error: " + response.status)
    }
}