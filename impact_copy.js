function geticon(entity)
{
  let geticonlink = "";
  // //console.log(entity);
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
    //console.log("No cause");
  }
  return geticonlink;
}

function removeimpact()
{
  d3.select("#improw").selectAll("div").remove();
}

var entity_cost={};
function calc_enty_cost()
{
d3.csv("data/entity_cost.csv", function(edataset) {

  for (i = 0; i < edataset.length; i++) {
      entity_cost[edataset[i]['Entity']]=edataset[i]['Cost'];
  }
  //console.log("Enity cost dict",entity_cost);

});
}


function loadimpact(){

  var active_charities=JSON.parse(sessionStorage.getItem("SelectedCharities"));

  var donateamount=JSON.parse(sessionStorage.getItem("donateamount"));
  let char_keywords=[];
  var desc="";

  var donate_amnt_entities={};
  var image_donate={};

  calc_enty_cost();
  var DonateAmntperCharity= (donateamount/parseInt(Object.keys(active_charities).length));

  //console.log("Donation Amount per charity",donateamount,DonateAmntperCharity);
  var impact_text="If 100 other people donate as much as you then you all could contribute ";


  var impactcard = document.createElement("div");
  d3.csv("data/charities_list_clean.csv", function(dataset) {

  for (var key in active_charities) {
      if (active_charities.hasOwnProperty(key)) {

           // let entity_price=parseInt(dataset[key-1]["cost_per_relief"]);
           let entity=dataset[key-1]["relief_type"];

           var image = document.createElement("IMG");
           if (!image_donate.hasOwnProperty(entity))
              {
                image_donate[entity]=1;
                image.setAttribute("src", geticon(entity));
                image.classList.add("icons");
                impactcard.appendChild(image);
              }


           let sp_entity=dataset[key-1]["entity_provided"].split(/[ '\-\(\)\*":;\[\]|{},.!?]+/);
           //console.log("enitities per charity",sp_entity,sp_entity.length);
           // 100 other people
           var donateamountperenty=((100*DonateAmntperCharity)/sp_entity.length);

           // for each enity per charity calculate how many entities can be bough
           for (i = 0; i < sp_entity.length; i++) {

                    var no_ofentities= Math.floor(donateamountperenty/entity_cost[sp_entity[i]]);
                    //console.log("Charity special enity",sp_entity[i]);

                    if (donate_amnt_entities.hasOwnProperty(sp_entity[i])){
                      donate_amnt_entities[sp_entity[i]]=parseInt(donate_amnt_entities[sp_entity[i]])+no_ofentities;
                    }
                    else {
                      donate_amnt_entities[sp_entity[i]]=no_ofentities;
                    }


                }
              }
        }

      for (var entkey in donate_amnt_entities) {
        if (donate_amnt_entities.hasOwnProperty(entkey)) {
            impact_text=impact_text+" "+donate_amnt_entities[entkey]+ " "+entkey+",";
        }
      }
      //console.log(donate_amnt_entities);
      var para=document.createElement("h3");
      para.appendChild(document.createTextNode(impact_text.replace(/,\s*$/, "")));

      para.setAttribute('id',"MAIN");

      impactcard.appendChild(para);
      impactcard.classList.add("impactcard");

      var element=document.getElementById("improw");
      element.appendChild(impactcard);
  });
}

function changeimpact(donationamt,char_id_map){
    //console.log("Character ID Map",char_id_map);
    var active_charities=JSON.parse(sessionStorage.getItem("SelectedCharities"));
    var number_charities=Object.keys(active_charities).length;
    var desc="If 100 other people donate as much as you then you all could contribute";
    var donate_amnt_entities={};

    //console.log("Donation Amt",char_id_map);
    d3.csv("data/charities_list_clean.csv", function(dataset) {

    for (var key in active_charities) {
        if (active_charities.hasOwnProperty(key)) {
          let sp_entity=dataset[key-1]["entity_provided"].split(/[ '\-\(\)\*":;\[\]|{},.!?]+/);
          var donateamountperenty=((100*donationamt[char_id_map.indexOf(key)])/sp_entity.length);
          //console.log("Donation amount for charity",key,donationamt[char_id_map.indexOf(key)],donateamountperenty);
          for (i = 0; i < sp_entity.length; i++) {
                    var no_ofentities= Math.floor(donateamountperenty/entity_cost[sp_entity[i]]);

                   //console.log("Charity special enity",sp_entity[i]);
                   if (donate_amnt_entities.hasOwnProperty(sp_entity[i])){
                     donate_amnt_entities[sp_entity[i]]=parseInt(donate_amnt_entities[sp_entity[i]])+no_ofentities;
                   }
                   else {
                     donate_amnt_entities[sp_entity[i]]=no_ofentities;
                   }
               }
        }
      }

      ////console.log(donate_amnt_entities);
      for (var entkey in donate_amnt_entities) {
        if (donate_amnt_entities.hasOwnProperty(entkey)) {
            desc=desc+" "+ donate_amnt_entities[entkey];
            if (parseInt(donate_amnt_entities[entkey]) > 1 && entkey!='cash'){
                entkey=entkey+"s";
            }
            else {
              entkey="Rs";
            }
            desc=desc+" "+" "+entkey+",";

        }
      }
      document.getElementById("MAIN").innerHTML=desc.replace(/,\s*$/, "");
    });

}