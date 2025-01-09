
// load respective js modules after DOM loaded
document.addEventListener("DOMContentLoaded", () => {
    const pageID = document.body.id

    if (pageID === "destination"){
        main_Destination()
    }else if(pageID === "crew"){
        main_Crew()
    }else{
        alert("ERROR")
    }
})


// fetch Data for all
async function getdata(){
    // /Space_Tourism (for github)
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

// CREW ---------------------------------------------------------

async function main_Crew(){
    let data = await getdata()
    console.log("inside crewmain: ", data)

    // TO BE CHANGED ELEMENTS

    let typeEL = document.getElementById("typeEL")
    let nameEL = document.getElementById("nameEL")
    let descriptionEL = document.getElementById("descriptionEL")
    let imgEL = document.getElementById("img_EL")

    // Radio elements
    let selector1 = document.getElementById("douglas")
    let selector2 = document.getElementById("mark")
    let selector3 = document.getElementById("victor")
    let selector4 = document.getElementById("anousheh")


    selector1.addEventListener("change", () =>  {
        if (selector1.checked){
            typeEL.innerText = `${data.crew[0].role}`
            nameEL.innerText = `${data.crew[0].name}`
            descriptionEL.innerText = `${data.crew[0].bio}`
            imgEL.setAttribute("src", `${data.crew[0].images.png}`)
            imgEL.setAttribute("alt", "douglas_img")
            imgEL.style.margin = "7px 60px"
            imgEL.style.width = "420px"
    }
    })
    
    selector2.addEventListener("change", () => {
        if(selector2.checked){
            typeEL.innerText = `${data.crew[1].role}`
            nameEL.innerText = `${data.crew[1].name}`
            descriptionEL.innerText = `${data.crew[1].bio}`
            imgEL.setAttribute("src", `${data.crew[1].images.png}`)
            imgEL.setAttribute("alt", "mark_img")
            imgEL.style.margin = "58px 60px"
            imgEL.style.width = "350px"
        }
    })
   
    selector3.addEventListener("change", ()=>{
        if(selector3.checked){
            typeEL.innerText = `${data.crew[2].role}`
            nameEL.innerText = `${data.crew[2].name}`
            descriptionEL.innerText = `${data.crew[2].bio}`
            imgEL.setAttribute("src", `${data.crew[2].images.png}`)
            imgEL.setAttribute("alt", "victor_img")
            imgEL.style.margin = "86px 60px"
            imgEL.style.width = "420px"
        }
    })

    selector4.addEventListener("change", ()=>{
        if(selector4.checked){
            typeEL.innerText = `${data.crew[3].role}`
            nameEL.innerText = `${data.crew[3].name}`
            descriptionEL.innerText = `${data.crew[3].bio}`
            imgEL.setAttribute("src", `${data.crew[3].images.png}`)
            imgEL.setAttribute("alt", "anousheh_img")
            imgEL.style.margin = "140px 60px"
            imgEL.style.width = "420px"
        }
    })


}








