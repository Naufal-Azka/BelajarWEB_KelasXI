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
          <img src="${img}" alt="" data-type="BB" data-index="${i + 0}" />
        </div>
        <div class="shiplist--container--ship--card--title">
          <h4 class="text--h4">${shipPotraitBBName[i]}</h4>
        </div>
    </div>`;
  });

  shiplistContainerShipBB.innerHTML = htmlContent;
}
      
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
      <img src="${img}" alt="" data-type="CV" data-index="${i + 0}" />
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
        <img src="${img}" alt="" data-type="CA" data-index="${i + 0}" />
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
        <img src="${img}" alt="" data-type="CL" data-index="${i + 0}" />
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
        <img src="${img}" alt="" data-type="DD" data-index="${i + 0}" />
            </div>
            <div class="shiplist--container--ship--card--title">
            <h4 class="text--h4" data-index="${i + 0}">${shipPotraitDDName[i]}</h4>
            </div>
            </div>`;
          });
          
          shiplistContainerShipDD.innerHTML = htmlContent;
        }
        
        createCardDD();
        createCardBB();
        
//ADD DISCUSSION
function addDiscussion() {
  let name = document.getElementById("name--value").value.trim();
  let discussion = document.getElementById("comment--value").value.trim();
    
  if (name === "" || discussion === "") {
    alert("Please fill the empty field");
    return
  }
      
  const discussionListPost = document.getElementById("discussion--container--list--post");
  const divList = document.createElement("div");
  discussionListPost.append(divList);
          
  const divCard = document.createElement('div');
  divCard.className = "container--flex--row"

  const profilePhoto = document.createElement("img");
  profilePhoto.src = ('src/misc/unknown_icon.png');

  const discussionName = document.createElement("h2");
  discussionName.textContent = name;
  divCard.append(profilePhoto);
  divCard.append(discussionName);

  const discussionValue = document.createElement("h3");
  discussionValue.textContent = discussion;

  const lineBreak = document.createElement("hr");

  divList.append(divCard);
  divList.append(discussionValue);
  divList.append(lineBreak);
  document.getElementById("name--value").value = "";
  document.getElementById("comment--value").value = "";
}


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


// AKHIRNYA JADI JUGA ALHAMDULILLAH THANK YOU ChatGPT-4o
const navBar = document.getElementById("navbar");
const modalBox = document.createElement("div");
modalBox.id = "modal";
modalBox.className = "modal";
modalBox.style.display = "none";  // Set awal display menjadi none
document.body.appendChild(modalBox);

