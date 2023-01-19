// #1
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
let markBMI = markWeight / (markHeight ** 2);
let johnBMI = johnWeight / (johnHeight ** 2);
let markHigherBMI = markBMI > johnBMI;
console.log("Valores: " + markBMI + ", " + johnBMI);
console.log("O valor de markHigherBMI é: " + markHigherBMI);

// #2
if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${(markBMI)} is higher than John's! ${johnBMI}`)
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's! ${markBMI}`)
}

// #3
const dolphinsScore1 = 96;
const dolphinsScore2 = 89;
const dolphinsScore3 = 108;
const koalasScore1 = 88;
const koalasScore2 = 91;
const koalasScore3 = 110;
const averageDolphins = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const averageKoalas = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log(`Dolphins Win!`);
} else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
    console.log(`Koalas Win!`);
} else if (averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100) {
    console.log("It's a DRAW! :O");
} else {
    console.log("Sorry, no winners this time!");
}

// #4
let bill = 275;
let tip;
(bill >= 50 && bill <= 300) ? (tip = 0.15 * bill) : (tip = 0.20 * bill);
console.log(`Bill Value: ${bill}
Tip value: ${tip}
Total: ${bill + tip}`);