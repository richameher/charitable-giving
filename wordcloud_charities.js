// parameters- keywords for charity selected, ratios
// no return, draw a wordcloud

var svgcommon = d3.select("#wordcloud").append("svg").attr({ width: 920, height: 800 });
function remove_keywords()
{
  d3.select("#wordcloud").select("svg").remove();
  svgcommon = d3.select("#wordcloud").append("svg").attr({ width: 920, height: 800 });
}

function initial_keywords(ratios,char_keywords)
{
  var active_charities=JSON.parse(sessionStorage.getItem("SelectedCharities"));
  var number_charities=Object.keys(active_charities).length;
  var word_size={};

  var number_charities=ratios.length;
  for (var i = 0; i < number_charities; i++) {

      var words = char_keywords[i].split(/[ '\-\(\)\*":;\[\]|{},.!?]+/);

        words.forEach(function(word){

          if (word != ""){
            if (word_size[word]){
              word_size[word]=word_size[word]+ratios[i];

            } else {
              word_size[word]=ratios[i];
            }
          }
        });

}
console.log(word_size);
var data=[];
for (var key in word_size) {
  if (word_size.hasOwnProperty(key)) {
    if (!document.getElementById("wordcloud_"+key))
    {
      svgcommon.append("text")
         .attr('id',"wordcloud_"+key)
         .attr("y", Math.random()*600+100)//magic number here
         .attr("x", 200+Math.random()*400)
         .attr('text-anchor', 'middle')
         .attr('font-size',word_size[key]*80 )
         .attr('font-weight',word_size[key]*100 )
         .attr("class", "wordcloudlab")//easy to style with CSS
         .text(key);

    }
    else {
      svgcommon.selectAll('#wordcloud_'+key)
      .attr('text-anchor', 'middle')
      .attr('font-size',word_size[key]*80 )
      .attr('font-weight',word_size[key]*900)
      .attr("class", "myLabel")//easy to style with CSS
      .text(key);


    }


}
}
}
