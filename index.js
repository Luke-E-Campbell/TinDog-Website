// ANIMATION WHEN SCROLLING
$(document).ready(function () {
  $(window).scroll(function () {
    var height = $("header").height();
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= height - 10) {
      $("header").addClass("solid-nav");
    } else {
      $("header").removeClass("solid-nav");
    }
  });
});

// BURGER MENU
$(document).ready(function () {
  $(".menu-toggle").on('click', function() {
    $(this).toggleClass('change');
  });
});
