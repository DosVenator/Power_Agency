const body = document.querySelector('body');

const swiperTwo = new Swiper('.swiper_2', {
    slidesPerView: 5,
    watchSlidesProgress: true,
});
const swiperOne = new Swiper('.swiper_1', {
    thumbs: {
        swiper: swiperTwo,
      },
});
const swiperThree = new Swiper('.swiper_3', {
    watchSlidesProgress: true,
    slidesPerView: 4,
    loop: true,
   
});