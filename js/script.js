// event pada saat di klik //
$('.page-scroll').on('click', function(e) {

    // take href
    var tujuan = $(this).attr('href');
   
    //catch elemen
    var elemenTujuan = $(tujuan);
   
    // movement scroll
    $('html, body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    });
   
    e.preventDefault();
   });

// about //
$(window).on('load', function() {
    $('.pLeft').addClass('pMuncul')
    $('.pRight').addClass('pMuncul')
});


// Parallax //
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // jumbotron //
    $('.jumbotron img').css({
        'transform' : 'translate(0, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0, '+ wScroll/1.5 +'%)'
    });

    // portfolio //
    if( wScroll > $('.portfolio').offset().top - 450 ) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul')
            }, 300 * (i+1));
        });
    }

});



