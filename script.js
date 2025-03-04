"use strict"; // strictmode on

/* ----- Mobile menu toggle when click on the hamburger button ----- */
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

// Event listener when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // IF element don't exist on the page, the script wont run.
  // (to avoid error message on the other html pages where the element dont exist)
  if (!contact_btn || !contact_btn_arrow) {
    return;
  }

  // TimeOut on 100 milli seconds before the event runs
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

//Fetch work- and educationdata from JSON file and create HTML elements with the retrived data
fetch("data.json") // fetch JSON filen
  .then(function (response) {
    return response.json(); // Convert JSON file
  })

  .then(function (data) {
    const workData = data.workExperience; // Collect work data in an workExperience array
    const educationData = data.education; // Collect education data in an educationData array

    // Fetch container from HTML
    const work_container = document.querySelector(".work-experience-container");
    // IF element don't exist on the page, the script wont run.
    // (to avoid error message on the other html pages where the element dont exist)
    if (!work_container) {
      return;
    }

    // Loop though workData array (For each job in the array, create a div element).
    workData.forEach((job) => {
      // Create a div
      const jobDiv = document.createElement("div");
      // Add class for styling with CSS
      jobDiv.classList.add("bullet");

      // Add HTML element in the jobDiv
      jobDiv.innerHTML = `  
          <div class="headline">
            <h3>${job.work_title}</h3>
            <h3 class="opacity">${job.dates}</h3>
          </div>
          <hr />
          <h4>${job.workplace}</h4>
          <p>${job.description}</p> `;

      // Append jobDiv to container
      work_container.appendChild(jobDiv);
    });

    // Fetch education container
    const education_container = document.querySelector(".education-container");

    // IF element don't exist on the page, the script wont run.
    // (to avoid error message on the other html pages where the element dont exist)
    if (!education_container) {
      return;
    }

    // Loope through the educationData array (For each education inthe array, create a div element).
    educationData.forEach((education) => {
      // Create a div
      const educationDiv = document.createElement("div");
      // Add class for stuling with CSS
      educationDiv.classList.add("bullet");
      // Add HTML elements to educationDiv
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

      // Append educationDiv to container
      education_container.appendChild(educationDiv);
    });
  });
