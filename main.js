/*global fetch*/

function calculate(){
    //alert("hi");
    var bit_url="https://api.coindesk.com/v1/bpi/currentprice.json";
    fetch(bit_url)
    .then(function(response){
        return response.json();
    })
    .then(myJson=>{
        console.log(myJson.bpi.USD.rate);
        var value=document.getElementById("money");
        value.innerHTML="USD "+myJson.bpi.USD.rate;
    });
}