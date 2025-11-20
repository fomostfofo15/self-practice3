const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");
const popup = document.getElementById("popup");

// เปิด popup
openBtn.addEventListener("click", () => {
    popup.style.display = "flex";
});

// ปิด popup
closeBtn.addEventListener("click", () =>{
    popup.style.display = "none";
});

//คลิกนอกกล่อง = ปิด popup
popup.addEventListener("click", (e) => {
    if (e.target === popup){
        popup.style.display = "none";
    }
});