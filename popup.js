// Vänta tills allt i sidan har laddat
document.addEventListener('DOMContentLoaded', () => {
    // Alla knappar som öppnar popup
    const openButtons = document.querySelectorAll('.open-popup');
    // Alla popup-fönster
    const popups = document.querySelectorAll('.popup');
    // Alla stäng-knappar
    const closeButtons = document.querySelectorAll('.close-btn');

    // Öppna popup
    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            const popupId = button.getAttribute('data-popup');
            const popup = document.getElementById(popupId);
            if (popup) {
                popup.style.display = 'flex';
            }
        });
    });

    // Stäng popup (på klick på "×")
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.popup').style.display = 'none';
        });
    });

    // Stäng popup (om man klickar utanför popup-rutan)
    popups.forEach(popup => {
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.style.display = 'none';
            }
        });
    });
});