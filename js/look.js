$(function () {
    // anime.timeline({loop: true});
    var idx = 0;
    setInterval(time, 3000);
    function time() {
      var box = $('.look');
      box.removeClass('on');
      box.eq(idx).addClass('on');
      idx++;
      if (idx >= box.length) idx = 0;
    }
});
  
  
var textWrapper = document.querySelector('.moving .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
    anime.timeline({loop: true})
      .add({
        targets: '.moving .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 1700,
        delay: (el, i) => 50 * i
      })
      // .add({
      //   targets: '.moving',
      //   opacity: 0,
      //   duration: 2000,
      //   easing: "easeOutExpo",
      //   delay: 1500
      // })
      ;
  

  