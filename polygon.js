var svg = d3.select("body").append("svg").attr({ width: 500, height: 500 }),
    data_centr = [],
    lineFunction = d3.svg.line()
        .x(function (data) {
            return data.x;
        })
        .y(function (data) {
            return data.y;
        }),
    path, isDown = false, count=0;

var num_cir=3;

function update_centroid()
{

console.log("Updating datacenter");
console.log(data_centr);
  d3.select(".centroid")
  .attr("r",20)
  .data({x:357, y:201})
  .attr('cx', function(d) { return 0; })
  .attr('cy', function(d) { return 0; })
  ;

}
function create_polygon(num_cir,m)
{
  var circle;
  var data=[];
  if (num_cir==3){
    data[3] = { x: m[0], y: m[1]+100 };
    data[1] = { x: m[0]+100, y: m[1] };
    data[2] = { x: m[0]-100, y: m[1] };
    var centrx= (m[0]+m[0]+100-100+m[0])/3;
    var centry= (m[1]+100+m[1]+m[1])/3;
    data[0] = { x: centrx, y: centry };
    data_centr=data[0];

  }
  if (num_cir==4){
    data[4] = { x: m[0]-200, y: m[1]+100 };
    data[1] = { x: m[0]+200, y: m[1]-100 };
    data[2] = { x: m[0]-200, y: m[1]-100 };
    data[3] = { x: m[0]+200, y: m[1]+100 };
    var centrx= (m[0]+m[0]+m[0]+m[0])/4;
    var centry= (m[1]+m[1]+m[1]+m[1])/4;
    data[0] = { x: centrx, y: centry };
    data_centr=data[0];

  }
  circle= svg.selectAll('circle').data(data);
  circle.enter().append('circle')
  .attr('r', 2)
  .transition()
  .duration(500)
  .attr('r', function(d,i) { if (i!=0) return 20; else return 10;})
  .attr("class", function(d,i) {return i == 0 ? "centroid" : "circle2";});
  circle.attr('cx', function(d) { return d.x; })
        .attr('cy', function(d) { return d.y; });


}

var init=[270,165];
create_polygon(num_cir,init);
// build_centroid(num_cir,init);
svg.on('mousedown', function(){
        var m = d3.mouse(this);

        if(!isDown){
          console.log(m);
          data_centr = { x: m[0], y: m[1] };
          // update_centroid();
          // d3.select('.centroid').call(dragC);
        }

});
