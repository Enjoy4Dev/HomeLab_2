

$(window).on('load', function () {
    var preloader_wrap = $('#preloader-wrap'),
        preloader = $('#preloader');
    preloader.fadeOut();
    preloader_wrap.delay(0).fadeOut('fast');
});

$(document).ready(function(){
  $('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed: 5000,
/*  dots:true,*/
  arrows:true,
  adaptiveHeight:false,
  });

  $('.slider2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  adaptiveHeight:false,
  arrows:true,
  prevArrow: $('.arrow-left'),
  nextArrow: $('.arrow-right'),
  responsive: [
    {
      breakpoint: 932,
      settings: {
        slidesToShow: 1,
        adaptiveHeight:true,
      }
    }
  ]

    })



    $(function() {
      var pull        = $('.menu-trigger');
          menu        = $('nav ul');
          menuHeight  = menu.height();

      $(pull).on('click', function(e) {
        e.preventDefault();
        /*menu.slideToggle(700);*/
        $('ul.clearfix').toggleClass('norm_pos');
      });

      $(window).resize(function(){
            var w = $(window).width();
            if(w > 320 && menu.is(':hidden')) {
              menu.removeAttr('style');
            }
        });
    });

    $('.menu-trigger').on('click', function(){
        $(this).toggleClass('active');
    });



   $('.top-button').click(function(){
    $('html, body').stop().animate({scrollTop: 0},1000);
    return false;
  });

  $(window).scroll(function(){
    if ( $(document).scrollTop() > 1500) {
      $('.top-button').fadeIn('2000');
    } else {
      $('.top-button').fadeOut('2000');
    }
  });



  $('.letter__send').click( function(){

    // $(".letter__yellow").slideUp(1500);

  });


  $(".letter_image").click(function() {
    var bottom = $(window).height() - $(".letter__send").height();
        bottom = $(".letter__send").offset().top - bottom + 100;
      $('html, body').animate({
          scrollTop:  bottom}, 1000);
        });

    $(".go_to_letter").click(function() {
        var bottom = $(window).height() - $(".letter__yellow").height();
        bottom = $(".letter__yellow").offset().top - bottom + 100;
        $('html, body').animate({
            scrollTop:  bottom}, 1000);
    });

  $('.google-maps').click(function () {
    $('.google-maps iframe').css("pointer-events", "auto");
        });

  $( ".google-maps" ).mouseleave(function() {
    $('.google-maps iframe').css("pointer-events", "none");
});

$('.start-a-project').click(function(){
    $( ".form-webit-container" ).animate({
          'top':'0',
         }, 750, function() { });
    });

  $('.arrow-up-form').click(function(){
      $(".form-webit-container").animate({
      'top':'-900',
        }, 750, function() {});

      $(".project").removeClass('active');
    });

    var $home = $('.some-projects').imagesLoaded ( function() {
        $home.masonry({
            itemSelector: '.some-projects__box',
        });
    });

    var $grid = $('.content__img').imagesLoaded ( function() {
          $grid.masonry({
            itemSelector: '.some-projects__box',
        });
    });

    $( ".for-arrow > a" ).each(function( href ) {
        var url = window.location;
        /*console.log(url);*/
        var link = $(this).attr('href');
        var compare = 'http://www.webit.md'+link;
        if (compare == url) {
            $(this).addClass("active");
        }
        else {
            $(this).removeClass("active");
        }
    });












});
