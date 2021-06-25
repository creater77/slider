$(document).ready(function() {
  $('.slider').slick({
    arrows: true,
    appendArrows: '.tr',
    nextArrow: '<td class="right"><i class="fa fa-angle-right" aria-hidden="true"></i></td>',
    prevArrow: '<td class="left"><i class="fa fa-angle-left" aria-hidden="true"></i></td>',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    infinite: false,
    asNavFor: ".sliderbig",
    swipe: false,
    initialSlide: 0,
    variableWidth: true,
  })
  .on('click', function(event, slick, currentSlide, nextSlide) {
    let slides = $('slider slick-slide');
    for(let i = 0; i < slides.length; i++) {
      console.log(slides[i]);
    }
  })

  $('.sliderbig').slick({
      asNavFor: ".slider",
      dots: false,
      arrows: false,
      slidesToShow: 1,
      infinite: false,
      speed: 500,
      swipe: false,
      fade: true,
    })
    .on('afterChange', function(event, slick, currentSlide, nextSlide) {
      let num = currentSlide + 1;
      $('.number').html(num);
    })
});
