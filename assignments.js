// 1
const country = "Brazil";
const continent = "South America";
let population = 200;
console.log(country);
console.log(continent);
console.log(population);

// 2
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// 3
language = "Brazilian Portuguese";

// 4
let halfPopulation = population / 2;
halfPopulation++;
const comparePopulation = halfPopulation > 6;
const averagePopulation = 33 > halfPopulation;
const description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);

// 5
const nome = "Chamonho";
const present2 = `Hi there! I'm ${nome},
a ${2022 - 1996} years old guy!`;
console.log(present2);

// 6
if (population > 33) {
    console.log(`${country}'s population is above average.`)
} else {
    console.log(`${country}'s population is ${33 - population} below average.`)
}
population = 13;
if (population > 33) {
    console.log(`${country}'s population is above average.`)
} else {
    console.log(`${country}'s population is ${33 - population} below average.`)
}
population = 130;
if (population > 33) {
    console.log(`${country}'s population is above average.`)
} else {
    console.log(`${country}'s population is ${33 - population} below average.`)
}
population = 200;

/* 7
'9' - '5' = 4
'19' - '13' + '17' = '617'
'19' - '13' + 17 = 23
'123' < 57 = false
5 + 6 + '4' + 9 - 4 - 2 = 117
*/

// 8
let numNeighbours = Number(prompt("How many neighbours countries does your contry have?"));
if (numNeighbours === 1) {
    console.log("Only 1 border!");
} else if (numNeighbours > 1) {
    console.log("More than 1 border!");
} else {
    console.log("No borders.");
}

// 9
if (language === "English" && population < 50 && !isIsland) {
    console.log(`You should live in ${country}! :)`);
} else {
    console.log(`${country} does not meet your criteria! :(`)
}

// 10
const language2 = "Mandarin";
switch (language2) {
    case "Chinese":
    case "Mandarin":
        console.log("Most number of native speakers!");
        break;
    case "Spanish":
        console.log("2nd place in number of native speakers.");
        break;
    case "English":
        console.log("3rd place!");
        break;
    case "Hindi":
        console.log("Number 4");
        break;
    case "Arabic":
        console.log("5th most spoken language.");
        break;
    default:
        console.log("Great language too! :D");
}

// 11
const resposta = population > 33 ? `${country}'s population is above average` : `${country}'s population is below average.`;
console.log(resposta);