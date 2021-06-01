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

//TO-DO: numrows and cols suppose to come with number of regions and causes, it can be hardcoded for now
var numrows = 3;
var numcols = 3;

function build_matrix()
{
  var charity_matrix= new Array(numrows);
  for (var i = 0; i < numrows; i++) {
    charity_matrix[i] = new Array(numcols);
    for (var j = 0; j < numcols; j++) {
        charity_matrix[i][j]=0;
    }
  }
  console.log("Hello");
  d3.csv("data/charities.csv", function(dataset) {

     dataset.forEach(function(entry){console.log(entry.region,entry.Cause)});
     dataset.forEach(function(entry){charity_matrix[entry.region][entry.Cause]=1 });
     console.log(charity_matrix);
});
return charity_matrix;
}

var matrix=build_matrix();
console.log(matrix[0][1]);

var x = d3.scale.ordinal()
    .domain(d3.range(numcols))
    .rangeBands([0, width]);

var y = d3.scale.ordinal()
    .domain(d3.range(numrows))
    .rangeBands([0, height]);


d3.csv("data/rowscol_label.csv", function(dataset) {

var newdata=dataset;
console.log(newdata);

var rowLabels = new Array(numrows);
for (var i = 0; i < numrows; i++) {
  rowLabels[i] = String(newdata[i]["Rows"]);

}

var columnLabels = new Array(numrows);
for (var i = 0; i < numcols; i++) {
  columnLabels[i] = String(newdata[i]["Columns"])
}



var colorMap = d3.scale.linear()
    .domain([1,0])
    .range(["red", "white"]);
    //.range(["red", "black", "green"]);
    //.range(["brown", "#ddd", "darkgreen"]);

var row = svg.selectAll(".row")
    .data(rowLabels)
  .enter().append("g")
    .attr("class", "row")
    .attr("transform", function(d, i) { return "translate(0," + y(i) + ")"; });

    row.append("line")
        .attr("x2", width);

    row.append("text")
        .attr("x", 0)
        .attr("y", y.rangeBand() / 2)
        .attr("dy", ".32em")
        .attr("text-anchor", "end")
        .text(function(d, i) { return d; });

row.selectAll(".cell")
    .data(matrix)
  .enter().append("rect")
    .attr("class", "cell")
    .attr("x", function(d, i) { return x(i); })
    .attr("width", x.rangeBand())
    .attr("height", y.rangeBand())
    .style("stroke-width", 100)
    .attr("style", "outline: thin solid black;")
    .append("text")
            .text(function(d,i) {
                console.log(d);
                console.log(i);
                // return d.value;
            });


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
var w;
var cells=row.selectAll(".cell")
    .data(function(d, i) { return matrix[i]; console.log(d,i);})
    .style("fill", colorMap);

    cells.on('mouseover', function() {
                    d3.select(this)
                        .style('fill', "grey");
                 })
                 .on('mouseout', function() {
                    d3.select(this)
                        .style('fill', colorMap);
                 })
                 .on('click', function(d,i) {
                     if (d3.select(this.parentNode).datum()=="North")
                     {
                        region=1;

                      }
                      else if (d3.select(this.parentNode).datum()=="Central")
                      {
                         region=2;

                       }
                       else {
                         region=0;
                       }
                       console.log(i,region);

                       window.open("charitycards.html",'_self');

                       sessionStorage.setItem("region", region);
                       sessionStorage.setItem("cause", i);
                       // w.element="Hello";

                       // w = window.open('charitycards.html','_self');
                       // w.myVariable = thisIsAnObject;
                 })
                 .style("fill", colorMap)
                 .style("stroke", '#555');
console.log(matrix);
});

//Referenced from - https://gist.github.com/srosenthal/2770072
