// parameters- keywords for charity selected, ratios
// no return, draw a wordcloud

var svgcommon = d3.select("#wordcloud").append("svg").attr({ width: 920, height: 800 });
function remove_keywords()
{
  d3.select("#wordcloud").select("svg").remove();
  svgcommon = d3.select("#wordcloud").append("svg").attr({ width: 920, height: 800 });
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
console.log("Loading initial charities");
d3.csv("data/keyword_images.csv", function(dataset) {
  for (var key in active_charities) {
      if (active_charities.hasOwnProperty(key)) {
        for (i = 0; i < dataset.length; i++) {
          if (key === dataset[i]["CharityID"]){
              // get filename for charityid
              console.log("Imgefilename",dataset[i]["filename"].split(".")[0]);
              var elid=dataset[i]["filename"].split(".")[0]+"_"+dataset[i]["CharityID"]; //unique id per charity image
              if (!document.getElementById(elid))
              {
                // var imgs = svgcommon.selectAll("image").data([0]);
                    svgcommon
                    .append("svg:image")
                    .attr('x', random(1))
                    .attr('y',random(0))
                    .attr('width', 120)
                    .attr('height', 100)
                    .attr("class","keywordImg")
                    .style("z-index",1)
                    .attr("xlink:href", "data/kw_imgs/"+dataset[i]["filename"].split(".")[0]+".png")
                    .attr('id',elid);
              }
              else{
                console.log(key, ratios[char_id_map.indexOf(key)],elid);
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
