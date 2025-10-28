$(document).ready(function () {
  function handleResize() {
    if ($(window).width() < 768) {
      // Mobile mode: hide all lists by default
      $(".footer-links-wrapper ul").hide();

      // enable click functionality
      $(".footer-links-wrapper h3")
        .off("click")
        .on("click", function () {
          let $this = $(this);

          // slide toggle only the clicked section
          $this.next("ul").slideToggle();

          // toggle icon class (+ ↔ ×)
          $this.toggleClass("iconRotator");
        });
    } else {
      // Desktop mode: always show lists and reset states
      $(".footer-links-wrapper ul").show();
      $(".footer-links-wrapper h3").removeClass("iconRotator");
      $(".footer-links-wrapper h3").off("click"); // disable mobile click events
    }
  }

  // run on load
  handleResize();

  // run on window resize
  $(window).resize(function () {
    handleResize();
  });
});
