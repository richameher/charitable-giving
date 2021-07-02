function load_charity()
{
d3.selectAll('div.column').remove();
d3.csv("data/charities_list_clean.csv", function(dataset) {

  var newdata=dataset;
  var active_charities={};
  var region=sessionStorage.getItem("regioninfo");
  var causes=sessionStorage.getItem("cause");

  for (i = 0; i < newdata.length; i++) {

    if (newdata[i]["region"]==region && newdata[i]["Cause"]==causes )
    {
    var desc = document.createTextNode(newdata[i]["description"]);

    var name = document.createTextNode(newdata[i]["Name"]);

    var cause = document.createTextNode(newdata[i]["Cause"]);

    let getcharityimglink = ("data/Logos/img_"+newdata[i]["imgid"]+".png");
    var image = document.createElement("IMG");
    image.setAttribute("src", getcharityimglink);

    let getcharitylink = newdata[i]["web_link"];
    var a = document.createElement("a");
    a.setAttribute("href", getcharitylink);
    a.setAttribute("target", "_blank");

    var column = document.createElement("div");
    column.classList.add("column");

    var card = document.createElement("div");
    card.classList.add("card");
    var content = document.createElement("div");
    content.classList.add("content");
    var card_front = document.createElement("div");
    var card_back = document.createElement("div");
    card_front.classList.add("card_front");
    card_back.classList.add("card_back");
    card.setAttribute('id',newdata[i]["CharityID"])


    var h3=document.createElement("h3");
    h3.appendChild(name);

    var p=document.createElement("p");
    p.appendChild(desc);

    card_front.appendChild(a);
    card_front.appendChild(image);
    card_front.appendChild(h3);
    card_back.appendChild(p);

    // console.log(card);
    column.appendChild(card);
    card.appendChild(content);
    content.appendChild(card_front);
    content.appendChild(card_back);

    var element=document.getElementById("row");
    element.appendChild(column);
  }
}
  d3.selectAll('div.card')
  .on('mousedown',function(){
    if (d3.select(this).attr('class') !='active')
    {
      d3.select(this).attr('class', "active");
      var name=(d3.select(this).attr('id'));
      active_charities[name]=1;
  }
  else {
    d3.select(this).attr('class', "inactive");
    var name=(d3.select(this).attr('id'));
    delete active_charities[name];
  }
  sessionStorage.setItem('SelectedCharities',JSON.stringify(active_charities));
  load_polygon();
  removeimpact();
  loadimpact();
  });

});
}
