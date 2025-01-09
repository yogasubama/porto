document.addEventListener("DOMContentLoaded", () => {
    const openPopupBtn = document.querySelector(".open-popup-btn");
    const closePopupBtn = document.querySelector(".close-btn");
    const popup = document.getElementById("popup");
  
    openPopupBtn.addEventListener("click", () => {
      popup.style.display = "flex";
    });
  
    closePopupBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  });
  