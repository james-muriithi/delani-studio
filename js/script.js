$(function () {


    toggleWhatWeDo();
});

//  function to toggle what we do
function toggleWhatWeDo() {
  $(".service").on("click", function () {
    if ($(".service-details", this).is(":visible")) {
      $(".service-details", this).hide();
      $(".service-card", this).fadeIn("slow");
    } else {
      $(".service-details", this).fadeIn("slow");
      $(".service-card", this).hide();
    }
  });
}
