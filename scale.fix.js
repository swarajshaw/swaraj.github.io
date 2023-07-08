(function (document) {
  var metas = document.getElementsByTagName("meta"),
    changeViewportContent = function (content) {
      for (var i = 0; i < metas.length; i++) {
        if (metas[i].name == "viewport") {
          metas[i].content = content;
        }
      }
    },
    initialize = function () {
      changeViewportContent(
        "width=device-width, minimum-scale=1.0, maximum-scale=1.0"
      );
    },
    gestureStart = function () {
      changeViewportContent(
        "width=device-width, minimum-scale=0.25, maximum-scale=1.6"
      );
    },
    gestureEnd = function () {
      initialize();
    };

  if (navigator.userAgent.match(/iPhone/i)) {
    initialize();

    document.addEventListener("touchstart", gestureStart, false);
    document.addEventListener("touchend", gestureEnd, false);
  }
})(document);

// Cloud Portfolio Carousel

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("show");
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("show");
  evt.currentTarget.classList.add("active");
}

// Get the form, button, and images
const form = document.getElementById("myForm1");
const closeButton = document.querySelector(".close-button");
const images = document.querySelectorAll(".carousel-slide img");
const openButton = document.querySelector(".open-button");

// When an image or the "Click to Enlarge Image" button is clicked, open the form
images.forEach((image) => {
  image.addEventListener("click", () => {
    openForm();
  });
});

openButton.addEventListener("click", () => {
  openForm();
});

// When the close button is clicked, close the form
closeButton.addEventListener("click", () => {
  closeForm();
});

// When the user clicks anywhere outside of the form, close it
window.addEventListener("click", (event) => {
  if (event.target == form) {
    closeForm();
  }
});

// Initialize the carousel
let slideIndex = 1;
showSlides(slideIndex);

// Move to the previous or next slide
function changeSlide(n) {
  showSlides((slideIndex += n));
  if (slideIndex === images.length + 1 && n > 0) {
    // If the last slide is reached and moving forward,
    // break the loop
    return;
  }
  if (slideIndex === 0 && n < 0) {
    // If the first slide is reached and moving backward,
    // go to the last slide
    slideIndex = images.length;
  }
}

// Show the slide with the given index
function showSlides(n) {
  const slides = document.getElementsByClassName("carousel-slide");
  if (n > slides.length) {
    slideIndex = 1; // Reset to the first slide
  }
  if (n < 1) {
    slideIndex = slides.length; // Set to the last slide
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function openForm(formId) {
  const form = document.getElementById(formId);
  if (form) {
    form.style.display = "block";
    const formContainer = form.querySelector(".form-container");
    if (formContainer) {
      formContainer.style.display = "block";
    }
  }
}

function closeForm(formId) {
  const form = document.getElementById(formId);
  if (form) {
    form.style.display = "none";
    const formContainer = form.querySelector(".form-container");
    if (formContainer) {
      formContainer.style.display = "none";
    }
  }
}
