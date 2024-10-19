// COMMENT
function addComment() {
  let name = document.getElementById("name").value;
  let comment = document.getElementById("comment").value;

  const commentList = document.getElementById("comment--list");

  const div = document.createElement("div");
  commentList.append(div);

  const commentName = document.createElement("h2");
  commentName.textContent = name;

  const commentValue = document.createElement("h3");
  commentValue.textContent = comment;

  div.append(commentName);
  div.append(commentValue);
  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
}


// POPUP
function createPopup(id) {
    let popupNode = document.querySelector(id);
    let overlay = popupNode.querySelector(".overlay");
    let closeBtn = popupNode.querySelector(".close--btn");   


    function openPopup() {
      popupNode.classList.add("active");
    }
    function closePopup() {
      popupNode.classList.remove("active");
    }

    overlay.addEventListener("click", closePopup);
    closeBtn.addEventListener("click", closePopup);

    return openPopup;
}

let popup = createPopup("#popup");
document.querySelector("#open--popup").addEventListener("click", popup);

// CHANGE BACKGROUNDS
// let bgIMG = [];
// for (let i = 0; i < 2; i++){
//   bgIMG.push(`.src/bgs/bg${i}.jpg`);
// }

// function changeBackground() {
//   var i = Math.floor((Math.random() * 4));
//   document.body.style.backgroundImage = 'url("' + bgIMG[i] + '")';
//   window.setInterval(changeBackground, 5000);
// }