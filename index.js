var numOfDrums = document.querySelectorAll(".drum").length;
for(var i=0; i<numOfDrums; i++){
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
	alert("You hit the drum!");
		});
}

