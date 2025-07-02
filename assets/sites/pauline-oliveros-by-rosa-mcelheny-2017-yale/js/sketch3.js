$(function(){

	// console.log("hello");

	$('.track').click(function(){
		$('.line').toggleClass('pause');
        var myAudio = document.getElementById("wanderer");
        if (myAudio.paused) {
          myAudio.play();
        } else {
          myAudio.pause();
        }
    });

});