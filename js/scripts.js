//=================//
// EVENT LISTENERS //
//=================//
var modal = document.getElementById("modal");
document.getElementById("btnRoll").addEventListener("click", newRoll);
document.getElementById("btnReroll").addEventListener("click", repeatRoll);
document.getElementById("btnClose").addEventListener("click", function(){
	modal.style.display = "none";
});
window.addEventListener("click", function(event){
	if (event.target == modal) {
		modal.style.display = "none";
	}
});
document.getElementById("inpDice").addEventListener("change", function(){
	if (this.value > 20){
		this.value = 20;
	}
});

function newRoll (){
	var rollContainer = document.getElementById("roll-container");
	var diceNumber = document.getElementById("inpDice").value;
	var diceType = document.getElementById("inpType").value;
	var i;
	var r;

	if (diceNumber == 0){
		rollContainer.innerHTML = "";
		rollContainer.innerHTML += "<p>Please select an amount of dices to be rolled and try again.</p>";
	} else {
		rollContainer.innerHTML = "";
		for (i = 0; i < diceNumber; i++){
			r = Math.floor(Math.random() * diceType + 1);
			
			if (r == 1){
				rollContainer.innerHTML += '<div class="roll-bad"><p>'+r+'</p></div>';
			} else if (r == diceType){
				rollContainer.innerHTML += '<div class="roll-good"><p>'+r+'</p></div>';
			} else {
				rollContainer.innerHTML += '<div class="roll-regular"><p>'+r+'</p></div>';
			}
		}
	}

	modal.style.display = "block";
}

function repeatRoll(){
	modal.style.display = "none";
	newRoll();
}