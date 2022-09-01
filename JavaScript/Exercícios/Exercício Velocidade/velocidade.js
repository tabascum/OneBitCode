const firstCar = prompt("Enter the first car's name:");
const firstSpeed = prompt("Enter the speed of the first vehicule:");

const secondCar = prompt("Enter the second car's name:");
const secondSpeed = prompt("Enter the speed of the second vehicule:");

if (firstSpeed > secondSpeed) {
  alert(firstCar + " is running faster than " + secondCar);
} else if (firstSpeed < secondSpeed) {
  alert(secondCar + " is running faster than " + firstCar);
} else {
  alert(firstCar + " and " + secondCar + "are at the same speed!");
}
