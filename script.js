const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".header nav");

toggle?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});


const compare = document.getElementById("compare");

let dragging = false;

function moveComparison(x) {

  const rect = compare.getBoundingClientRect();

  const percentage = Math.max(
    0,
    Math.min(
      100,
      ((x - rect.left) / rect.width) * 100
    )
  );

  compare.style.setProperty(
    "--split",
    percentage + "%"
  );
}

compare?.addEventListener("pointerdown", event => {

  dragging = true;

  compare.setPointerCapture?.(
    event.pointerId
  );

  moveComparison(event.clientX);

});

compare?.addEventListener("pointermove", event => {

  if (dragging) {
    moveComparison(event.clientX);
  }

});

["pointerup", "pointercancel"].forEach(eventName => {

  compare?.addEventListener(
    eventName,
    () => {
      dragging = false;
    }
  );

});


const form = document.getElementById("form");
const toast = document.getElementById("toast");

form?.addEventListener("submit", event => {

  event.preventDefault();

  toast.classList.add("show");

  form.reset();

  setTimeout(() => {

    toast.classList.remove("show");

  }, 3500);

});