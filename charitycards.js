
function load_charity()
{
d3.selectAll('div.column').remove();
d3.csv("data/charities_list_clean.csv", function(dataset) {

  var newdata=dataset;
  var active_charities={};
  var region=sessionStorage.getItem("regioninfo");
  var causes=sessionStorage.getItem("cause");
  var preselect=sessionStorage.getItem("preselect");
  var maxlength=40;

  for (i = 0; i < newdata.length; i++) {

    if (newdata[i]["region"]==region && newdata[i]["Cause"]==causes )
    {
    // var desc = document.createTextNode(newdata[i]["description"].substr(0,maxlength)+ "...");

    // var name = document.createTextNode(newdata[i]["Name"].substr(0,15));

    // var cause = document.createTextNode(newdata[i]["Cause"]);

    let getcharityimglink = ("data/Logos/img_"+newdata[i]["imgid"]+".png");
    var image = document.createElement("IMG");
    image.classList.add("charityimg");
    image.setAttribute("src", getcharityimglink);

    let getcharitylink = newdata[i]["web_link"];
    var a = document.createElement("a");
    a.setAttribute("href", getcharitylink);
    a.setAttribute("target", "_blank");

    var column = document.createElement("div");
    column.classList.add("column");



    var card_button = document.createElement("button");
    card_button.classList.add("cardbutton");
    card_button.appendChild(document.createTextNode("Select"));
    card_button.setAttribute('id',newdata[i]["CharityID"])

    // card.setAttribute('id',newdata[i]["CharityID"])


    // var h3=document.createElement("h3");
    // h3.appendChild(name);

    // var p=document.createElement("p");
    // p.appendChild(desc);

    var card = document.createElement("div");
    card.classList.add("card");

    card.appendChild(a);
    card.appendChild(image);
    // card.appendChild(h3);
    // card.appendChild(p);

    card.appendChild(card_button);
    column.appendChild(card);

    var element=document.getElementById("row");
    element.appendChild(column);
  }
}

//Richa- only for preselecting cells
if (preselect==1)
{
  preselect_cards(d3.selectAll('.cardbutton'));
}

  d3.selectAll('.cardbutton')
  .on('mousedown',function(){
    if (d3.select(this).attr('class') !='cardbutton_active')
    {
      d3.select(this).attr('class', "cardbutton_active");
      var name=(d3.select(this).attr('id'));
      document.getElementById(name).innerHTML="Unselect";
      active_charities[name]=1;
  }
  else {
    d3.select(this).attr('class', "cardbutton_inactive");
    var name=(d3.select(this).attr('id'));
    document.getElementById(name).innerHTML="Select";
    delete active_charities[name];
  }
  sessionStorage.setItem('SelectedCharities',JSON.stringify(active_charities));
  load_polygon();
  removeimpact();
  loadimpact();
  });

});
}

function preselect_cards(obj){
var active_charities=JSON.parse(sessionStorage.getItem("SelectedCharities"));

for (var key in active_charities) {
    if (active_charities.hasOwnProperty(key)) {
      document.getElementById(key).innerHTML="Unselect";
    }
  }
obj
.on('mousedown',function(){
  if (d3.select(this).attr('class') !='cardbutton_active')
  {
    d3.select(this).attr('class', "cardbutton_active");
    var name=(d3.select(this).attr('id'));
    document.getElementById(name).innerHTML="Unselect";
    active_charities[name]=1;
}
else {
  d3.select(this).attr('class', "cardbutton_inactive");
  var name=(d3.select(this).attr('id'));
  document.getElementById(name).innerHTML="Select";
  delete active_charities[name];
}
console.log("active_charities",active_charities);
sessionStorage.setItem('SelectedCharities',JSON.stringify(active_charities));
load_polygon();
removeimpact();
loadimpact();
});

d3.selectAll(".cardbutton")
.attr('class', "cardbutton_active");

sessionStorage.setItem('preselect',0);

}
