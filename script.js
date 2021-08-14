// NYT Newswire API - fetches the most up to date NYT publications for our default publications to render on page load - can filter 'all', 'nyt' and 'inyt' for the first 'all' and similar to above, there is a section list available to input into the second 'all
function getTopStories(){
    fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=QuEHRaQh47l8vSF9ewprDtUY6fj2IJz6`)
    .then(function (response){
        return response.json();
    })
    .then(renderTopStoriesData);
}

function renderTopStoriesData(data){
    console.log(data)
}

// NYT Top Stories API - fetches top stories based on 'section' - where section options can be from the following list: arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, world
var userQuery = 'arts'

function getNewYorkTimes(section){
    fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=QuEHRaQh47l8vSF9ewprDtUY6fj2IJz6`)
        .then(function (response){
            return response.json();
        })
    .then(handleTimesData);
}

function handleTimesData(data) {
    console.log(data)
}

getNewYorkTimes(userQuery)

// The Guardian API - fetches Guadian stories based on 'section' - lots of specific tags/dates/ids available if we want to get crazy
var userSearch = 'politics'

function getGuardian(section){
    fetch(`https://content.guardianapis.com/${section}?api-key=c2d87c2d-db21-443e-a087-c96cb6b96da8`)
        .then(function (response){
            return response.json();
        })
    .then(handleGuardData);
}

function handleGuardData(data) {
    console.log(data)
}

getGuardian(userSearch)
