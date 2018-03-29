'use strict'
var data = {
  totalRevs:0,
  totalStridesToRedeem:0,
  totalRPS: 0
};

setInterval(goGo,300);

function goGo() {
  data.totalRevs += data.totalRPS;
  data.totalStridesToRedeem += data.totalRPS;
  $("#coyote").css({ 'transform': 'rotate(' + data.totalRevs + 'deg)'});
  updateReport();
}

function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalStridesToRedeem));
  $("#miles").text((data.totalRPS/70.4).toFixed(2));
}


$("#coyote").click(function (){
  data.totalRevs ++;
  data.totalStridesToRedeem ++;
  $("#coyote").css({ 'transform': 'skewY(2000deg)'});
  updateReport();
})

$(".button").click(function (){
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) <= data.totalStridesToRedeem ) {
    data.totalStridesToRedeem -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.totalRPS += parseFloat($(this).data( "val" ));
    $( this ).children("span").html( parseInt($( this ).children("span").html()*1.1));
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.1) );
  }
  updateReport();


})
