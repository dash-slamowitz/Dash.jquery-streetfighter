$(document).ready(function() {
 	$('.ryu').mouseenter(function() {
   		$('.ryu-throwing').hide();
      $('ryu-cool').hide();
      $('.ryu-still').hide();
		  $('.ryu-ready').show();
	})
  	.mouseleave(function() {
		  $('.ryu-throwing').hide();
      $('.ryu-cool').hide();
      $('.ryu-ready').hide();
		  $('.ryu-still').show();
  })
    .mousedown(function() {
      playHadouken();
      $('.ryu-still').hide();
      $('.ryu-cool').hide();
      $('.ryu-ready').hide();
      $('.ryu-throwing').show();
      $('.hadouken') .finish().show().animate(
        {'left': '1020px'},
        500,
        function() {
        $(this).hide();
        $(this).css('left', '520px');
  }
);

   })

  	.mouseup(function() {
        $('.ryu-still').hide();
        $('.ryu-cool').hide();
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
	});

 $(document).on('keydown', function(e){
  console.log(e.keyCode)
    if(e.keyCode == 88) {
      $('ryu-throwing').hide();
      $('.ryu-ready').hide();
      $('.ryu-still').hide();
      $('.ryu-cool').show();
    }
  });

 $(document).on('keyup', function(e){
  console.log(e.keyCode)
    if(e.keyCode == 88) {
      $('ryu-throwing').hide();
      $('ryu.ready').hide();
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  });


});

  
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
