const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = ["mon" , "tue", "wed", "thu", "fri", "sat", "sun"];

// Get Item from Array
console.log(daysOfWeek[4]);

// Add one more day to the Array
daysOfWeek.push("day");

console.log(daysOfWeek);

const playerName = "payer1";
const playerPoints = 1000;
const playerHandsome = false;
const playerFat = "little bit";

const player = {
    name: "player",
    points : 1000,
    handsome : false,
    fat : true
}

console.log(player);
console.log(player.name);
console.log(player["name"]);

console.log(player);
player.handsome = true;
console.log(player);
player.age = 17;
console.log(player);
 


