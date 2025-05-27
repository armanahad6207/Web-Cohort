function openFeature() {
  const selectAllCard = document.querySelectorAll(".card");
  const selectOpenCard = document.querySelectorAll(".openCard");
  const closeBtn = document.querySelectorAll(".openCard span");

  selectAllCard.forEach((elem) => {
    elem.addEventListener("click", () => {
      selectOpenCard[elem.id].style.display = "block";
    });
  });

  closeBtn.forEach((close) => {
    close.addEventListener("click", (item) => {
      selectOpenCard[close.id].style.display = "none";
    });
  });
}

openFeature();
