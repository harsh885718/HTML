var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;
};

    function gototop()
    {
        window.scrollTo(0, 0)
    }

  
   ul =  document.getElementById("ul1")
    bar = document.getElementById("navbar")
    
    
    
    function submenu() 
    {
    if(ul.style.display == "none" )
    {
    ul.style.display = "block" ;
    
    }
    else
    {
    ul.style.display = "none" ;
    }
    }



    var swiper = new Swiper(".xslider", {
      direction: "vertical",
      grabCursor: true,
      effect: "creative",
      
      loop: true ,
      speed: 1000,
      autoplay  :{
      delay :2500,
      },      
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
},
// creativeEffect: {
// prev: {
// shadow: true,
// translate: ["-20%", 0, -1],
// },
// next: {
// translate: ["100%", 0, 0],
// },
// },


});



    var swiper_2 = new Swiper(".mySwiper", {
      slidesPerView: 4,
      // spaceBetween: 30,
      loop: true ,
      speed: 1000,
      autoplay  :{
        delay :2000,
      },
 
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
        breakpoints: {
        "@0.00": {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });


    var swiper_3 = new Swiper(".ceoSwiper", {

      loop: true ,
      speed: 2000,
      autoplay  :{
        delay :3000,
      },
    });

    var swiper = new Swiper(".mylastSwiper", {
      slidesPerView: 6,
      spaceBetween : 30 ,
      loop: true ,
      speed: 1000,
      autoplay  :{
        delay :2000,
      },
      breakpoints: {
        "@0.00": {
          slidesPerView: 2,
        },
        "@0.75": {
          slidesPerView: 2,
        },
        "@1.00": {
          slidesPerView: 4,
        },
        "@1.50": {
          slidesPerView: 6,
        },
      },
    });