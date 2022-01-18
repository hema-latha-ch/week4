//created by sunkara

//create event listener for load event
window.addEventListener("load", function(){
	//create event listner for button
	document.getElementById("rollButton").addEventListener("click", rollDice, false);
	
	
}// anonymous function -- for load event.
,false);

function rollDice()
{
	//declare a blank array for die1, die2 and sumofDice
	diceArray = []; //blank array;
	
	//call function to generate dice
	generateDice(diceArray);
	
	//display the relevent images:
	document.getElementById("die1img").src = diceArray[1]+".bmp";
	document.getElementById("die2img").src = diceArray[2]+".bmp";
	//display the total:
	document.getElementById("rollLabel").innerHTML = diceArray[0];
	
	
	
}//end rollDice

function generateDice(incomingArray)
{
	// generate two random numbers between 1 and 6 and add it to the array as element 1 and 2. 0th element is total.
	
	 let die1 = Math.floor(1+(Math.random()*6));
	 let die2 = Math.floor(1+(Math.random()*6));
	 //push the dice and totals into array:
	 
	incomingArray.push((die1+die2), die1, die2);
}// end generateDice