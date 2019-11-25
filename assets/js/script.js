var c = document.getElementById("mon_canvas");
 var ctx = c.getContext("2d");

//carrée
ctx.beginPath();
ctx.rect(0,0,400,400);
ctx.closePath();
ctx.fillStyle="blue";
ctx.fill();

// moustache
ctx.beginPath();
ctx.moveTo(150,75);
ctx.bezierCurveTo(150,60,180,15,200,75);
ctx.fillStyle="#FFFFFF";
ctx.fill();
// bouche
ctx.beginPath();
ctx.moveTo(100,100);
ctx.quadraticCurveTo(170,35,250,100);
ctx.moveTo(100,100);
ctx.quadraticCurveTo(170,165,250,100);
ctx.fillStyle="#E0E1F3";
ctx.fill();
