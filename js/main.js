$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
    });
});



$('.variable-width').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: true,
    variableWidth: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });

$("#slideDownBtn1").click(function(){
    $(".faq-t1").slideDown();
    $(".max-btn1").addClass("max-btn1-hide");
});

$("#slideUpBtn1").click(function(){
  $(".faq-t1").slideUp();
  $(".max-btn1").removeClass("max-btn1-hide");
});

$("#slideDownBtn2").click(function(){
  $(".faq-t2").slideDown();
  $(".max-btn2").addClass("max-btn2-hide");
});

$("#slideUpBtn2").click(function(){
$(".faq-t2").slideUp();
$(".max-btn2").removeClass("max-btn2-hide");
});

$("#slideDownBtn3").click(function(){
  $(".faq-t3").slideDown();
  $(".max-btn3").addClass("max-btn3-hide");
});

$("#slideUpBtn3").click(function(){
$(".faq-t3").slideUp();
$(".max-btn3").removeClass("max-btn3-hide");
});

$("#slideDownBtn4").click(function(){
  $(".faq-t4").slideDown();
  $(".max-btn4").addClass("max-btn4-hide");
});

$("#slideUpBtn4").click(function(){
$(".faq-t4").slideUp();
$(".max-btn4").removeClass("max-btn4-hide");
});