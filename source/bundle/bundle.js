import '../components/scss/style.scss';

import '../components/js/bootstrap.min';

import 'slick-carousel';

import '../components/js/jquery.truncate';

$(document).ready(function() {
  $('.tip').truncate({
  })
});

var slickComments = $('.slick-comments');

slickComments.slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	// fade: true,
	dots: false
});

$(window).scroll(function(){
	if ($(this).scrollTop()>0) {
		$('.header').addClass('fixed');
	} else {
		$('.header').removeClass('fixed');
	}
});

import 'wowjs';

const WOW = require('wowjs');
window.wow = new WOW.WOW({

})
	
window.wow.init();



$('body').scrollspy({target: "#navbar", offset: 50});

$("#navbar a").on('click', function(event) {

  if (this.hash !== "") {

    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      window.location.hash = hash;
    });

  }

});

function ShowMenu() {
  $('#hamburger, #close').click(function() {
    $('#hamburger').toggleClass('opened');
    $('#navbar').toggleClass('opened');
  });
  
}
ShowMenu();

function changeMobile() {
  if(matchMedia) {
    var screen = window.matchMedia('(max-width: 768px)');
    screen.addListener(changes);
    changes(screen);
  }
  function changes(screen) {
    if(screen.matches) {
      $('#navbar > ul > li > a').click(function() {
        $('#hamburger').toggleClass('opened');
        $('#navbar').toggleClass('opened');
      });
    }
    else {
    }
  };
};
changeMobile();