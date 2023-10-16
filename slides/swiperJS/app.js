const swiper = new Swiper('.container', {
  
  effect: "coverflow",
  grabCursos: true,
  centeredSlides: true,
  slidesPerView: 2,
  initialSlide:1,
  // loop: true,
  autoplay: true,
  keyboard: {
    enabled: true,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 1,
    depth:100,
    modifier: 7,
    clickable: true,
    
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }});