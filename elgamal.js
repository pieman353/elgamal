var btn = document.getElementById("button");
button.addEventListener("click", function(event) {
  document.getElementById("p").value() = "dick";
  var p = document.getElementById("p").value().Number();
  var g = document.getElementById("g").value().Number();
  var q = document.getElementById("q").value().Number();
  var c = document.getElementById("c").replace("(","").replace(")","").split(",");
  var c1 = c[0].Number();
  var c2 = c[1].Number();
  document.getElementById("res").value = c1;
}
