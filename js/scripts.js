$(document).ready(function(event) {


  $("form#questions").submit(function(event) {
var listitem = ["#firstitem", "#seconditem", "#thirditem", "#fourthitem"]


 var list = [];
 listitem.forEach(function(item) {
   var final = $(item).val();
   //value from the input that the user supplied

   // push that value into an array outside of this function
   list.push(final);
 })

 alert(list);
list.sort();
// debugger;
var upperCaseList = list.map(function(word) {
  return word.toUpperCase();
});

upperCaseList.forEach(function(finallist) {
  console.log(finallist);
  $("ul#answer").append("<li>" + finallist + "</li>");
});

$("#resultdiv").removeClass("hide");
event.preventDefault();


});

});
