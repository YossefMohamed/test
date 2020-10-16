$(document).ready(function () {
    let start=$.now()
    $(".btn__suivre").click(function (e) { 
        $(".st1").hide();
        $('.st2').fadeIn(100);
        $('footer').css('margin-top', "10rem");
        setTimeout(function(){
            $('.st2').fadeOut(500);
            $('.st3').fadeIn(500);
            $('footer').removeAttr('style')

        }, 4500);

    });

    $(".wrong").click(function (e) { 
        $(this).text("Votre colis est déjà dans l'entrepôt de livraison");
        $(this).removeClass('q2b');
        $(this).removeClass('q1b');
        $(this).css({'padding-left': '15px','color':'red'});
    });
    $(".right").click(function (e) { 
        $(this).addClass('qbr');
        $(this).removeClass('q2b');
        $(this).removeClass('q1b');
        $(this).css({'background':'#002b74'
    ,'color':'white'})
    });




    $(".right1").click(function (e) {
        $(this).addClass('qbr');
        $(this).removeClass('q2b');
        $(this).removeClass('q1b');
        $(this).css({'background':'#002b74'
    ,'color':'white'})
        setTimeout(function(){
        $(".st4").hide();
        $(".st5").fadeIn(50);
        },1000)
    });
    
    $(".right2").click(function (e) {
        $(this).addClass('qbr');
        $(this).removeClass('q2b');
        $(this).removeClass('q1b');
        $(this).css({'background':'#002b74'
    ,'color':'white'})
        setTimeout(function(){
        $(".st5").fadeOut(10);
        $(".st6").fadeIn(50);
        },500)
    });

    $(".right3").click(function (e) {
         $(this).addClass('qbr');
        $(this).removeClass('q2b');
        $(this).removeClass('q1b');
        $(this).css({'background':'#002b74'
    ,'color':'white'}) 
    setTimeout(function(){
    
    $(".st6").hide();
        $('.st7').fadeIn(100);
        $('footer').css('margin-top', "10rem");
    },500)
        setTimeout(function(){
            $('.st7').fadeOut(500);
            $('.st8').fadeIn(500);
            $('footer').removeAttr('style')}, 500);

    });

    });

    $(".btn__plan").click(function (e) {
        $(".st3").hide();
        $(".st4").fadeIn(100);

    });
    
