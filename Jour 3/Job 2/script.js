$(document).ready(function () {
  var images = $("#container2 img");
  var imageAlts = images
    .map(function () {
      return $(this).attr("alt");
    })
    .get();

  $("#button").click(function () {
    images
      .sort(function () {
        return Math.random() - 0.5;
      })
      .appendTo("#container2");
  });

  images.click(function () {
    $(this).appendTo("#container1");
    checkOrder();
  });

  $("#container2 img").click(function () {
    $(this).appendTo("#container1");
    checkOrder();
  });

  $("#container1").on("click", "img", function () {
    $(this).appendTo("#container2");
    checkOrder();
  });

  function checkOrder() {
    var currentOrder = $("#container1 img")
      .map(function () {
        return $(this).attr("alt");
      })
      .get()
      .join(",");

    if (currentOrder === imageAlts.join(",")) {
      $("#result").text("Vous avez gagné").css("color", "green");
    } else {
      $("#result").text("Vous avez perdu").css("color", "red");
    }
  }
});
