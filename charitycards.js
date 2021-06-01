d3.csv("data/charities.csv", function(dataset) {

  var newdata=dataset;
  console.log(sessionStorage.getItem("region"));
  console.log(sessionStorage.getItem("cause"));
  var region=sessionStorage.getItem("region");
  var causes=sessionStorage.getItem("cause");

  for (i = 0; i < newdata.length; i++) {

    console.log(newdata[i]["region"],newdata[i]["Cause"],region,causes);
    if (newdata[i]["region"]==region && newdata[i]["Cause"]==causes )
    {
    console.log(newdata[i]);
    var desc = document.createTextNode(newdata[i]["description"]);

    var name = document.createTextNode(newdata[i]["Name"]);

    var cause = document.createTextNode(newdata[i]["Cause"]);

    let getcharitylink = ("https://logo.clearbit.com/"+newdata[i]["web_link"]+"");
    // console.log(getcharitylink);
    var image = document.createElement("IMG");
    image.setAttribute("src", getcharitylink);
    image.setAttribute("alt", "Avatar");
    image.setAttribute("style", "width:20%");

    var column = document.createElement("div");
    column.classList.add("column");

    var card = document.createElement("div");
    card.classList.add("card");


    var h3=document.createElement("h3");
    h3.appendChild(name);

    var p=document.createElement("p");
    p.appendChild(desc);

    var p1=document.createElement("p");
    p1.appendChild(cause);

    card.appendChild(image);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(p1);


    column.appendChild(card);

    var element=document.getElementById("row");
    element.appendChild(column);
}
  }
});
