
d3.select("#amount").on("input", function() {

  console.log("Input Value", this.value);
  sessionStorage.setItem("donateamount", this.value);

  load_polygon();

});
var amt = document.createElement("p").
amt.classList.add("amt");
document.getElementsByClassName('amt')[0].innerHTML="Enter HTML";
