  /*DOC READY : inspector shows an eror with $ not defined in doc ready. Is it supposed to be 
  $() or 
  $(name of my file) or 
  just $(document)?*/

$(document).ready(function() {
	console.log("ready!");
});


$( "a:first" ).click(function( event ) {
  event.preventDefault();
  $( "<div>" )
    .append( "default " + event.type + " prevented" )
    .appendTo( "#log" );
});




  /*READMORE/LESS #1*
  I know there is a way to write this in MUCH less code - 
  wanted to get this to work, so will go through with you guys 
  Monday on how to shorten this up!*/


  $("#readless1").hide();
  
function readless1Appear() {
  $("#readless1").slideDown();
  $("#readmore1").hide();
 };
 
  function readmore1Appear() {
   $('#readmore1').slideDown();
   $("#readless1").hide();
 };

  $("#readmore1").click(readless1Appear);
  $("#readless1").click(readmore1Appear);


  /*READMORE/LESS #2*/

    $("#readless2").hide();

function readless2Appear() {
  $("#readless2").slideToggle();
  $("#readmore2").hide();
 };
 
  function readmore2Appear() {
   $('#readmore2').slideToggle();
   $("#readless2").hide();
 };

  $("#readmore2").click(readless2Appear);
  $("#readless2").click(readmore2Appear);

