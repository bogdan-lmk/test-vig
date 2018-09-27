//JQuery Module Pattern

// An object literal
var app = {
  init: function() {
    app.functionOne();
  },
  functionOne: function () {
  }
};
$("document").ready(function () {
  app.init();
});

var count = 1;
var countEl = document.querySelector('.prod-amount');

function plus(){
    count++;
    countEl.value = count;
}
function minus(){
  if (count > 1) {
    count--;
    countEl.value = count;
  }
}



$(function(){
  $(".slider-comprasion").twentytwenty({
    default_offset_pct: 0.4,
    orientation: 'vertical',
    no_overlay: true,
    move_slider_on_hover: true,
    move_with_handle_only: true,
    click_to_move: true
  });
});


	$('.mob-menu').click(function(){
		$('.icon-mob-menu--list ').toggleClass('hidden');
    	$('.icon-mob-menu--close ').toggleClass('show');
      $('.nav-row').toggleClass('nav-row--active');
	});
