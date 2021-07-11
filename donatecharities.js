function donatecharities()
{
d3.csv("data/charities_list_clean.csv", function(dataset) {

  var active_charities=JSON.parse(sessionStorage.getItem("SelectedCharities"));
    for (var key in active_charities) {
        if (active_charities.hasOwnProperty(key)) {
            if (dataset[key-1]["LinktoPayment"]!="NULL"){
             let entity=dataset[key-1]["LinktoPayment"];
             //Only the first Tab opens , fix this
             window.open(dataset[key-1]["LinktoPayment"] ,dataset[key-1]["CharityID"]);
             console.log(entity);
           }
    }
    }
});
console.log("Clciking");
}
