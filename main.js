/******************
  Header Menu
******************/
const menu = document.querySelector("header #navbar .menu");
const btn = document.getElementById("mobileBtn");

// Menu toggle
btn.addEventListener("click", () => {
  if (menu.classList.contains("menu")) {
    menu.classList.toggle("mobile");
  }
});

window.onscroll = () => scrollFunction();

const scrollFunction = () => {
  const navbar = document.getElementById("navbar");
  const logo = document.querySelector("#navbar .logo");
  const ctaBtn = document.querySelector("#navbar .menu .cta");

  if (window.scrollY > 100) {
    navbar.style.cssText = `
      position: fixed;
      max-width: 100%;
      width: 100%;
      background: linear-gradient(180deg, rgba(189,31,23,1) 28%, rgba(165,29,19,1) 60%, rgba(142,27,15,1) 100%);
      overflow: hidden;
      transition: all 0.3s ease; 
    `;

    if (window.innerWidth < 450) {
      logo.style.marginLeft = "1.5rem";
      ctaBtn.style.marginRight = "1.5rem";
      btn.style.marginRight = "1.5rem";
    } else {
      logo.style.marginLeft = "2.5rem";
      ctaBtn.style.marginRight = "2.5rem";
      btn.style.marginRight = "2.5rem";
    }
  } else {
    navbar.style.cssText = `
      position: unset;
      padding: 0 2rem;
      background: transparent;
      transition: all 0.3s ease; 
    `;

    logo.style.marginLeft = "0";
    ctaBtn.style.marginRight = "0";
    btn.style.marginRight = "0";
  }
};

/******************
  About Tab
******************/
const openTab = (evt, tabId) => {
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.style.display = "none";
  });

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  document.getElementById(tabId).style.display = "block";
  evt.currentTarget.classList.add("active");
};

/******************
  Food Item Area 
******************/
const foodItemSwiper = new Swiper(".itemsSwiper", {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".items-button-next",
    prevEl: ".items-button-prev",
  },
  autoplay: true,
  breakpoints: {
    760: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});

/******************
  Book Table Area 
******************/
const inputDate = document.getElementById("dateInput");
const dateIcon = document.querySelector(".date-input .icon");
const inputNumber = document.getElementById("NumberInput");
const inputUp = document.querySelector(".number-input .arrows .up");
const inputDown = document.querySelector(".number-input .arrows .down");

if (!HTMLInputElement.prototype.showPicker) {
  dateIcon.addEventListener("click", () => inputDate.showPicker());
}

inputUp.addEventListener("click", () => {
  const max = parseInt(inputNumber.getAttribute("max"), 10);
  const currentValue = parseInt(inputNumber.value, 10);
  if (currentValue < max) {
    inputNumber.value = currentValue + 1;
  }
});

inputDown.addEventListener("click", () => {
  const min = parseInt(inputNumber.getAttribute("min"), 10);
  const currentValue = parseInt(inputNumber.value, 10);
  if (currentValue > min) {
    inputNumber.value = currentValue - 1;
  }
});

/******************
  Testimonial Area 
******************/
const testimonialSwiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  parallax: true,
});

const videoContainers = document.querySelectorAll("#testimonial .video");
const playIcon = '<i class="fa-solid fa-circle-play"></i>';
const pauseIcon = '<i class="fa-solid fa-circle-pause"></i>';

videoContainers.forEach((container) => {
  const video = container.querySelector("#testimonial video");
  const videoBtn = container.querySelector("#testimonial .videoBtn");

  videoBtn.innerHTML = playIcon;

  videoBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      videoBtn.innerHTML = pauseIcon;
      videoBtn.classList.add("hide");
    } else {
      video.pause();
      videoBtn.innerHTML = playIcon;
      videoBtn.classList.remove("hide");
    }
  });

  video.addEventListener("ended", () => {
    videoBtn.innerHTML = playIcon;
    videoBtn.classList.remove("hide");
  });

  container.addEventListener("mouseenter", () => {
    if (!video.paused) {
      videoBtn.classList.remove("hide");
    }
  });

  container.addEventListener("mouseleave", () => {
    if (!video.paused) {
      videoBtn.classList.add("hide");
    }
  });
});
