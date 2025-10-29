const cards = document.querySelectorAll("#cardList li");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
let current = 0;

function showCard(nextIndex) {
  const currentCard = cards[current];
  const nextCard = cards[nextIndex];

  nextCard.classList.add("incoming");

  setTimeout(() => {
    currentCard.classList.add("fade-out");
    nextCard.classList.add("fade-in");
  }, 50);

  setTimeout(() => {
    currentCard.classList.remove("active", "fade-out");
    nextCard.classList.remove("incoming", "fade-in");
    nextCard.classList.add("active");
    current = nextIndex;
  }, 800); // نفس مدة transition في CSS
}

nextBtn.addEventListener("click", () => {
  const nextIndex = (current + 1) % cards.length;
  showCard(nextIndex);
});

prevBtn.addEventListener("click", () => {
  const nextIndex = (current - 1 + cards.length) % cards.length;
  showCard(nextIndex);
});
