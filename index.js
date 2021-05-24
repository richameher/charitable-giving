var margin = {top: 400, right: 200, bottom: 100, left: 200},
    width = 384,
    height = 256;

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    // .style("margin-left", -margin.left + "px")
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height);

var numrows = 6;
var numcols = 6;

var matrix = new Array(numrows);
for (var i = 0; i < numrows; i++) {
  matrix[i] = new Array(numcols);
  for (var j = 0; j < numcols; j++) {
    matrix[i][j] = Math.random()*2 - 1;
  }
}

var x = d3.scale.ordinal()
    .domain(d3.range(numcols))
    .rangeBands([0, width]);

var y = d3.scale.ordinal()
    .domain(d3.range(numrows))
    .rangeBands([0, height]);

d3.csv("data/rowscol_label.csv", function(dataset) {

var newdata=dataset;
console.log(newdata[1]["Rows"]);

var rowLabels = new Array(numrows);
for (var i = 0; i < numrows; i++) {
  rowLabels[i] = String(newdata[i]["Rows"]);
  console.log(newdata[i]["Rows"]);
}

var columnLabels = new Array(numrows);
for (var i = 0; i < numcols; i++) {
  columnLabels[i] = String(newdata[i]["Columns"])
  console.log(newdata[i]["Columns"]);
}



var colorMap = d3.scale.linear()
    .domain([-1, 0, 1])
    .range(["red", "white", "blue"]);
    //.range(["red", "black", "green"]);
    //.range(["brown", "#ddd", "darkgreen"]);

var row = svg.selectAll(".row")
    .data(matrix)
  .enter().append("g")
    .attr("class", "row")
    .attr("transform", function(d, i) { return "translate(0," + y(i) + ")"; });

row.selectAll(".cell")
    .data(function(d) { return d; })
  .enter().append("rect")
    .attr("class", "cell")
    .attr("x", function(d, i) { return x(i); })
    .attr("width", x.rangeBand())
    .attr("height", y.rangeBand())
    .style("stroke-width", 0);

row.append("line")
    .attr("x2", width);

row.append("text")
    .attr("x", 0)
    .attr("y", y.rangeBand() / 2)
    .attr("dy", ".32em")
    .attr("text-anchor", "end")
    .text(function(d, i) { return i; });

var column = svg.selectAll(".column")
    .data(columnLabels)
  .enter().append("g")
    .attr("class", "column")
    .attr("transform", function(d, i) { return "translate(" + x(i) + ")rotate(-90)"; });

column.append("line")
    .attr("x1", -width);

column.append("text")
    .attr("x", 6)
    .attr("y", y.rangeBand() / 2)
    .attr("dy", ".32em")
    .attr("text-anchor", "start")
    .text(function(d, i) { return d; });

row.selectAll(".cell")
    .data(function(d, i) { return matrix[i]; })
    .style("fill", colorMap);
});

//Referenced from - https://gist.github.com/srosenthal/2770072
