$(function () {
  TweenLite.to($("header h1"), 1 * 2, {
    opacity: 1,
    y: -75,
    ease: Circ.easeOut,
  });

  $("header .btnheader").on("click", function () {
    gsap.to(window, { duration: 1.5, scrollTo: ".projects" });
  });
});
