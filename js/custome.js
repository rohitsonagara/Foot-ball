 var owl = $('.banner-section .owl-carousel');
 owl.owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    items:1,
 animateOut: 'animate__fadeOut',
    animateIn: 'animate__fadeIn',
    
 });



            document.addEventListener(
                "DOMContentLoaded", () => {
                    new Mmenu( "#menu", {
                       "offCanvas": {
                          "position": "left"
                       },
                       "theme": "light"
                    });
                }
            );
    

