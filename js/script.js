/*-------------------------------------
| Slide In On View animation
-------------------------------------*/
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

/*-------------------------------------
| Smooth Scroll
-------------------------------------*/
        function scroll2Product () {
        	$('html,body').animate({
                scrollTop: $("#product2").offset().top},
                'slow');
        }

        $(".sliceButton").click(scroll2Product);


/*-------------------------------------
| Down Arrow Animation
-------------------------------------*/

	function showDownArrow () {
		$('.sliceButton').animate({opacity: '0'},500);
	}
	showDownArrow(arrowAnimate);

	function arrowAnimate() {
	$(".sliceButton").animate({
    opacity: 1,
    top: "860px"
}, 2000, function () {
    $(".sliceButton").css({
        top: '800px',
        opacity: 0
    }), arrowAnimate()
})
}
arrowAnimate();


$('.sliceButton').click(function(event) {

event.preventDefault();

$('html, body').animate({scrollTop: 0}, duration);

return false;

});


/*-------------------------------------
| Scroll to Top on Click
-------------------------------------*/
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

/*-------------------------------------
| Confetti Effect
-------------------------------------*/
'use strict';

var Confettiful = function Confettiful(el) {
  this.el = el;
  this.containerEl = null;

  this.confettiFrequency = 3;
  this.confettiColors = ['#fce18a', '#ff726d', '#b48def', '#f4306d'];
  this.confettiAnimations = ['slow', 'medium', 'fast'];

  this._setupElements();
  this._renderConfetti();
};

Confettiful.prototype._setupElements = function () {
  var containerEl = document.createElement('div');
  var elPosition = this.el.style.position;

  if (elPosition !== 'relative' || elPosition !== 'absolute') {
    this.el.style.position = 'relative';
  }

  containerEl.classList.add('confetti-container');

  this.el.appendChild(containerEl);

  this.containerEl = containerEl;
};

Confettiful.prototype._renderConfetti = function () {
  var _this = this;

  this.confettiInterval = setInterval(function () {
    var confettiEl = document.createElement('div');
    var confettiSize = Math.floor(Math.random() * 3) + 7 + 'px';
    var confettiBackground = _this.confettiColors[Math.floor(Math.random() * _this.confettiColors.length)];
    var confettiLeft = Math.floor(Math.random() * _this.el.offsetWidth) + 'px';
    var confettiAnimation = _this.confettiAnimations[Math.floor(Math.random() * _this.confettiAnimations.length)];

    confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
    confettiEl.style.left = confettiLeft;
    confettiEl.style.width = confettiSize;
    confettiEl.style.height = confettiSize;
    confettiEl.style.backgroundColor = confettiBackground;

    confettiEl.removeTimeout = setTimeout(function () {
      confettiEl.parentNode.removeChild(confettiEl);
    }, 3000);

    _this.containerEl.appendChild(confettiEl);
  }, 25);
};

window.confettiful = new Confettiful(document.querySelector('.js-container'));

/*-------------------------------------
| on Scroll
-------------------------------------*/

$(document).on("scroll", function() {

	if($(document).scrollTop()>100) {
		document.querySelector(".logoContainer").setAttribute("style", "padding: 10px 0px; text-align: left;");
		document.querySelector(".navLinks").setAttribute("style", "text-align: right;");

		$(".logoContainer img").addClass('logoContainerScrolled');
	}
  else {
		document.querySelector(".logoContainer").setAttribute("style", "background-color:#f7b3cc; padding: 50px 0px;");
    document.querySelector(".navLinks").setAttribute("style", "text-align: center;");
    $(".logoContainer img").removeClass('logoContainerScrolled');
	}

});
