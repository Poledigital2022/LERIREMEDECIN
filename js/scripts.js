$(document).ready(function () {
  $("#closeBtn").click(function () {
    $(".header_media").removeClass("open");
  });
  $("#openBtn").click(function () {
    $(".header_media").addClass("open");
  });
  $(".vod_img2").click(function () {
    $(".vod_play_box").addClass("etat2");
    startVideo();
  });
  // var state1 = false;
  $("#switch").click(function () {
    if ($('#switch').is(':checked')) {
      // checked
      $(".percentage").text("60%");
      $('.circle').attr("stroke-dasharray", "0,100");
      $('.circle').css("animation", "");
      $(".percentage2").text("60%");
      $('.circle2').attr("stroke-dasharray", "0,100");
      $('.circle2').css("animation", "");
      setTimeout(function () {
        $('.circle').attr("stroke-dasharray", "60,100");
        $('.circle').css("animation", "progress 1s ease-out forwards");
        $('.circle2').attr("stroke-dasharray", "60,100");
        $('.circle2').css("animation", "progress 1s ease-out forwards");
      }, 500);
      $("#btndon").attr("href", "https://don.leriremedecin.org/jedonne-ilsrient-2021ent");
    } else {
      // unchecked

      $(".percentage").text("66%");
      $('.circle').attr("stroke-dasharray", "0,100");
      $('.circle').css("animation", "");
      $(".percentage2").text("66%");
      $('.circle2').attr("stroke-dasharray", "0,100");
      $('.circle2').css("animation", "");
      setTimeout(function () {
        $('.circle').attr("stroke-dasharray", "66,100");
        $('.circle').css("animation", "progress 1s ease-out forwards");
        $('.circle2').attr("stroke-dasharray", "66,100");
        $('.circle2').css("animation", "progress 1s ease-out forwards");
      }, 500);
      $("#btndon").attr("href", "https://don.leriremedecin.org/jedonne-ilsrient-2021");
    }

  });

  $('.section3_slider_holder').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    arrow: true,
    // initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true
        }
      }
    ]
  });
  $('.section3_slider_holder').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var CurrentSlideDom = $(slick.$slides.get(currentSlide));
    var NextSlideDom = $(slick.$slides.get(nextSlide));
    // console.log($(NextSlideDom).find(".target").data("prix"));
    if ($(NextSlideDom).find(".target").data("img") == 1) {
      $(".section3").addClass("s1");
      $(".section3").removeClass("s2");
      $(".section3").removeClass("s3");
      $(".section3").removeClass("s4");
      $(".section3").removeClass("s5");
    }
    else if ($(NextSlideDom).find(".target").data("img") == 2) {
      $(".section3").addClass("s2");
      $(".section3").removeClass("s1");
      $(".section3").removeClass("s3");
      $(".section3").removeClass("s4");
      $(".section3").removeClass("s5");
    }
    else if ($(NextSlideDom).find(".target").data("img") == 3) {
      $(".section3").addClass("s3");
      $(".section3").removeClass("s1");
      $(".section3").removeClass("s2");
      $(".section3").removeClass("s4");
      $(".section3").removeClass("s5");
    }
    else if ($(NextSlideDom).find(".target").data("img") == 4) {
      $(".section3").addClass("s4");
      $(".section3").removeClass("s1");
      $(".section3").removeClass("s3");
      $(".section3").removeClass("s2");
      $(".section3").removeClass("s5");
    }
    else if ($(NextSlideDom).find(".target").data("img") == 5) {
      $(".section3").addClass("s5");
      $(".section3").removeClass("s1");
      $(".section3").removeClass("s3");
      $(".section3").removeClass("s4");
      $(".section3").removeClass("s2");
    } else {
      // $("#montant4").focus();
    }
  });

  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  viewport1 = true;
  var viewport2 = true;
  var viewport3 = true;
  $(window).on("resize scroll", function () {
    //Code here
    if ($('.vod_img1').isInViewport() && viewport1 === true) {
      viewport1 = false;
      setTimeout(function () {
        function numberWithSpaces(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }
        $('.counter').each(function () {
          var $this = $(this),
            countTo = $this.attr('data-count');

          $({ countNum: $this.text() }).animate({
            countNum: countTo
          },
            {
              duration: 3000,
              easing: 'linear',
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(numberWithSpaces(this.countNum));
              }
            });
        });
      }, 500);
    }
    if ($(".sec2_holder1_text h4").isInViewport()) {
      $('.sec2_holder1_media .img1').removeClass('not_visited');
    }
    if ($(".sec2_holder1_text h4").isInViewport()) {
      $('.sec2_holder1_media .img2').removeClass('not_visited');
    }
    if ($(".sec2_holder2_text p").isInViewport()) {
      $('.sec2_holder2_media .img1').removeClass('not_visited');
    }

  });

  if ($('#switch').is(':checked')) {
    // checked
    $(".percentage").text("60%");
    $('.circle').attr("stroke-dasharray", "0,100");
    $('.circle').css("animation", "");
    $(".percentage2").text("60%");
    $('.circle2').attr("stroke-dasharray", "0,100");
    $('.circle2').css("animation", "");
    setTimeout(function () {
      $('.circle').attr("stroke-dasharray", "60,100");
      $('.circle').css("animation", "progress 1s ease-out forwards");
      $('.circle2').attr("stroke-dasharray", "60,100");
      $('.circle2').css("animation", "progress 1s ease-out forwards");
    }, 500);
    $("#btndon").attr("href", "https://don.leriremedecin.org/jedonne-ilsrient-2021ent");
  } else {
    // unchecked

    $(".percentage").text("66%");
    $('.circle').attr("stroke-dasharray", "0,100");
    $('.circle').css("animation", "");
    $(".percentage2").text("66%");
    $('.circle2').attr("stroke-dasharray", "0,100");
    $('.circle2').css("animation", "");
    setTimeout(function () {
      $('.circle').attr("stroke-dasharray", "66,100");
      $('.circle').css("animation", "progress 1s ease-out forwards");
      $('.circle2').attr("stroke-dasharray", "66,100");
      $('.circle2').css("animation", "progress 1s ease-out forwards");
    }, 500);
    $("#btndon").attr("href", "https://don.leriremedecin.org/jedonne-ilsrient-2021");
  }
  $('a[data-set="gerardJugnot"]').click(function () {
    $('.section3_slider_holder').slick('slickGoTo', 0);
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".section3").offset().top - 100
    }, 2000);
  });

  $('a[data-set="annyDuperey"]').click(function () {
    $('.section3_slider_holder').slick('slickGoTo', 1);
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".section3").offset().top - 100
    }, 2000);
  });

  $('a[data-set="françoisXavierDemaison"]').click(function () {
    $('.section3_slider_holder').slick('slickGoTo', 2);
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".section3").offset().top - 100
    }, 2000);
  });

  $('a[data-set="saraGiraudeau"]').click(function () {
    $('.section3_slider_holder').slick('slickGoTo', 3);
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".section3").offset().top - 100
    }, 2000);
  });

  $('a[data-set="redaKateb"]').click(function () {
    $('.section3_slider_holder').slick('slickGoTo', 4);
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".section3").offset().top - 100
    }, 2000);
  });
});