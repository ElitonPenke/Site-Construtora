
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    let currentIndex = 0;

    function updateCarousel() {
        cards.forEach((card, index) => {
            card.classList.remove("active", "prev", "next");

            if (index === currentIndex) {
                card.classList.add("active");
            } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
                card.classList.add("prev");
            } else if (index === (currentIndex + 1) % cards.length) {
                card.classList.add("next");
            }
        });
    }

    document.querySelector(".control.left").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    });

    document.querySelector(".control.right").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    });

    updateCarousel(); // Inicia o carrossel na posição correta
});

