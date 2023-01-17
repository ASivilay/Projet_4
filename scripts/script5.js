async function test(url, category){   
    let response = await fetch(url);
    let result = await response.json();

    let titles = new Array();
    let imageUrls = new Array();

    for(let i = 0; i<result.results.length; i++){
        titles.push(result.results[i].title);
        imageUrls.push(result.results[i].image_url);
        load_pic(result.results[i].image_url, category);
    }

    console.log(titles);
    console.log(imageUrls);
    //let bestmovietitle = document.getElementById("bestmovietitle");
}

async function load_pic(url, category){
    
    const options = {
        method: "GET"
    }

    let response = await fetch(url, options)

    if(response.status === 200){
        let imageBlob = await response.blob()
        let imageObjectURL = URL.createObjectURL(imageBlob)

        let image = document.createElement('img')
        image.src = imageObjectURL
        
        //container = document.getElementById("bestratedimages")
        container = document.getElementById(category)
        container.append(image)
    }
    else{
        console.log("HTTP-Error: " + response.status)
    }
}
