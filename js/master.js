// Check If Ther Is Locla Storage Color Option
let mainColors = localStorage.getItem("color_option");
let settingsLi = document.querySelectorAll(".colors-list li");

if (mainColors !== null) {
  // Add The Chosin
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color_option")
  );

  // Remove Active Clas
  settingsLi.forEach((li) => {
    li.classList.remove("active");
  });
  // Loop On Li To Check For The Current Lockal Storage Color To Add Active Class
  settingsLi.forEach((li) => {
    if (li.dataset.color === mainColors) {
      li.classList.add("active");
    }
  });
}
// Random Background Option
let backgroundOption = true;
//

// Variable To Controle The Interval For Background
let backgroundInterval;
//

// check if Yher is Local Storag For Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Bakcground Storage Is Not Empty
if (backgroundLocalItem !== null) {
  //

  if (backgroundLocalItem === "true") {
    backgroundOption = true;
  } else {
    // \

    backgroundOption = false;
  }

  // Remove Class Active
  document.querySelectorAll(".random-backgrounds span").forEach((span) => {
    //
    span.classList.remove("active");
    //
  });
  //
  if (backgroundLocalItem === "true") {
    //
    document.querySelector(".yes").classList.add("active");
    //
  } else {
    //
    document.querySelector(".no").classList.add("active");
  }
}

// Start Option Box Settings
//
// Toggle Spin Class On Item
document.querySelector(".fa-gear").addEventListener("click", function () {
  // Toggle Class Spin To The Icon
  this.classList.toggle("fa-spin");

  // Toggle Class Open To Settings
  document.querySelector(".settings-box").classList.toggle("open");

  // Change Toggle BackGround
  document
    .querySelector(".toggle-settings")
    .classList.toggle("backgroundColor");
});
//

//  Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop In All Li
colorsLi.forEach((li) => {
  // Click On All Li
  li.addEventListener("click", (e) => {
    // Sett Color On Root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    // Add Color To LockalStorage
    localStorage.setItem("color_option", e.target.dataset.color);

    handleActive(e);
    //
  });
  //
});

// Switch Background Options
const randomBackground = document.querySelectorAll(".random-backgrounds span");

// Loop In All Spans
randomBackground.forEach((span) => {
  // Click On All Spans
  span.addEventListener("click", (e) => {
    //
    handleActive(e);

    if (e.target.dataset.background === "yes") {
      //

      backgroundOption = true;

      randomizeImgs();

      localStorage.setItem("background_option", true);

      //
    } else {
      //

      backgroundOption = false;

      clearInterval(backgroundInterval);

      localStorage.setItem("background_option", false);

      //
    }
  });
});
//

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");
let arrayOfImages = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
//

// function to Ramdomize Imgs
function randomizeImgs() {
  if (backgroundOption === true) {
    //
    backgroundInterval = setInterval(() => {
      // Get Random Number For The Image
      let randomNumber = Math.floor(Math.random() * arrayOfImages.length);

      // Change Bakcground Image
      landingPage.style.backgroundImage =
        'url("imgs/' + arrayOfImages[randomNumber] + '")';
      // Get A Random Number
    }, 1000);
    //
  }
  //
}
randomizeImgs();

// About Us
// Skill Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  // Skills Offset Top
  let skillsOfsetTop = ourSkills.offsetTop;

  //Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window Scroll Top
  let windowScrollTop = this.scrollY;

  if (windowScrollTop >= skillsOfsetTop + skillsOuterHeight - windowHeight) {
    //

    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );

    allSkills.forEach((spanOfProgress) => {
      //
      spanOfProgress.style.width = spanOfProgress.dataset.progress;
    });
  }
};

//

