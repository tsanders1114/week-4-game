
var randomNumber;
var lost= 0;
var win=0;
var lastNumber=0;

//setters 
//getters
var resetAndStart = function(){

	$(".crystals").empty();

	var images=[
		"Crystal1.jpg",
		"Crystal2.jpg",
		"Crystal3.jpg",
		"Crystal4.jpg",
		];
//
randomNumber= Math.floor(Math.random() * 69) + 30;

	

	$("#result").html("Random Result: " + randomNumber);

	for (var i = 0; i < 4; i++){

		var random = Math.floor(Math.random()*11) + 1;
		//console.log(random);
		

		var crystal = $("<div>");
			crystal.attr({
				"class": "crystal",
				"data-random": random

			});

		$(".crystals").append(crystal);

	}
	$("#Score").html("Total Score:" + lastNumber);

}

resetAndStart();

$(document).on("click", ".crystal", function() {
	
	var num = parseInt($(this).attr("data-random"));

	lastNumber += num;

	$("#Score").html("Total Score:" + lastNumber);

		

	if(lastNumber > randomNumber){
		
		lost++;

		$("#Lost").html("YOU Lost:" + lost);

		lastNumber=0;

		resetAndStart();
		
	}
	else if(lastNumber === randomNumber){
		
		win ++;

		$("#Win").html("YOU Win:" + win);

		lastNumber=0;

		resetAndStart();
	}
	

});


//spedudo coding 


// a game with 4 crystals and random result
//every crystal needs to have a random number between 1-12 
//A new  number should be generated eveery single time we win or lose
//to those 4 crystals 
//when clicking any crystal it should be adding with the previous result until it hits the total score
// untill it equals the total score 
//if greater than the random result equal then we lost and decrement a lost & start over 
//if its equal then we increment a win counter

