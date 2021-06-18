function geticon(entity)
{
  let geticonlink = "";
  console.log(entity);
  if (entity.includes("Cash")){
    geticonlink=("data/icons/Cash.png");
  }
  else if (entity.includes("Transport")){
    geticonlink=("data/icons/Transport.png");
  }
  else if (entity.includes("Oxygen")){
    geticonlink=("data/icons/OxygenInfra.png");
  }
  else if (entity.includes("Meal")){
    geticonlink=("data/icons/Meal.png");
  }
  else if (entity.includes("Covid")){
    geticonlink=("data/icons/CovidCare.png");
  }
  else {
    console.log("No cause");
  }
  return geticonlink;
}

function removeimpact()
{
  d3.select("#improw").selectAll("div").remove();
}


function loadimpact(){

  var active_charities=JSON.parse(sessionStorage.getItem("SelectedCharities"));

  var donateamount=JSON.parse(sessionStorage.getItem("donateamount"));
  let char_keywords=[];
  var desc="";

  d3.csv("data/charities_list_clean.csv", function(dataset) {

  for (var key in active_charities) {
      if (active_charities.hasOwnProperty(key)) {
        console.log(active_charities);
           let entity_price=parseInt(dataset[key-1]["cost_per_relief"]);
           let entity=dataset[key-1]["relief_type"];
           let sp_entity=dataset[key-1]["entity_provided"];

           var image = document.createElement("IMG");
           image.setAttribute("src", geticon(entity));
           image.classList.add("icons");

        if (entity_price <= donateamount)
           {
           var no_ofentities= Math.floor(donateamount/entity_price);
           desc = document.createTextNode("You'd help with buying "+ no_ofentities+" "+entity+ " where each "+ entity+" includes "+sp_entity);
         }
         else{
           var no_ofppl= Math.floor(entity_price/donateamount);
           desc = document.createTextNode("You along with "+ (no_ofppl-1)+" other people will help buy 1 "+entity + " where each "+ entity+" includes "+sp_entity);
         }

         var para=document.createElement("h2");
         para.appendChild(desc);
         para.setAttribute('id',"desc_"+String(dataset[key-1]["CharityID"]));

         var impactcard = document.createElement("div");
         impactcard.appendChild(image);
         impactcard.appendChild(para);
         impactcard.classList.add("impactcard");

         var element=document.getElementById("improw");
         element.appendChild(impactcard);

        }
      }
  });
}

function changeimpact(donationamt,char_id_map){
    console.log("Character ID Map",char_id_map);
    var active_charities=JSON.parse(sessionStorage.getItem("SelectedCharities"));
    var number_charities=Object.keys(active_charities).length;
    var desc="";
    d3.csv("data/charities_list_clean.csv", function(dataset) {

    for (var key in active_charities) {
        if (active_charities.hasOwnProperty(key)) {
          console.log(active_charities);
          var index=char_id_map.indexOf(key);
          let entity_price=parseInt(dataset[key-1]["cost_per_relief"]);
          let entity=dataset[key-1]["relief_type"];
          let sp_entity=dataset[key-1]["entity_provided"];

          if (entity_price <= donationamt[index])
             {
             var no_ofentities= Math.floor(donationamt[index]/entity_price);
             desc = "You'd help with buying "+ no_ofentities+" "+entity+ " where each "+ entity+" includes "+sp_entity;
           }
           else{
             var no_ofppl= Math.floor(entity_price/donationamt[index]);
             desc = "You along with "+ (no_ofppl-1)+" other people will help buy 1 "+entity + " where each "+ entity+" includes "+sp_entity;
           }

          document.getElementById("desc_"+dataset[key-1]["CharityID"]).innerHTML=desc;

        }
      }
    });

}
