/*var kleur = "groen";
var input = "blauw";
kleur = kleur.split("");

console.log(kleur);

for (var i = 0; i <= kleur.length - 1; i++) {
	for (var j = 0; j <= input.length - 1; j++) {
		if (kleur[i] == input[j] ) {
			console.log("Ja, " + kleur[i] + " staat gelijk aan " + kleur[j]); 
		} else {
			console.log("Nee, " + kleur[i] + " staat NIET gelijk aan " + kleur[j]);
		}
	}
} */


var kleuren = ["groen", "blauw", "oranje", "rood", "geel", "grijs"];
var kleur = {eerste:"groen", tweede:"blauw", derde:"oranje", vierde:"rood", vijfde:"geel", zesde:"grijs"}
document.getElementById("kleuren").innerHTML = kleuren;
kleuren.sort(function() { return 0.5 - Math.random() });


Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
        
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}

var tempArray = [
{name: "blue", image:"img/blue.gif"},
{name: "green", image:"img/green.gif"},
{name: "orange", image:"img/orange.gif"},
{name: "red", image:"img/red.gif"},
{name: "yellow", image:"img/yellow.gif"},
{name: "grey", image:"img/grey.gif"}
]; 	
var len = tempArray.length
for (var i = 0; i < tempArray.length; i += 1) {
    var color = getRandomItem(tempArray);
    boldStuffs[i].innerHTML = color.name + '<img src="'+color.image+'">';
}
tempArray.shuffle();
 
// and the result is...
alert(tempArray);       

//var i;
//for (i = 0; i < 896; i = i + 8) {
//    document.getElementById("demo").innerHTML += i + "<br>";
//}
