function calculateDiagonal(){
	var side = document.getElementById('side').value
	var square = Math.sqrt(2)
	var diagonal = Number(side) * square
	document.getElementById('answer').innerHTML = "The typed value was: " + side + " and the diagonal is: " + diagonal
}
