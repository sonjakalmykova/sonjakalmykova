$(document).ready(function() {

    $('.card img').click(function(){
        var img = $(this).attr('src');
        var title =$(this).parent().find('.title').clone();
        var desc = $(this).parent().find('.hidden').clone();
        var link = $(this).parent().find('.link').attr('href');

        //alert(link.toString());

        var closeButton = '<button id="close" class="material-icons">close</button>';
        var viewButton = '<a  id="action-open"  _target="blank" href="'+link+'" class="material-icons pull-xs-right" >link</a>';



     $('body').css({'overflow-y':'hidden'});
     $('body').append('<div class="modal-wrap"><header></header><div class="modalcontent"></div></div>');

     $('header').append(closeButton);
     $('header').append(title);
     $('header').append(viewButton);

     $('.modalcontent').append('<img src="'+img+'">');
     $('.modalcontent').append(desc);
     $('.modalcontent').append(link);

     $('body').on('click', '#close', function()
        {
            $('.modal-wrap').remove();
            $('body').css({'overflow-y':'auto'});
        });

});


    // NOTE: SKILLS





function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {

    $('#skill_list li').each(function(i)
        {
    var $elem = $('#skill_list li').eq(i);

    // If the animation has already been started
    if ($elem.hasClass('start')) return;


    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');


           var level = ($('#skill_list li').eq(i).data('level'));

           //if(isScrolledIntoView( $('#skill_list li').eq(i)) ){
               $('#skill_list li').eq(i).animate({width:level},1000,function(){});

           //}




    }
    });
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});

new WOW().init();
//MENU

$('#menu').click(function(){
    $('nav').toggleClass('open');
    if($('nav').hasClass('open')){$('#menu').text('close');}
    if(!$('nav').hasClass('open')){$('#menu').text('menu');}

});

$(".drawer a").click(function(){
    $('.open').removeClass('open');
    if(!$('nav').hasClass('open')){$('#menu').text('menu');}
});

    $('.mdl-layout__drawer a').click(function(){
        $('.mdl-layout__drawer').removeClass('is-visible');


    });

var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
});


});
