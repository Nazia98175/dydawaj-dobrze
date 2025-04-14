document.querySelectorAll(".btn-view").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Szczegóły oferty wkrótce...");
  });
});

export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
