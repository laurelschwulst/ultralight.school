$( document ).ready(function() {

    //  $('.button').click(function(){
    //     var $this = $(this);
    //     var id = $this.attr('id').replace(/btn/, '');
    //     $this.toggleClass('active');
    //     $(this).siblings('.title').css('display', 'block');
    //     $(this).siblings('.year').css('display', 'block');
    //     $(this).siblings('.type').css('display', 'block');
    //     $(this).css('display', 'none');
    //     $(this).siblings('.caption').css('display', 'block');
    //     if($this.hasClass('active')){
    //         $('audio[id^="sound"]')[id-1].play();    
    //     } else {
    //         $('audio[id^="sound"]')[id-1].pause();
    //     }
    // });

    // $('.title').click(function(){
    //     $(this).css('display','none');
    //     $(this).siblings('.year').css('display', 'none');
    //     $(this).siblings('.type').css('display', 'none');
    //     $(this).siblings('.button').css('display', 'block');
    // }) 

    // $('#cicadaadd').mouseenter(function(){
    //     $('#cicadacaption').addClass('show');
    // })

    $('.button').mouseenter(function(){
            $(this).siblings('.title').css('display','block');
    });

    $('.button').mouseleave(function(){
            $(this).siblings('.title').css('display','none');
    });

    $('#selrec').click(function(){
        $('#year').toggle();
        $('#type').toggle();
        $('.year').hide();
        $('.type').hide();
        $('.title').hide();
    })

    $('#year').click(function(){
        $('.year').toggle();
        if ($('.title').css('display') == 'none'){
            $('.title').show();
        }
        // $('.title').toggle()
    })

    $('#type').click(function(){
        $('.type').toggle();
       if ($('.title').css('display') == 'none'){
            $('.title').show();
        }
    })


    // $('#btn1').click(function(){
    //         $(this).toggleClass('bold');
    //         $('#title1').toggleClass('show');
    //         var myAudio = document.getElementById("sound1")
    //         if (myAudio.paused){
    //         myAudio.play(); 
    //     }
    //         else {
    //             myAudio.pause();
    //         };
    // });


});

   
