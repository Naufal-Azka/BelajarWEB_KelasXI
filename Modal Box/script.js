function createPopup(id) {
    let popupNode = document.querySelector(id);
    let overlay = popupNode.querySelector(".modal--overlay");
    let closeBtn = popupNode.querySelector(".close--modal");   


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
let popup = createPopup("#modal");
document.querySelector("#open--modal").addEventListener("click", popup);   