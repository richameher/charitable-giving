// parameters- keywords for charity selected, ratios
// no return, draw a wordcloud

var svgcommon = d3.select("#wordcloud")
                .append("svg")
                .attr({ width: 920, height: 800 })
                .classed("grid-container", true);

var grid = svgcommon.append("g")
  .attr("id", "grid")
  .attr("class", "grid");
function remove_keywords()
{
  d3.select("#wordcloud").select("svg").remove();
  svgcommon = d3.select("#wordcloud")
                  .append("svg")
                  .attr({ width: 920, height: 800 })
                  .classed("grid-container", true);

  grid = svgcommon.append("g")
    .attr("id", "grid")
    .attr("class", "grid");
}

function random(pt){
  var imgw;
  if (pt==1)
  {
    if (Math.random()>=0.5)
      imgw= 460 - Math.random()*200;
      else {
        imgw= 460 +Math.random()*200 ;
      }
  }
  else {
    if (Math.random()>=0.5)
      imgw= 400+ Math.random()*200 ;
  else {
    imgw= 400- Math.random()*200 ;
  }
  }
  return imgw;
}
function initial_keywords(ratios,char_id_map){
  var active_charities=JSON.parse(sessionStorage.getItem("SelectedCharities"));
  var number_charities=Object.keys(active_charities).length;
  var charityidTocampid=JSON.parse(sessionStorage.getItem("charityidTocampid"));

d3.csv("data/keyword_images.csv", function(dataset) {

  for (var key in active_charities) {
      if (active_charities.hasOwnProperty(key)) {
        for (i = 0; i < dataset.length; i++) {
          if (charityidTocampid[key] === dataset[i]["CampaignID"]){
              // get filename for charityid
              var elid=dataset[i]["filename"].split(".")[0]+"_"+dataset[i]["CampaignID"]; //unique id per charity image
              if (!document.getElementById(elid))
              {
                // var imgs = svgcommon.selectAll("image").data([0]);
                    console.log(elid);
                    grid
                    // .append("div")
                    .append("svg:image")
                    .attr('x', random(1))
                    .attr('y',random(0))
                    .attr('width', "12%")
                    .attr('height', "10%")
                    .attr("class","keywordImg")
                    .style("z-index",-1)
                    // .attr("transform", "scale(1.2)")
                    .attr("xlink:href", "data/kw_imgs/"+dataset[i]["filename"])
                    .attr('id',elid);

              }
              else{

                svgcommon
                .selectAll('#'+elid)
                .attr('width', 420*ratios[char_id_map.indexOf(key)])
                .attr('height', 400*ratios[char_id_map.indexOf(key)])
                .style("z-index",3);
              }
            }


    }
  }

}


  });
}
function dragstarted(selection) {
  console.log(selection);
  // selection.attr("transform", "scale(1.2)");
  // selection.attr("width", "40%");
  // selection.attr("height", "auto");
  selection.each(function() {
  this.parentNode.appendChild(this);
});
}






// imgss = d3.select("#wordcloud")//.selectAll("#image")//d3.selectAll("div")
// console.log("ready");
// imgss.on("mouseover",function() {
//   console.log("this item is selected",d3.select(this));
// })
document.addEventListener('mousemove', (event) => {
	// console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
  alpha = document.elementFromPoint(event.clientX,event.clientY)
  // console.log(alpha);
  console.log(alpha);
  d3.selectAll("div").on("mouseover", function() {
      d3.select('#'+alpha.id)
    .call(dragstarted)
});

    // .moveToFront()

  })
