/*fullPage*/
/*http://alvarotrigo.com/fullPage*/
$(document).ready(function () {
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['home', 'about', 'offer', 'partners', /*'clients',*/ 'team', 'contact'],
        scrollingSpeed: 900,
        //responsiveWidth: 768,
        //autoScrolling:false,
        scrollOverflow: true,
        navigation: true,
        navigationTooltips: ['Home', 'O firmie', 'Oferta', 'Partnerzy', /*'Klienci',*/ 'Zespół', 'Kontakt'],
        
        //Design
        verticalCentered: false,
        paddingTop: '6vh',
        //hiding menu
        afterRender: function () {
            $('#menu').hide();
        },
        afterLoad: function (anchor, index) {
            if (index == 1) {
                $('#menu').fadeOut();
            } else {
                $('#menu').fadeIn();
            }
        },
    });

    $('.seeMore').click(function () {
        $.fn.fullpage.moveSectionDown();
    });
});


/*Slick carousel*/
$(document).ready(function () {
    $('.clients-carousel').slick({
        centerMode: true,
        slidesToShow: 3,
        arrows: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    //centerPadding: '40px',
                    slidesToShow: 1
                }
    }
            /*,
                        {
                            breakpoint: 480,
                            settings: {
                                arrows: false,
                                centerMode: true,
                                centerPadding: '40px',
                                slidesToShow: 1
                            }
                }*/
  ]
    });
});

/*Menu hidden*/