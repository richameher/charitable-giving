var svg = d3.select("body").append("svg").attr({ width: 1200, height: 800 }),
    data = [],
    lineFunction = d3.svg.line()
        .x(function (data) {
            return data.x;
        })
        .y(function (data) {
            return data.y;
        }),
    path,path1,path2, isDown = false, count=0, l1_dist=0,l2_dist=0,l3_dist=0;

var dragP = d3.behavior.drag().on('drag', dragPath),
    dragC = d3.behavior.drag().on('drag', dragCircle);

function dragPath(dataSource) {
    var e = d3.event;
    data.forEach(function(datum, index){
        datum.x += e.dx;
        datum.y += e.dy;
    });
    updatePath();
    updateCircle();
}

function dragCircle(dataSource) {
    var e = d3.event;
    dataSource.x += e.dx;
    dataSource.y += e.dy;
    updateCircle();
    updatePath();
}

function updatetext(fontsize){

svg.selectAll('text')
     .attr('text-anchor', 'middle')
     // .attr('font-size',0 )
     // .transition()
     // .duration(10)
     .attr('font-size',fontsize )
     .attr("class", "myLabel")//easy to style with CSS
     .text("Charity1");

}
function updatePath(){
    if(!path){
        path = svg.append('path');
    }

    if(!path1){
        path1 = svg.append('path');
    }

    if(!path2){
        path2 = svg.append('path');
    }
    var l1=[];
    l1[0]=data[0];
    l1[1]=data[1];
    l1_dist=calculate_dist(l1);
    console.log("L1");
    console.log(l1_dist);

    var l2=[];
    l2[0]=data[0];
    l2[1]=data[2];
    console.log("L2");
    l2_dist=calculate_dist(l2);
    console.log(l2_dist);

    var l3=[];
    l3[0]=data[0];
    l3[1]=data[3];
    console.log("L3");
    l3_dist=calculate_dist(l3);
    console.log(l3_dist);
    var ratios=get_ratios(l1_dist,l2_dist,l3_dist);
    console.log(ratios);
    var fontsize=100*ratios[0];
    updatetext(fontsize);

    path.attr('d', lineFunction(l1))
    .attr('stroke','blue');

    path1.attr('d', lineFunction(l2))
    .attr('stroke','blue');

    path2.attr('d', lineFunction(l3))
    .attr('stroke','blue');
}

function get_ratios(dist1,dist2,dist3)
{
var total=dist1+dist2+dist3;
var frac1=1-(dist1/total);
var frac2=1-(dist2/total);
var frac3=1-(dist2/total);
console.log(frac1,frac2,frac3);
return [frac1,frac2,frac3];

}
function calculate_dist(arr){
  var xDiff = arr[0].x - arr[1].x;
  var yDiff = arr[0].y  - arr[1].y;
  return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}
function updateCircle(){

    circle = svg.selectAll('circle').data(data);
    circle.enter().append('circle').attr('r', 0).transition().duration(500).attr('r', 10)
    .attr("class", function(d,i) {return i == 0 ? "centroid" : "circle2";});;
    circle.attr('cx', function(d) { return d.x; })
          .attr('cy', function(d) { return d.y; });
}

var init=[270,165];
var centrx= (init[0]+init[0]+init[0])/3;
var centry= (init[1]+init[1]+init[1]+200)/3;
data[0] = { x: centrx, y: centry };
data[3] = { x: init[0], y: init[1]+200 };
data[1] = { x: init[0]+200, y: init[1] };
data[2] = { x: init[0]-200, y: init[1] };
updatePath();
updateCircle();
svg.append("text")
   .attr("y", data[1].y+20)//magic number here
   .attr("x", data[1].x)
   .attr('text-anchor', 'middle')
   .attr('font-size',33 )
   .attr("class", "myLabel")//easy to style with CSS
   .text("Charity1");

svg.on('mousedown', function(){
    var m = d3.mouse(this);
    if(!count){
        if(!isDown){
            data[0] = { x: m[0], y: m[1] };
            updatePath();
            updateCircle();
            console.log(data);
        } else {
            updateCircle();
            console.log(data);
            d3.selectAll('.centroid').call(dragC);
            path.call(dragP);
            path1.call(dragP);
            count++;
            console.log(data);
        }
    }
    isDown = !isDown;
});
// .on('mousemove', function(){
//     var m2 = d3.mouse(this);
//     if(path && count === 0){
//         if(isDown){
//             data[1] = { x: m2[0], y: m2[1] };
//             updatePath();
//         }
//     }
// });
