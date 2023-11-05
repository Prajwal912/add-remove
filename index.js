$(document).ready(function () {
  let $add = $("#add");
  let $h5 = $("h5");
  let flag = 0;

  $add.on("click", function () {
    if (flag == 0) {
      $h5.text("Friends");
      $add.text("Remove Friend");
      $h5.css("color", "green");
      flag = 1;
    } else {
      $h5.text("Stranger");
      $add.text("Add Friend");
      $h5.css("color", "red");
      flag = 0;
    }
  });
});
