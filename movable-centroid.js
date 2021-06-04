
d3.csv("data/charities_list_clean.csv", function(dataset) {
var active_charities=JSON.parse(sessionStorage.getItem("SelectedCharities"));
var number_charities=Object.keys(active_charities).length;

var svg = d3.select("body").append("svg").attr({ width: 1200, height: 1000 }),
    data = [],
    lineFunction = d3.svg.line()
        .x(function (data) {
            return data.x;
        })
        .y(function (data) {
            return data.y;
        }),
     paths=[],path,path1,path2, isDown = false, count=0, l1_dist=0,l2_dist=0,l3_dist=0;

let char_names=[];

  var newdata=[]
  for (var key in active_charities) {
      if (active_charities.hasOwnProperty(key)) {
        newdata.push(dataset[key-1]["Name"]);
        }
      }
  for (var i = 0; i < number_charities; i++) {
    char_names[i]=newdata[i];
}


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

function updatetext(fontsizes,ratios){

var numbers=[];

for (var i = 0; i < number_charities; i++) {
  numbers[i]=1000*(ratios[i]);
  svg.selectAll('#textelement'+(i+1))
       .attr('text-anchor', 'middle')
       .attr('font-size',fontsizes[i] )
       .attr("class", "myLabel")//easy to style with CSS
       .text(char_names[i]+" Rs"+parseInt(numbers[i]));
  }

}
function updatePath(){

    for (var i = 0; i <= number_charities; i++) {
    if(!paths[i]){
        paths[i] = svg.append('path');
    }
  }

    var ldist=[];
    var l3_dist=[];
    for (var i = 1; i <= number_charities; i++) {
    var l3=[];
    l3[0]=data[0];
    l3[1]=data[i];
    ldist.push(l3);
    l3_dist.push(calculate_dist(l3));

  }
    var ratios=get_ratios(l3_dist);
    var fontsizes=[]
    console.log("Ratios",ratios);
    for (var i = 0; i < number_charities; i++) {
    fontsizes[i]=100*ratios[i];
  }
    updatetext(fontsizes,ratios);

    console.log(ldist);
    for (var i = 0; i < number_charities; i++) {
    console.log(ldist[i]);
    paths[i].attr('d', lineFunction(ldist[i]))
    .attr('stroke','#20639B')
    .attr('stroke-width','20px');

  }
}

function get_ratios(l3_dist)
{
var fract=[];
var total=0;
for (var i = 0; i < number_charities; i++) {
  total=total+(1/l3_dist[i]);
}
for (var i = 0; i < number_charities; i++) {
fract[i]=((1/l3_dist[i])/total);;
}

return fract;

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

var init=[200,10];

function start(){
if (number_charities==3) {
  data[3] = { x: init[0]-100, y: init[1]+100 };
  data[1] = { x: init[0]+273, y: init[1]+732 };
  data[2] = { x: init[0]+732, y: init[1]+273 };
  var centrx= (init[0]+init[0]+init[0]-100+273+732)/3;
  var centry= (init[1]+init[1]+init[1]+100+732+273)/3;
  data[0] = { x: centrx, y: centry };

for (var i = 1; i <= number_charities; i++) {
  svg.append("text")
     .attr('id','textelement'+i)
     .attr("y", data[i].y-20)//magic number here
     .attr("x", data[i].x+20)
     .attr('text-anchor', 'middle')
     .attr('font-size',33 )
     .attr("class", "myLabel")
     .text(char_names[i-1]);
}
}
else if(number_charities==2){
  data[1] = { x: init[0], y: init[1]+732 };
  data[2] = { x: init[0], y: init[1]+273 };
  var centrx= (init[0]+init[0])/2;
  var centry= (init[1]+init[1]+732+273)/2;
  data[0] = { x: centrx, y: centry };

  for (var i = 1; i <= number_charities; i++) {
  svg.append("text")
     .attr('id','textelement'+i)
     .attr("y", data[i].y-20)//magic number here
     .attr("x", data[i].x+20)
     .attr('text-anchor', 'middle')
     .attr('font-size',33 )
     .attr("class", "myLabel")//easy to style with CSS
     .text(char_names[i-1]);

}
}
else if(number_charities==4){
  data[1] = { x: init[0]+273, y: init[1]+732 };
  data[2] = { x: init[0], y: init[1]+273 };
  data[3] = { x: init[0], y: init[1]+732 };
  data[4] = { x: init[0]+273, y: init[1]+273 };
  var centrx= ((4*init[0])+273+273)/4;
  var centry= ((4*init[1])+732*2+273*2)/4;
  data[0] = { x: centrx, y: centry };

  for (var i = 1; i <= number_charities; i++) {
  svg.append("text")
     .attr('id','textelement'+i)
     .attr("y", data[i].y-20)//magic number here
     .attr("x", data[i].x+20)
     .attr('text-anchor', 'middle')
     .attr('font-size',33 )
     .attr("class", "myLabel")//easy to style with CSS
     .text(char_names[i-1]);

}
}
}

start();
updatePath();
updateCircle();

svg.on('mousedown', function(){
    d3.selectAll('.centroid').attr('r',30);
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
            paths[0].call(dragP);
            path1.call(dragP);
            path2.call(dragP);
            count++;
            console.log(data);
        }
    }
    isDown = !isDown;
});

});
