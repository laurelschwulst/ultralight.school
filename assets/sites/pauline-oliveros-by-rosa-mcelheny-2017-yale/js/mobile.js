$( document ).ready(function() {

	$('.score').addClass('pause');

	$('.intro').click(function(){
		$(this).addClass('fadeout');
		$('.score').removeClass('pause');
	});

	  var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("score");
        for (i = 0; i < x.length; i++) {
           x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 60000);    
    }
});