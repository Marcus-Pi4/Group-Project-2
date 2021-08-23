

// NYT Newswire API - fetches the most up to date NYT publications for our default publications to render on page load - can filter 'all', 'nyt' and 'inyt' for the first 'all' and similar to above, there is a section list available to input into the second 'all

const newYorkTimesButton = document.getElementById("newYorkTimes");

newYorkTimesButton?.addEventListener('click', getTopStories);

function getTopStories(){
    fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=QuEHRaQh47l8vSF9ewprDtUY6fj2IJz6`)
    .then(function (response){
        return response.json();
    })
    .then(handleTopStoriesData);
};

function handleTopStoriesData(data) {
    for (let i = 0; i < data.length; i++) {
        let articleData = {
            abstract: data.results[i].abstract,
            image: data.results[i].multimedia[2].url,
            title: data.results[i].title,
            url: data.results[i].url
        }
        
        
    };
    console.log(data);
    console.log(articleData);
};

// NYT Top Stories API - fetches top stories based on 'section' - where section options can be from the following list: arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, world

//need to create dropdown menu with interactive buttons to utilize various sections of the NewYorkTimes API

const timesButton = document.getElementById("time");

timesButton?.addEventListener('click', getNewYorkTimes);

function getNewYorkTimes(){
    let section = 'politics'
    fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=QuEHRaQh47l8vSF9ewprDtUY6fj2IJz6`)
        .then(function (response){
            return response.json();
        })
    .then(handleNewYorkTimesData);
};

function handleNewYorkTimesData(data) {
    let articleData = {
        summary: data.results[0],
        image: data,
        title: data,
        url: data
    }
    console.log(data);
    console.log(articleData);
    Handlebars.
};

// The Guardian API - fetches Guadian stories based on 'section' - lots of specific tags/dates/ids available if we want to get crazy

//need dropdown menu for other Guardian news choices

const guardianButton = document.getElementById("guardian")

guardianButton?.addEventListener('click', getGuardian)

function getGuardian(){
    var section = 'news';
    fetch(`https://content.guardianapis.com/${section}?api-key=c2d87c2d-db21-443e-a087-c96cb6b96da8`)
        .then(function (response){
            return response.json();
        })
    .then(handleGuardianData);
};

function handleGuardianData(data) {
    let articleData = {
        summary: data.response.results[0],
        image: data.response.results[0].,
        title: data,
        url: data
    }
    console.log(data);
    console.log(articleData);
};

// Able to access top news stories from ESPN using mediastack

const espnButton = document.getElementById("espn");

espnButton.addEventListener('click', getEspn);

function getEspn(){
    fetch(`http://api.mediastack.com/v1/news?access_key=52e9c798e66a5ef9a2e0d95db13ff19b&sources=espn&countries=us&date=${today}`)
    .then(function (response){
        return response.json();
    })
    .then(handleEspnData);
};

function handleEspnData(data){
    let articleData = {
        summary: data.data[0].description,
        image: data.data[0].image,
        title: data.data[0].title,
        url: data.data[0].url
    }
    console.log(data)
    console.log(articleData);
};

const today = String(dateToString);

const dateToString = formatDate(newDate);

const newDate = new Date();
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
};

document.getElementById("login-button").addEventListener("click", async ()=> { 
    console.log("logging in")
    try {
    const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        redirect: 'follow', 
        body: JSON.stringify({
            email: 'test@test.com',
            password: 'testtest',
          })
    })
    console.log(response) 
    if (response.status === 200) {
        window.location.href = "http://localhost:8080/"
    }
    } catch (error){
        console.log(error)
    }
});

//a "remember me" box on the main login page, currently unimplimented

const rememberMe = document.getElementById("rememberMe").addeventListener("change", () => {
    if(this.checked) {
        // create cookie to save user data
    } else {
        // send user to homepage
    }
});
