document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container-partners");
  const list = document.querySelector(".partners-list");
  let speed = 1;
  let position = 0;

 container.style.overflowX = "hidden";

  function moveElements() {
    const firstItem = list.firstElementChild;
    const firstItemRect = firstItem.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    position -= speed;
    list.style.transform = translateX(${position}px);

    if (firstItemRect.right < containerRect.left) {
      list.appendChild(firstItem);
      position += firstItem.offsetWidth + 30;
      list.style.transform = translateX(${position}px);
    }

    requestAnimationFrame(moveElements);
  }

  moveElements();
});