/* ----- Toggla mobil menyn via klick på hamburger knapp----- */
const hamburger_btn = document.querySelector(".hamburger");
const mobile_nav = document.querySelector(".navbar-mobile");

hamburger_btn.addEventListener("click", () => {
  hamburger_btn.classList.toggle("open");
  mobile_nav.classList.toggle("hidden");
});

/* ----- Contact menu button animation----- */
const contact_btn = document.querySelector("#contact_activated");
const contact_btn_arrow = document.querySelector("#arrow");

// Event listener när DOM har laddats
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    // TimeOut på 100 milisekunder innan eventet körs
    contact_btn_arrow.style.rotate = "90deg";
    contact_btn.style.backgroundColor = "#583b2d";
  }, 100);
});
