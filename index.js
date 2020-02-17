$(function() {
  TweenLite.to($("header h1"), 1 * 2, {
    opactiy: 1,
    y: -75,
    ease: Circ.easeOut
  });

  $("header button").on("click", function() {
    console.log("you clicked the header button");
    TweenLite.to($("main"), 1 * 2, {
      y: -700,
      ease: Circ.easeOut
    });
  });
});
