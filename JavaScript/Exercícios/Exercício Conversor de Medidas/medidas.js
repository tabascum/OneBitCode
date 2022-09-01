const value = prompt("Enter a value in meters to convert:");
const mesure = prompt(
  "Choose a mesure to convert to:\n1. mm)\n2. cm)\n3. dm)\n4. dam\n5. hm)\n6. km)"
);

const result = parseFloat(value);

switch (mesure) {
  case "1":
    alert("The value " + value + " m = " + value * 1000 + " mm!");
    break;
  case "2":
    alert("The value " + value + " m = " + value * 100 + " cm!");
    break;
  case "3":
    alert("The value " + value + " m = " + value * 10 + " mm!");
    break;
  case "4":
    alert("The value " + value + " m = " + value / 10 + " dam!");
    break;
  case "5":
    alert("The value " + value + " m = " + value / 100 + " hm!");
    break;
  case "6":
    alert("The value " + value + " m = " + value / 1000 + " km!");
  default:
    alert("Invalid option! Select one of the displayed");
}
