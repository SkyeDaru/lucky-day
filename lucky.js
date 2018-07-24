
var message = "It's your lucky day!"
console.log(message);

document.write("<h1>");
document.write("It's your lucky day");
document.write("</h1>");


var time = new Date();
var hour = time.getHours();
hour = hour % 12;
hour = hour ? hour : 12;
var minutes = time.getMinutes();
var am_pm = hour >= 12 ? 'am' : 'pm'; 

time = hour + ":" + minutes;

var text;

if (am_pm == "am") {
  if (hour >= 12 || hour < 6 && am_pm == "am" ) {
  text = "Good Night!";
} else  {
  text = "Good Morning!";
  }

} else if (am_pm == "pm"){
  if (hour >= 12 || hour < 6 ) {
  text = "Good Afternoon!";
} else {
  text = "Good Evening!";
}

}



document.write("<p>" + "The time is currently " + time + am_pm + " - " + text + "</p>");












  var colors = ["red", "orange", "yellow", "green", "blue", "pink"];
  var num = Math.floor(Math.random() * colors.length);
  var selected = colors[num];

  document.write('<div id = "box">');
  document.write("<p>" + "Today's lucky color is " + selected + "</p>");
  document.write("</div>");

  box.style.backgroundColor = colors[num];





  var balls = ["ball_1.png", "ball_2.png", "ball_3.png", "ball_4.png", "ball_5.png",
  "ball_6.png", "ball_7.png", "ball_8.png", "ball_9.png"];

  var a = Math.floor(Math.random() * balls.length);
  var b = Math.floor(Math.random() * balls.length);
  var c = Math.floor(Math.random() * balls.length);

document.write("<h2>" + "YOUR THREE LUCKY NUMBERS ARE:" + "</h2>");
document.write('<div class = "pics">');
document.write('<img src="'+balls[a]+'" />');
document.write('<img src="'+balls[b]+'" />');
document.write('<img src="'+balls[c]+'" />');
document.write('</div>')
