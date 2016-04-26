/*fullPage*/
/*http://alvarotrigo.com/fullPage*/
$(document).ready(function () {
    $('#fullpage').fullpage({
        menu: "#mainMenu",
        anchors: ['home', 'about', 'offer', 'partners', 'clients', 'team', 'contact'],
        scrollingSpeed: 900,
        //responsiveWidth: 768,
        //autoScrolling:false,
        scrollOverflow: true,
        navigation: true,
        
        //Design
        verticalCentered: false,
        paddingTop: '10vh'
    });
});

