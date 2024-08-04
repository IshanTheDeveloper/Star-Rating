const stars = document.querySelectorAll(".star");
const emoji = document.getElementById("emoji");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    updateStars(index + 1);
  });
});

function updateStars(rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.innerText = "⭐";
    } else {
      star.innerHTML = "&#9734";
    }
  });

  switch (rating) {
    case 1:
      emoji.src = "sad.png";
      break;
    case 2:
      emoji.src = "sad2.jpg";
      break;
    case 3:
      emoji.src = "sad3.png";
      break;
    case 4:
      emoji.src = "happy (2).webp";
      break;
    case 5:
      emoji.src = "happy.webp";
      break;
    default:
      emoji.src = "";
  }
}
