var margin = {top: 400, right: 200, bottom: 100, left: 200},
    width = 384,
    height = 256;

var svg = d3.select("#svgconatiner").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    // .style("margin-left", -margin.left + "px")
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// var rect=  svg.append("rect")
//        .attr("width", width)
//        .attr("height", height)
//        .attr("fill", "white")
//        .style("stroke", "rgb(255,0,0)")
//        .style("stroke-width", 2);

// rect.append("table");

var table = d3.select("#tablecontainer").append("table")
          .attr("style", "margin-left: 250px"),
      thead = table.append("thead"),
      tbody = table.append("tbody");

thead.selectAll("th")
               .data(["Region", "1990", "2015", "Difference"])
               .enter()
               .append("th")
               .text(function(d) { return d; });
