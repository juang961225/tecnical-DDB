import "../scss/style.scss";

const SELECTORS = {
  carousel: ".carousel",
  slide: ".slider__element",
  controls: ".slider__controls",
  dot: ".dot",
};

const CLASSES = {
  dotWrapper: "controls__wrapper",
  dot: "dot",
  active: "active",
};

const initCarousel = (element) => {
  const slides = Array.from(element.querySelectorAll(SELECTORS.slide));
  const controlsWrapper = element.querySelector(SELECTORS.controls);
  setCarouselDots(slides, controlsWrapper);
  setDotListeners(element);
  autorun(element);
};

const setCarouselDots = (slides, controlsWrapper) => {
  const dotsHTML = [];
  slides.forEach((slide, index) => {
    dotsHTML.push(getDotHTML());
    if (index !== 0) return;
    slide.classList.add(CLASSES.active);
  });
  controlsWrapper.innerHTML = dotsHTML.join("");
};

const getDotHTML = () => {
  const dot = `<li class="${CLASSES.dotWrapper}">
              <button class="${CLASSES.dot}">
              </button>
           </li>`;
  return dot;
};

const setDotListeners = (element) => {
  const dots = Array.from(element.querySelectorAll(SELECTORS.dot));
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      changeActiveSlide(element, index);
    });
  });
};

const changeActiveSlide = (carousel, slideIndex) => {
  const slides = Array.from(carousel.querySelectorAll(SELECTORS.slide));
  slides.forEach((slide) => {
    slide.classList.remove(CLASSES.active);
  });
  slides[slideIndex].classList.add(CLASSES.active);

  const dots = Array.from(carousel.querySelectorAll(SELECTORS.dot));
  dots.forEach((dot) => {
    dot.classList.remove(CLASSES.active);
  });
  dots[slideIndex].classList.add(CLASSES.active);
};

const autorun = (carousel, forceSlide = 0) => {
  const slides = Array.from(carousel.querySelectorAll(SELECTORS.slide));
  let currentSlide = forceSlide;
  let timer;
  const runTimer = () => {
    timer = window.setTimeout(() => {
      currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
      changeActiveSlide(carousel, currentSlide);
      runTimer();
    }, 8000);
  };
  runTimer();
  const dots = Array.from(carousel.querySelectorAll(SELECTORS.dot));
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearTimeout(timer);
      autorun(carousel, index);
    });
  });
};

const carousels = document.querySelectorAll(SELECTORS.carousel);

carousels.forEach((carousel) => {
  initCarousel(carousel);
});
