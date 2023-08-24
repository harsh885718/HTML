num = document.querySelector('#num');
c = setInterval("count()",30);
client = 0;
function count()
{
    num.innerHTML = ++client;

    if(client==26)
    {
        clearInterval(c);
    }
}
count();



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true ,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});
