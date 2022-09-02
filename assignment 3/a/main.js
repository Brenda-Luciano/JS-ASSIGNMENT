function checkValues() {
  var value_1 = parseInt(document.getElementById("value_1").value);

  var value_2 = parseInt(document.getElementById("value_2").value);

  var greater_value = 0

  if (value_1 > value_2) {
    greater_value = value_1
  } 
  else if (value_2 > value_1) {
    greater_value = value_2
  } 
  else {
    greater_value = "The values are the same"
  }

  document.getElementById("answer").innerHTML = greater_value;
}