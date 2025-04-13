document.querySelectorAll(".open-popup").forEach(button => {
    button.addEventListener("click", () => {
        const popupId = button.getAttribute("data-popup");
        const popup = document.getElementById(popupId);
        popup.style.display = "flex";
    });
});

document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const popup = btn.closest(".popup");
        popup.classList.add("hide");
        setTimeout(() => {
            popup.style.display = "none";
            popup.classList.remove("hide");
        }, 300); // Matchar fadeOut-animation
    });
});
// Klick utanför popup-content stänger popupen
document.querySelectorAll(".popup").forEach(popup => {
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.classList.add("hide");
        setTimeout(() => {
          popup.style.display = "none";
          popup.classList.remove("hide");
        }, 300);
      }
    });
  });
  // Stäng popup med ESC-tangenten
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".popup").forEach(popup => {
        if (popup.style.display === "flex") {
          popup.classList.add("hide");
          setTimeout(() => {
            popup.style.display = "none";
            popup.classList.remove("hide");
          }, 300);
        }
      });
    }
  });