// NYT Newswire API - fetches the most up to date NYT publications for our default publications to render on page load - can filter 'all', 'nyt' and 'inyt' for the first 'all' and similar to above, there is a section list available to input into the second 'all 

// function getTopStories(){
//     fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=QuEHRaQh47l8vSF9ewprDtUY6fj2IJz6`)
//     .then(function (response){
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data) 
//         console.info("--------this is the ny times data that displays all top stories--------")
//     });
// };

// var newYorkTimesButton = document.getElementById("newYorkTimes")

// newYorkTimesButton.addEventListener('click', getTopStories)
 

// // NYT Top Stories API - fetches top stories based on 'section' - where section options can be from the following list: arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, world


// function getNewYorkTimes(){
//     var section = 'business'
//     fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=QuEHRaQh47l8vSF9ewprDtUY6fj2IJz6`)
//         .then(function (response){
//             return response.json();
//         })
//     .then(handleTimesData);
// }

// function handleTimesData(data) {
//     console.log(data)
//     console.info('this is the ny times that gets top stories based on section')
// }

// var timesButton = document.getElementById("time")

// timesButton.addEventListener('click', getNewYorkTimes)


// // The Guardian API - fetches Guadian stories based on 'section' - lots of specific tags/dates/ids available if we want to get crazy


// function getGuardian(){
//     var section = 'news'
//     fetch(`https://content.guardianapis.com/${section}?api-key=c2d87c2d-db21-443e-a087-c96cb6b96da8`)
//         .then(function (response){
//             return response.json();
//         })
//     .then(handleGuardData);
// }

// function handleGuardData(data) {
//     console.log(data)
// }

// var guardianButton = document.getElementById("guardian")

// guardianButton.addEventListener('click', getGuardian)

// // Able to access top news stories from ESPN using mediastack
// function getSports(){
//     fetch(`http://api.mediastack.com/v1/news?access_key=52e9c798e66a5ef9a2e0d95db13ff19b&sources=espn&countries=us&date=${today}`)
//     .then(function (response){
//         return response.json();
//     })
//     .then(handleSportsData);
// }

// function handleSportsData(data){
//     console.log(data)
// }

// const newDate = new Date();
// function formatDate(date) {
//     var d = new Date(date),
//         month = '' + (d.getMonth() + 1),
//         day = '' + d.getDate(),
//         year = d.getFullYear();
//     if (month.length < 2) 
//         month = '0' + month;
//     if (day.length < 2) 
//         day = '0' + day;

//     return [year, month, day].join('-');
// }
// const dateToString = formatDate(newDate)
// const today = String(dateToString)

// var espnButton = document.getElementById("espn")

// espnButton.addEventListener('click', getSports) 

document.getElementById("login-button").addEventListener("click", async ()=> { 
    console.log("logging in")
    try {
    const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        redirect: 'follow', 
        body: JSON.stringify({
            email: 'rachael123@fakeemail.com',
            password: '#PasSWord49!',
          })
    })
    console.log(response) 
    if (response.status === 200) {
        window.location.href = "http://localhost:8080/"
    }
    } catch (error){
        console.log(error)
    }
})