$(document).ready(function() {
  /* when screen-width is less than 1000 px: */
  if ($(document).width() < 1000) {
      $("#hamburgerbutton").removeClass("accessible-hidden");
      $("#navigationmenu").addClass("accessible-hidden");
    }
  else {
      $("#navigationmenu").removeClass("accessible-hidden");
    }
  });

  $(window).resize(function() {
      if ($(document).width() < 1000) {
          $("#hamburgerbutton").removeClass("accessible-hidden");
          $("#navigationmenu").addClass("accessible-hidden");
      } else {
          $("#hamburgerbutton").addClass("accessible-hidden");
          $("#navigationmenu").removeClass("accessible-hidden");
      }
    });

  // handle hamburger button clicks
  $("#hamburgerbutton").click(function() {
      if ($("#navigationmenu").hasClass("accessible-hidden")) {
        $("#navigationmenu").removeClass("accessible-hidden");
      } else {
        $("#navigationmenu").addClass("accessible-hidden");
      }
  });