// Creat Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");
//
ourGallery.forEach((img) => {
  //
  img.addEventListener("click", (e) => {
    //
    // Creat Over Lay Element
    let overLay = document.createElement("div");

    // Add Class To Over LAy
    overLay.className = "popup-overlay";

    // Appent OverLay To Body
    document.body.appendChild(overLay);

    // Creat Popoup It Self
    let popupBox = document.createElement("div");

    // Add Class TO popup Box
    popupBox.className = "popup-box";

    //  Creat The Image
    let popupImage = document.createElement("img");

    // SEtt Image Src
    popupImage.src = img.src;

    // Add Imge To Popup Box
    popupBox.appendChild(popupImage);

    // Add Popup Box To Body
    document.body.appendChild(popupBox);

    if (img.alt !== null) {
      // Creat Heading
      let imgHeading = document.createElement("h3");

      // Creat Text For Heading
      let headingTextForImg = document.createTextNode(img.alt);

      // Append The Text To Heding
      imgHeading.appendChild(headingTextForImg);

      // Append The Heading To The Popup Box
      popupBox.prepend(imgHeading);
    }
    //

    //  Creat Close Button
    let closButton = document.createElement("span");

    // The Close Button Text
    let closeButtonText = document.createTextNode("X");

    // Append Text To Close Button
    closButton.appendChild(closeButtonText);

    // Add Clas To Close Button
    closButton.className = "close-button";

    // Add Close Button To The Popup Box
    popupBox.appendChild(closButton);

    //
  });

  //
});

// Close Popup
document.addEventListener("click", function (e) {
  //

  if (e.target.className == "close-button") {
    // Remove The Currint Popup
    e.target.parentNode.remove();

    // Remove OverLay
    document.querySelector(".popup-overlay").remove();

    //
  } else if (e.target.className == "popup-overlay") {
    e.target.remove();

    // Remove OverLay
    document.querySelector(".popup-box").remove();
  }
  //

  //
});

// Bullits Adjustmint

// Select All Bullets
const bullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Bullets
const links = document.querySelectorAll(".links li");

// Function To Sections
function goToSections(elements) {
  //
  elements.forEach((element) => {
    //
    element.addEventListener("click", (e) => {
      //
      e.preventDefault();

      document.querySelector(e.target.dataset.section).scrollIntoView({
        //
        behavior: "smooth",
      });

      //
    });

    //
  });

  //
}
goToSections(bullets);
goToSections(links);

// Handle Active Class State
function handleActive(ev) {
  // Remove Active Clas
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    //

    element.classList.remove("active");
    //
  });

  // Add Class Active To The Target
  ev.target.classList.add("active");

  //
}

// Logic For Bullets Option

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {
  //
  bulletsSpan.forEach((span) => {
    //
    span.classList.remove("active");
    //
  });
  //
  if (bulletLocalItem === "yes") {
    //
    bulletsContainer.style.display = "block";
    document.querySelector(".bullets-option .yes").classList.add("active");
    //
  } else {
    //
    bulletsContainer.style.display = "none";
    document.querySelector(".bullets-option .no").classList.add("active");
    //
  }
  //
}

bulletsSpan.forEach((span) => {
  //
  span.addEventListener("click", (e) => {
    //
    handleActive(e);
    //
    if (span.dataset.display === "yes") {
      //
      bulletsContainer.style.display = "block";
      //
      localStorage.setItem("bullets_option", e.target.dataset.display);
      //
    } else {
      //
      bulletsContainer.style.display = "none";
      //
      localStorage.setItem("bullets_option", e.target.dataset.display);
      //
    }
    //
    //
  });

  //
});

//
// Reset Button Adjustment
document.querySelector(".reset-options").onclick = function () {
  //
  localStorage.removeItem("color_option");
  localStorage.removeItem("background_option");
  localStorage.removeItem("bullets_option");

  window.location.reload();
  //
};

// Toggle Menu Adjyst

let toggleMenu = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");
// Add Active Class And Open Class
toggleMenu.onclick = function (e) {
  //
  // Stop Propagation
  e.stopPropagation();

  this.classList.toggle("menu-active");

  tLinks.classList.toggle("open");
};

document.addEventListener("click", function (e) {
  //
  if (e.target !== toggleMenu && e.target !== tLinks) {
    //
    if (tLinks.classList.contains("open")) {
      //
      tLinks.classList.toggle("open");

      toggleMenu.classList.toggle("menu-active");
    }
  }
  //
});
