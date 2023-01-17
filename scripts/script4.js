async function load_pic(url){
    
    const options = {
        method: "GET"
    }

    let response = await fetch(url, options)

    if(response.status === 200){
        let imageBlob = await response.blob()
        let imageObjectURL = URL.createObjectURL(imageBlob)

        let image = document.createElement('img')
        image.src = imageObjectURL
        
        container = document.getElementById("bestrated")
        container.append(image)
    }
    else{
        console.log("HTTP-Error: " + response.status)
    }
}


/*
let urls = [
    "https://m.media-amazon.com/images/M/MV5BNDEyYTA5OWEtYjNiYS00MGZlLThjYzEtMTc1Zjk2NDRmZmYxXkEyXkFqcGdeQXVyNzIwNTQyMw@@._V1_UY268_CR1,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BOWVmOWRmMWMtMDc2OC00NGM2LTllOTAtMmY5NjVhM2YzYjVlXkEyXkFqcGdeQXVyOTc2MTgwNjY@._V1_UY268_CR3,0,182,268_AL_.jpg",
    ]
*/