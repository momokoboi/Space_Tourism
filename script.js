


// fetch Data for all
async function getdata(){
    return await fetch("/Space_Tourism/data.json")
    .then(res => res.json())
    .catch(error => console.log(error))
}


// DESTINATION ---------------------------------


function UpdateContent_Destination(planet, data){

    // Elements to be changed selection
    let imageEL = document.getElementById("imageElement")
    let planetEL = document.getElementById("planet_Element")
    let descriptionEL = document.getElementById("description_Element")

    let distanceEL = document.getElementsByClassName("distance")[0]
    let traveltimeEL = document.getElementsByClassName("travel_time")[0]
  
    // UPDATE ELEMENTS
    if (planet === "MOON"){
        planetEL.innerText = `${data.destinations[0].name}`
        imageEL.setAttribute("src", `${data.destinations[0].images.png}`)
        imageEL.setAttribute("alt", "moon_img")
        descriptionEL.innerText = `${data.destinations[0].description
        }`
        distanceEL.innerHTML = `<h3>Avg. distance
    </h3><p>${data.destinations[0].distance}</p>`
        traveltimeEL.innerHTML = `<h3>Est. travel time
    </h3><p>${data.destinations[0].travel}</p>`
    }

    if (planet === "MARS"){
        planetEL.innerText = `${data.destinations[1].name}`
        imageEL.setAttribute("src", `${data.destinations[1].images.png}`)
        imageEL.setAttribute("alt", "mars_img")
        descriptionEL.innerText = `${data.destinations[1].description
        }`
        distanceEL.innerHTML = `<h3>Avg. distance
    </h3><p>${data.destinations[1].distance}</p>`
        traveltimeEL.innerHTML = `<h3>Est. travel time
    </h3><p>${data.destinations[1].travel}</p>`
    }

    if (planet === "EUROPA"){
        planetEL.innerText = `${data.destinations[2].name}`
        imageEL.setAttribute("src", `${data.destinations[2].images.png}`)
        imageEL.setAttribute("alt", "europa_img")
        descriptionEL.innerText = `${data.destinations[2].description
        }`
        distanceEL.innerHTML = `<h3>Avg. distance
    </h3><p>${data.destinations[2].distance}</p>`
        traveltimeEL.innerHTML = `<h3>Est. travel time
    </h3><p>${data.destinations[2].travel}</p>`
    }

    if (planet === "TITAN"){
        planetEL.innerText = `${data.destinations[3].name}`
        imageEL.setAttribute("src", `${data.destinations[3].images.png}`)
        imageEL.setAttribute("alt", "titan_img")
        descriptionEL.innerText = `${data.destinations[3].description
        }`
        distanceEL.innerHTML = `<h3>Avg. distance
    </h3><p>${data.destinations[3].distance}</p>`
        traveltimeEL.innerHTML = `<h3>Est. travel time
    </h3><p>${data.destinations[3].travel}</p>`
    }
}

function UpdateSelector(planet){
    let buttonEL_MARS = document.getElementById("Mars")
    let buttonEL_MOON = document.getElementById("Moon")
    let buttonEL_EUROPA = document.getElementById("Europa")
    let buttonEL_TITAN = document.getElementById("Titan")

    if (planet === "MARS"){
        buttonEL_MARS.setAttribute("class", "selected")
        buttonEL_MOON.removeAttribute("class")
        buttonEL_EUROPA.removeAttribute("class")
        buttonEL_TITAN.removeAttribute("class")
    }else if(planet === "EUROPA"){
        buttonEL_MARS.removeAttribute("class")
        buttonEL_MOON.removeAttribute("class")
        buttonEL_EUROPA.setAttribute("class", "selected")
        buttonEL_TITAN.removeAttribute("class")
    }else if(planet === "TITAN"){
        buttonEL_MARS.removeAttribute("class")
        buttonEL_MOON.removeAttribute("class")
        buttonEL_EUROPA.removeAttribute("class")
        buttonEL_TITAN.setAttribute("class", "selected")

    }else{
        buttonEL_MARS.removeAttribute("class")
        buttonEL_MOON.setAttribute("class", "selected")
        buttonEL_EUROPA.removeAttribute("class")
        buttonEL_TITAN.removeAttribute("class")
    }
}


async function main_Destination() {
    data = await getdata()
    console.log("Inside main:", data)

    // Button Element Selectors
    let buttonEL_MARS = document.getElementById("Mars")
    let buttonEL_MOON = document.getElementById("Moon")
    let buttonEL_EUROPA = document.getElementById("Europa")
    let buttonEL_TITAN = document.getElementById("Titan")

    // BUTTON LISTENERS

    buttonEL_MOON.addEventListener("click", () => {
        planet = "MOON"
        UpdateContent_Destination(planet, data)
        UpdateSelector(planet)
    })

    buttonEL_MARS.addEventListener("click", ()=>{
        planet = "MARS"
        UpdateContent_Destination(planet, data)
        UpdateSelector(planet)
    })

    buttonEL_EUROPA.addEventListener("click", ()=>{
        planet = "EUROPA"
        UpdateContent_Destination(planet, data)
        UpdateSelector(planet)
    })

    buttonEL_TITAN.addEventListener("click", () => {
        planet = "TITAN"
        UpdateContent_Destination(planet, data)
        UpdateSelector(planet)
    })
    
}
// DESTINATION END -----------------------------------------------

main_Destination()

// CREW ---------------------------------------------------------







