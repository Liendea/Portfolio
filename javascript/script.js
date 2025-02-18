/* ----- Toggla mobil menyn via klick på hamburger knapp----- */
const hamburger_btn = document.querySelector(".hamburger");
const mobile_nav = document.querySelector(".navbar-mobile");
const body = document.querySelector("body");

hamburger_btn.addEventListener("click", () => {
  hamburger_btn.classList.toggle("open");
  mobile_nav.classList.toggle("hidden");

  // Add no scroll to body when mobile navmeny is open
  if (!mobile_nav.classList.contains("hidden")) {
    body.style.position = "fixed";
    body.style.overflow = "hidden";
  } else {
    body.style.removeProperty("position");
    body.style.removeProperty("overflow");
  }
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

// Automatically close mobie nav meny when window is resized
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    mobile_nav.classList.add("hidden");
    hamburger_btn.classList.remove("open");

    // Add no scroll to body when mobile navmeny is open
    if (!mobile_nav.classList.contains("hidden")) {
      body.style.position = "fixed";
      body.style.overflow = "hidden";
    } else {
      body.style.removeProperty("position");
      body.style.removeProperty("overflow");
    }
  }
});
