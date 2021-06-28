
d3.select("#amount").on("input", function() {
  console.log("Input Value", this.value);
  sessionStorage.setItem("donateamount", this.value);
  load_polygon();

});
