
function remove_polygon()
{
d3.select("#polygon").select("svg").remove();
remove_keywords();
}
function load_polygon()
{
d3.csv("data/charities_list_clean.csv", function(dataset) {
var active_charities=JSON.parse(sessionStorage.getItem("SelectedCharities"));
var donateamount=JSON.parse(sessionStorage.getItem("donateamount"));
var number_charities=Object.keys(active_charities).length;
remove_polygon();
var svg = d3.select("#polygon").append("svg").attr({ width: 1200, height: 800 }),
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
let char_keywords=[];
let char_id_map=[];

for (var key in active_charities) {
    if (active_charities.hasOwnProperty(key)) {
      console.log(active_charities);
      char_names.push(dataset[key-1]["Name"]); //check if charityid starts from 0
      char_keywords.push(dataset[key-1]["KeyWords"]);
      char_id_map.push(dataset[key-1]["CharityID"]);
      }
    }
  console.log(char_keywords);


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
  if (donateamount==null)
   donateamount=1000;
  numbers[i]=(donateamount*(ratios[i])).toFixed(2);
  svg.selectAll('#textelement'+(i+1))
       .attr('text-anchor', 'middle')
       .attr('font-size',33 )
       .attr('opacity',fontsizes[i]/33)
       .attr("class", "myLabel")//easy to style with CSS
       .text(char_names[i]+"\n Rs"+parseInt(numbers[i]));
  }
  changeimpact(numbers,char_id_map);

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

    initial_keywords(ratios,char_keywords);


    var fontsizes=[]
    console.log("Ratios",ratios);
    for (var i = 0; i < number_charities; i++) {
    fontsizes[i]=(init_fontsize*3)*ratios[i];
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

var height_ctr=d3.select("svg").attr("height");
var width_ctr=d3.select("svg").attr("width");
console.log("Height",height_ctr);
var text_x,text_y=0;
var init=[width_ctr/2,400];
console.log(init);
var init_fontsize=20;
function start(){
if (number_charities==3) {
  data[3] = { x: init[0]+200, y: init[1]-200 };
  data[1] = { x: init[0], y: init[1]+200 };
  data[2] = { x: init[0]-200, y: init[1]-200 };
  data[0] = { x: init[0], y: init[1] };

for (var i = 1; i <= number_charities; i++) {
  if (data[i].y > data[0].y )
  {
    text_y= data[i].y+40;
  }
  else {
    text_y= data[i].y-40;
  }

  if (data[i].x > data[0].x )
  {
    text_x= data[i].x-40;
  }
  else {
    text_x= data[i].x+40;
  }

  svg.append("text")
     .attr('id','textelement'+i)
     .attr("y", text_y)//magic number here
     .attr("x", text_x)
     .attr('text-anchor', 'middle')
     .attr('font-size',init_fontsize )
     .attr("class", "myLabel")
     .text(char_names[i-1]);
}
}
else if(number_charities==2){
  data[1] = { x: init[0], y: init[1]-200 };
  data[2] = { x: init[0], y: init[1]+200 };
  data[0] = {  x: init[0], y: init[1] };

  for (var i = 1; i <= number_charities; i++) {

    if (data[i].y > data[0].y )
    {
      text_y= data[i].y+40;
    }
    else {
      text_y= data[i].y-40;
    }

    if (data[i].x > data[0].x )
    {
      text_x= data[i].x-20;
    }
    else {
      text_x= data[i].x+20;
    }
  svg.append("text")
     .attr('id','textelement'+i)
     .attr("y", text_y)//magic number here
     .attr("x", text_x)
     .attr('text-anchor', 'middle')
     .attr('font-size',init_fontsize )
     .attr("class", "myLabel")//easy to style with CSS
     .text(char_names[i-1]);

}
}
else if(number_charities==4){
  data[1] = { x: init[0]-200, y: init[1]+200 };
  data[2] = { x: init[0]-200, y: init[1]-200 };
  data[3] = { x: init[0]+200, y: init[1]+200 };
  data[4] = { x: init[0]+200, y: init[1]-200 };
  data[0] = { x: init[0], y: init[1] };


  for (var i = 1; i <= number_charities; i++) {

        if (data[i].y > data[0].y )
        {
          text_y= data[i].y+40;
        }
        else {
          text_y= data[i].y-40;
        }

        if (data[i].x > data[0].x )
        {
          text_x= data[i].x-40;
        }
        else {
          text_x= data[i].x+40;
        }
  svg.append("text")
     .attr('id','textelement'+i)
     .attr("y", text_y)//magic number here
     .attr("x", text_x)
     .attr('text-anchor', 'middle')
     .attr('font-size',init_fontsize )
     .attr("class", "myLabel")//easy to style with CSS
     .text(char_names[i-1]);

}
}
else if(number_charities==1){

  data[0] = { x: init[0], y: init[1] };

  svg.append("text")
     .attr('id','textelementmain')
     .attr("y", init[1]+100)//magic number here
     .attr("x", init[0])
     .attr('text-anchor', 'middle')
     .attr('font-size',40 )
     .attr('font-color','grey')
     .attr("class", "myLabel")//easy to style with CSS
     .text(char_names[0]+" Rs"+donateamount);

     var circle = svg.selectAll('circle').data(data);
     circle.enter().append('circle').attr('r', 0).transition().duration(500).attr('r', 30);
     circle.attr('cx', function(d) { return d.x; })
           .attr('cy', function(d) { return d.y; })
           .style('fill','grey');


}
}

start();
updatePath();
updateCircle();

svg.on('mousedown', function(){
    var m = d3.mouse(this);
            updateCircle();
            console.log(data);

            d3.selectAll('.centroid').call(dragC);
            paths[0].call(dragP);
            paths[1].call(dragP);
            paths[2].call(dragP);
            count++;
            console.log(data);
});

});

}