function openModalBox(type, imgIndex) {
  // Tentukan direktori gambar penuh berdasarkan tipe
  let fullImageSrc;
  let fullNameArray = [];
  
  if (type === "BB") {
    fullImageSrc = `src/ships/main/BB-BC-BBV-BM-IXm/ship${imgIndex}.png`;
    fullNameArray = shipPotraitBBName;
  } else if (type === "CV") {
    fullImageSrc = `src/ships/main/CV-CVL/ship${imgIndex}.png`;
    fullNameArray = shipPotraitCVName;
  } else if (type === "CA") {
    fullImageSrc = `src/ships/vanguard/CA-CB/ship${imgIndex}.png`;
    fullNameArray = shipPotraitCAName;
  } else if (type === "CL") {
    fullImageSrc = `src/ships/vanguard/CL/ship${imgIndex}.png`;
    fullNameArray = shipPotraitCLName;
  } else if (type === "DD") {
    fullImageSrc = `src/ships/vanguard/DD/ship${imgIndex}.png`;
    fullNameArray = shipPotraitDDName;
  }
  const fullName = fullNameArray[parseInt(imgIndex)]

  const modalBoxContent = document.createElement("div");
  modalBoxContent.className = "modal-content";
  
  const htmlContent = `
    <div class="modal--overlay">
      <div class="modal--container--control">
        <h1 class="close--modal" onclick="closeModalBox()">X</h1>  <!-- Tambah onclick untuk menutup modal -->
      </div>
    </div>
    <div class="modal--container container--flex--row">
      <div class="modal--container--table--left container--flex--column">
        <div class="card">
          <img src="${fullImageSrc}" alt="" />  <!-- Menggunakan path full image -->
        </div>
        <div class="table--ship--desc">
          <table border="1">
            <tbody>
              <tr>
                <th colspan="2">Ship Identity</th>
              </tr>
              <tr>
                <th>Name</th>
                <th>${fullName}</th>
              </tr>
              <tr>
                <th>Faction</th>
                <th>Northern Parliament</th>
              </tr>
              <tr>
                <th>Rarity</th>
                <th style="background: linear-gradient(120deg, #fbffca, #baffbf, #a7efff, #ffabff);
">DR ★★★★★★</th>
              </tr>
              <tr>
                <th>Classification</th>
                <th>Aviation Battleship</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="modal--container--table--right container--flex--column">
        <div class="table--ship--stat">
          <table border="1">
            <tbody>
              <tr>
                <th class="stats">-</th>
                <th class="hp">Health</th>
                <th class="fp">Firepower</th>
                <th class="trp">Torpedo</th>
                <th class="avi">Aviation</th>
                <th class="aa">Anti Air</th>
                <th class="eva">Evasion</th>
                <th class="at">Armor Type</th>
              </tr>
              <tr>
                <th class="stats">Base</th>
                <th class="hp">10000</th>
                <th class="fp">100</th>
                <th class="trp">100</th>
                <th class="avi">100</th>
                <th class="aa">100</th>
                <th class="eva">100</th>
                <th class="at" rowspan="4">Medium</th>
              </tr>
              <tr>
                <th class="stats">Level 100</th>
                <th class="hp">10000</th>
                <th class="fp">100</th>
                <th class="trp">100</th>
                <th class="avi">100</th>
                <th class="aa">100</th>
                <th class="eva">100</th>
              </tr>
              <tr>
                <th class="stats">Level 120</th>
                <th class="hp">10000</th>
                <th class="fp">100</th>
                <th class="trp">100</th>
                <th class="avi">100</th>
                <th class="aa">100</th>
                <th class="eva">100</th>
              </tr>
              <tr>
                <th class="stats">Level 125</th>
                <th class="hp">10000</th>
                <th class="fp">100</th>
                <th class="trp">100</th>
                <th class="avi">100</th>
                <th class="aa">100</th>
                <th class="eva">100</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table--ship--equippable">
          <table border="1">
            <tbody>
              <tr>
                <th class="gear" colspan="4">Equippable</th>
              </tr>
              <tr>
                <th class="slot">Slots</th>
                <th class="eff">Efficiency</th>
                <th class="equip">Equippable</th>
                <th class="max">Max #</th>
              </tr>
              <tr>
                <th class="slot">1</th>
                <th class="eff">100% -> 100%</th>
                <th class="equip">BB Main Gun</th>
                <th class="max">1 -> 1</th>
              </tr>
              <tr>
                <th class="slot">2</th>
                <th class="eff">100% -> 100%</th>
                <th class="equip">BB Main Gun</th>
                <th class="max">1 -> 1</th>
              </tr>
              <tr>
                <th class="slot">3</th>
                <th class="eff">100% -> 100%</th>
                <th class="equip">BB Main Gun</th>
                <th class="max">1 -> 1</th>
              </tr>
              <tr>
                <th class="slot">Augment</th>
                <th class="eff">N/A</th>
                <th class="equip">Hammer, Dual Sword</th>
                <th class="max">1 -> 1</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  modalBoxContent.innerHTML = htmlContent;
  modalBox.innerHTML = '';
  modalBox.appendChild(modalBoxContent);
  modalBox.style.display = "flex";
  navBar.style.display = 'none';
}

function closeModalBox() {
  modalBox.style.display = "none";
  navBar.style.display = '';
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".root .shiplist .shiplist--container .shiplist--container--ship .shiplist--container--ship--card .shiplist--container--ship--card--img img").forEach((img) => {
    img.addEventListener("click", () => {
      const type = img.getAttribute("data-type");
      const index = img.getAttribute("data-index");
      openModalBox(type, index);  // Mengirim tipe dan indeks gambar
    });
  });
});