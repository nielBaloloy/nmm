var mainimages=document.getElementById("mainimages");
var q1=document.getElementById("q1");
var q2=document.getElementById("q2");
var q3=document.getElementById("q3");

q1.addEventListener("click", function() {
    
    mainimages.src=q1.src;
  });
q2.addEventListener("click", function() {
    mainimages.src=q2.src;
  });
q3.addEventListener("click", function() {
    mainimages.src=q3.src;
    
  });
