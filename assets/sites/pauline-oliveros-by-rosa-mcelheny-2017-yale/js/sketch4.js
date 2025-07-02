$( document ).ready(function() {
    console.log( "ready!" );

    $('.cicada').mouseenter(function(){
    	document.getElementById('cicada').play();
    	$('.cicada .caption').css('display','block');
    });

    $('.cicada').mouseout(function(){
	    document.getElementById('cicada').pause();
	  });

    $('.timeperspectives').mouseenter(function(){
    	document.getElementById('timeperspectives').play();
    	$('.timeperspectives .caption').css('display','block');
    });

    $('.timeperspectives').mouseout(function(){
	    document.getElementById('cicada').pause();
	  });

    $('.oneoffour').mouseenter(function(){
    	document.getElementById('oneoffour').play();
    	$('.oneoffour .caption').css('display','block');
    });

    $('.oneoffour').mouseout(function(){
	    document.getElementById('cicada').pause();
	  });

    $('.alienbog').mouseenter(function(){
    	document.getElementById('alienbog').play();
    	$('.alienbog .caption').css('display','block');
    });

    $('.alienbog').mouseout(function(){
	    document.getElementById('cicada').pause();
	  });

});