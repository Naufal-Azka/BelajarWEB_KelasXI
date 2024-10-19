//CREATE BB-BC-BBV-BM-IXm CARD
let shipPotraitBB = [];
let shipPotraitBBName = ["Alsace", "Bismarck Zwei","Friedrich der Große","Kearsage","Musashi","New Jersey","Sovetsky Soyuz","Ulrich von Hutten","Vanguard","Warspite"];

for (let i = 0; i < shipPotraitBBName.length; i++){
    shipPotraitBB.push(`src/ships/main/BB-BC-BBV-BM-IXm/potrait/shippotrait${i}.png`)
}

function createCardBB() {
    let htmlContent = "";
    const shiplistContainerShipBB = document.getElementById("shipBB");

    shipPotraitBB.forEach(function (img, i) {
        htmlContent +=
        `<div class="shiplist--container--ship--card">
            <div class="shiplist--container--ship--card--img">
                <img src="${img}" alt=""/>
            </div>
            <div class="shiplist--container--ship--card--title">
                <h4 class="text--h4">${shipPotraitBBName[i]}</h4>
            </div>
        </div>`;
    });

    shiplistContainerShipBB.innerHTML = htmlContent;
}
createCardBB();


//CREATE CV-CVL CARD
let shipPotraitCV = [];
let shipPotraitCVName = ["Amagi(CV)","Admiral Nakhimov","Hakuryuu","Implacable","Shinano","Yorktown II"];

for (let i = 0; i < shipPotraitCVName.length; i++){
    shipPotraitCV.push(`src/ships/main/CV-CVL/potrait/shippotrait${i}.png`);
}

function createCardCV() {
    let htmlContent = "";
    const shiplistContainerShipCV = document.getElementById("shipCV");

    shipPotraitCV.forEach(function (img, i) {
        htmlContent +=
        `<div class="shiplist--container--ship--card">
            <div class="shiplist--container--ship--card--img">
                <img src="${img}" alt=""/>
            </div>
            <div class="shiplist--container--ship--card--title">
                <h4 class="text--h4">${shipPotraitCVName[i]}</h4>
            </div>
        </div>`;
    });

    shiplistContainerShipCV.innerHTML = htmlContent;
}
createCardCV();


//CREATE CA-CB CARD
let shipPotraitCA = [];
let shipPotraitCAName = ["Ägir","Azuma","Brest","Drake","Guam","Hindenburg","Kronshtadt","Napoli","Unzen"];

for (let i = 0; i < shipPotraitCAName.length; i++){
    shipPotraitCA.push(`src/ships/vanguard/CA-CB/potrait/shippotrait${i}.png`);
}

function createCardCA() {
    let htmlContent = "";
    const shiplistContainerShipCA = document.getElementById("shipCA");

    shipPotraitCA.forEach(function (img, i) {
        htmlContent +=
        `<div class="shiplist--container--ship--card">
            <div class="shiplist--container--ship--card--img">
                <img src="${img}" alt=""/>
            </div>
            <div class="shiplist--container--ship--card--title">
                <h4 class="text--h4">${shipPotraitCAName[i]}</h4>
            </div>
        </div>`;
    });

    shiplistContainerShipCA.innerHTML = htmlContent;
}
createCardCA();


//CREATE CL CARD
let shipPotraitCL = [];
let shipPotraitCLName = ["Plymouth","San Diego"];

for (let i = 0; i < shipPotraitCLName.length; i++){
    shipPotraitCL.push(`src/ships/vanguard/CL/potrait/shippotrait${i}.png`);
}

function createCardCL() {
    let htmlContent = "";
    const shiplistContainerShipCL = document.getElementById("shipCL");

    shipPotraitCL.forEach(function (img, i) {
        htmlContent +=
        `<div class="shiplist--container--ship--card">
            <div class="shiplist--container--ship--card--img">
                <img src="${img}" alt=""/>
            </div>
            <div class="shiplist--container--ship--card--title">
                <h4 class="text--h4">${shipPotraitCLName[i]}</h4>
            </div>
        </div>`;
    });

    shiplistContainerShipCL.innerHTML = htmlContent;
}
createCardCL();


//CREATE DD CARD
let shipPotraitDD = [];
let shipPotraitDDName = ["Eldrigde","Laffey II","Mogador","Shimakaze","Yuudachi"];

for (let i = 0; i < shipPotraitDDName.length; i++){
    shipPotraitDD.push(`src/ships/vanguard/DD/potrait/shippotrait${i}.png`);
}

function createCardDD() {
    let htmlContent = "";
    const shiplistContainerShipDD = document.getElementById("shipDD");

    shipPotraitDD.forEach(function (img, i) {
        htmlContent +=
        `<div class="shiplist--container--ship--card">
            <div class="shiplist--container--ship--card--img">
                <img src="${img}" alt=""/>
            </div>
            <div class="shiplist--container--ship--card--title">
                <h4 class="text--h4">${shipPotraitDDName[i]}</h4>
            </div>
        </div>`;
    });

    shiplistContainerShipDD.innerHTML = htmlContent;
}
createCardDD();


// CHANGE BACKGROUNDS
let bgIMG = [];
const bgHome = document.getElementById("home");

for (let i = 0; i < 10; i++){
    bgIMG.push(`src/bgs/bg${i}.jpg`);
}

function changeBackground() {
    var i = Math.floor((Math.random() * 10));
    bgHome.style.backgroundImage = 'url("'+ bgIMG[i] +'")';
}
window.setInterval(changeBackground, 10000);