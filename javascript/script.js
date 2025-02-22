"use strict"; // strictmode on

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
  // OM elementen inte finns på sidan så kommer inte scriptet köras
  // (för att undvika error meddelanden på lvriga html filer dör elementen inte finns)
  if (!contact_btn || !contact_btn_arrow) {
    return;
  }

  // TimeOut på 100 milisekunder innan eventet körs
  setTimeout(() => {
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

//Fetch work- and educationdata fron JSON file and create HTML elements with the retrived data
fetch("../JSON/work.json") // Hämta JSON filen
  .then(function (response) {
    return response.json(); // Konvertera JSON filen
  })

  .then(function (data) {
    const workData = data.workExperience; // Samla jobbdatan i en workExperience array
    const educationData = data.education; // Samla utbildningsdata i en educcationData array

    // hämta container från HTML
    const work_container = document.querySelector(".work-experience-container");
    // OM elementet inte finns på sidan så kommer inte scriptet köras
    // (för att undvika error meddelanden på övriga html filer där elementen inte fanns)
    if (!work_container) {
      return;
    }

    // Loopa igenom workData arrayen (För varje jobb i arrayen så skapa ett div element).
    workData.forEach((job) => {
      // Skapa en div
      const jobDiv = document.createElement("div");
      // lägg till class för att styla med CSS
      jobDiv.classList.add("bullet");

      // Lägg till HTML element i jobDiv
      jobDiv.innerHTML = `  
          <div class="headline">
            <h3>${job.work_title}</h3>
            <h3 class="opacity">${job.dates}</h3>
          </div>
          <hr />
          <h4>${job.workplace}</h4>
          <p>${job.description}</p> `;

      // Lägg till jobDiv med alla element i contaiern
      work_container.appendChild(jobDiv);
    });

    // Hämta education container
    const education_container = document.querySelector(".education-container");

    // OM elementet inte finns på sidan så kommer inte scriptet köras
    // (för att undvika error meddelanden på övriga html filer där elementen inte fanns)
    if (!education_container) {
      return;
    }

    // Loopa igenom educationData arrayen (För varje utbildning i arrayen så skapa ett div element).
    educationData.forEach((education) => {
      // Skapa en div
      const educationDiv = document.createElement("div");
      //Lägg till class för att style med CSS
      educationDiv.classList.add("bullet");
      // Lägg till HTML element i educationDiv
      educationDiv.innerHTML = `
      <div class="headline">
              <h3>${education.program}</h3>
              <h3 class="opacity">${education.year}</h3>
            </div>
            <hr />
            <h4>${education.school}</h4>
            <p>${education.description}
            </p>
      `;

      // Lägg till alla skapade education divs i education containern
      education_container.appendChild(educationDiv);
    });
  });
