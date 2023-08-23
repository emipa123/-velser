const currentHour = new Date().getHours();

// Determine the appropriate greeting based on the current time
let greeting = "";
if (currentHour >= 5 && currentHour < 10) {
  greeting = "Godmorgen";
} else if (currentHour >= 10 && currentHour < 18) {
  greeting = "Goddag";
} else if (currentHour >= 18 && currentHour < 24) {
  greeting = "Godaften";
} else {
  greeting = "Godnat";
}

// Print the greeting in the console
console.log(greeting);
