    $("#nav").on("click", function () {
      $(this).children("ul").toggle();
      $(this).children("h2").children("a").children("span").toggleClass("glyphicon-menu-hamburger");
      $(this).children("h2").children("a").children("span").toggleClass("glyphicon-remove");
    })
