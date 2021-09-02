const newYorkTimesButton = document.getElementById("newYorkTimes");
const timesButton = document.getElementById("time");
const guardianButton = document.getElementById("guardian");
const espnButton = document.getElementById("espn");
espnButton.addEventListener('click', getEspn);

guardianButton?.addEventListener('click', getGuardian);
newYorkTimesButton?.addEventListener('click', getTopStories);
timesButton?.addEventListener('click', getNewYorkTimes);

function articleTemplate(i, values) {
    const newsDiv = document.getElementById('newsCardDiv');
    let newsCard = document.getElementsByClassName("newsCard")[i];
    let clone = newsCard.cloneNode([true]);
    let hyperlink = document.getElementsByClassName("hyperlink")[i];
    let image = document.getElementsByClassName("imageUrl")[i];
    let title = document.getElementsByClassName("title")[i];
    let articleAbstract = document.getElementsByClassName("articleAbstract")[i];
    newsDiv.appendChild(clone);
    articleAbstract.innerHTML = values.abstract;
    title.innerHTML = values.title;
    image.src = values.image;
    hyperlink.href = values.url;
};

function getTopStories(){
    document.getElementsByClassName('is-hidden')[0].classList.remove('is-hidden');
    fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=QuEHRaQh47l8vSF9ewprDtUY6fj2IJz6`)
    .then(function (response){
        return response.json();
    })
    .then(handleTopStoriesData);
};

function getNewYorkTimes(){
    document.getElementsByClassName('is-hidden')[0].classList.remove('is-hidden');
    const section = 'politics';
    fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=QuEHRaQh47l8vSF9ewprDtUY6fj2IJz6`)
        .then(function (response){
            return response.json();
        })
    .then(handleNewYorkTimesData);
};

function getGuardian(){
    document.getElementsByClassName('is-hidden')[0].classList.remove('is-hidden');
    const section = 'news';
    fetch(`https://content.guardianapis.com/${section}?api-key=c2d87c2d-db21-443e-a087-c96cb6b96da8`)
    .then(function (response){
        return response.json();
    })
    .then(handleGuardianData);
};

function getEspn(){
    document.getElementsByClassName('is-hidden')[0].classList.remove('is-hidden');
    fetch(`http://api.mediastack.com/v1/news?access_key=52e9c798e66a5ef9a2e0d95db13ff19b&sources=espn&countries=us&date=${today}`)
    .then(function (response){
        return response.json();
    })
    .then(handleEspnData);
};

function handleTopStoriesData(data) {
    console.log(data.results);
    for (let i = 0; i < data.results.length; i++) {
        let articleData = {
            abstract: (data.results[i].abstract? data.results[i].abstract: ""),
            image: (data.results[i].multimedia[2].url? data.results[i].multimedia[2].url: ""),
            title: (data.results[i].title? data.results[i].title: ""),
            url: (data.results[i].url? data.results[i].url: "")
        }
        articleTemplate (i, articleData);
    }; 
};

function handleNewYorkTimesData(data) {
    console.log(data);
    for (let i = 0; i < data.results.length; i++) {
        let articleData = {
            abstract: data.results[i].abstract,
            image: data.results[i].multimedia[3].url,
            title: data.results[i].title,
            url: data.results[i].url
        }
        articleTemplate (i, articleData);
    };
};

function handleGuardianData(data) {
    console.log(data);
    for (let i = 0; i < data.response.results.length; i++) {
        let articleData = {
            abstract: "",
            image: "",
            title: data.response.results[i].webTitle,
            url: data.response.results[i].webUrl
        };
    articleTemplate (i, articleData);
    };
};

function handleEspnData(data){
    for (let i = 0; i < data.data.length; i++) {
        let articleData = {
            abstract: data.data[i].description,
            image: data.data[i].image,
            title: data.data[i].title,
            url: data.data[i].url
        }
    articleTemplate (i, articleData);
    };
};

const newDate = new Date();
function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
};

const dateToString = formatDate(newDate);
const today = String(dateToString);