// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);
// console.log mostra no LOG do navegador
// o resultado de uma dada operação.

// let firstName = "Jonas";
// console.log(firstName);
// Nome das variáveis é usado camelCase
// a primeira palavra minúscula, e a segunda
// maiúscula, por exemplo: firstNamePerson

// Jamais comece nome de variáveis com UPPERCASE!
// Uppercase é usado em POO em JavaScript.

// Constantes são escritas como CAPSLOCK
// como conveção, para sabermos que são
// constantes. Ex: PI = 3.1415

// JavaScript possui DYNAMIC TYPING.
// O valor tem um tipo, não a variável.
// A variável simplesmente carregado o valor.

// MULTI-LINE COMMENT:
/*
Tudo que estiver dentro desse comando vira
comentário! :)
*/

// console.log(typeof firstName);
// typeof mostra o tipo da variável!

/*
--- TIPOS DE VARIÁVEIS ---
let = Declara variáveis que podem ser mudadas em tempo de execução
const = Variáveis imutáveis.
var = NÃO USADO MAIS, muito parecido com o let. Hoje em dia, só se usa let.
*/


// MATH OPERATORS
const now = 2022;
const ageAdriano = now - 1996;
const ageSarah = now - 2018;
console.log(ageAdriano, ageSarah);
console.log(ageAdriano * 2, ageAdriano / 10, 2 ** 3); // 2 ** 3 = 2³
const firstName = 'Adriano';
const lastName = 'Chamon';
console.log(firstName + " " + lastName);


// ASSIGNMENT OPERATORS
let x = 10 + 5;
console.log(x);
x += 10; // x = x + 10
x++; // x = x + 1
x--; // x = x - 1
console.log(x);


// Comparison Operators
console.log(ageAdriano > ageSarah);
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
// Adiciona na const isFullAge (dinâmicamente deduzida ser um boolean), o resultado da comparação com a age de Sarah.


// TEMPLATE LITERALS
// O símbolo é `` --> 2 crases.
const nome = "Chamonho";
const present = `Hi there! I'm ${nome}`;
// Com Template Literals, podemos colocar
// a variável dentro de ${} para concatenar
// strings e variáveis. Pode-se escrever qualquer
// operação dentro dos ${} também!
const present2 = `Hi there! I'm ${nome},
a ${2022 - 1996} years old guy!`;
// Podemos usar ENTER para pular pra próxima linha,
// o JavaScript faz um \n automaticamente
// numa expressão de ``


// IF, ELSE
const age = 19;
if (age >= 15) {
    console.log("Sarah can start driving license!");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years. :)`);
}
let century;
const birthYear = 1991;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
// Dica: quando não colocamos um detalhamento da condição,
// considera-se if x == true


// TYPE CONVERTION/COERTION
// Convertion --> Nós convertemos explicitamente.
const inputYear = "1991";
const inputYear2 = 1991;
Number(inputYear); // Transforma a variável em um NÚMERO!
String(inputYear2); // Transforma a variável em uma STRING!
// Coertion --> Conversão automática do JavaScript.
console.log("I am " + 23 + "years old."); // 23 é transformado em String automaticamente.
console.log("23" - "7" - 3); // O resultado é 13. Pois 23 e 7 são convertidos para Número automaticamente devido ao operador -


// TRUTHY AND FALSY VALUES
// Boolean(x) --> Converte o valor de x para booleano.
// 5 falsy values: 0, '', undefined, null, NaN
// Qualquer outro valor, se convertido para boolean, virará TRUE.
const teste9 = 9;
Boolean(teste9); // TRUE
Boolean(''); // FALSE


// EQUALITY OPERATORS == VS ===
// = Atribuição
// == Igualdade COM TYPE COERCION
// === Igualdade SEM TYPE COERCION (dê preferência PARA ESSE!)
// != Diferente COM TYPE COERCION
// !== Diferente SEM TYPE COERCION
const age2 = 18;
if (age === 18) {
    console.log("You just became an adult!");
}
if (age == "18") {
    console.log("Como usei o ==, que faz type coercion, essa frase será mostrada pois a condição é real!");
}
// O comando prompt pede o usuário no navegador para digitar e salvará o valor em uma STRING.
const favourite = prompt("Whats your favorite number?");
if (favourite == 23) { // '23' = 23
    console.log("Cool!")
} else if (favourite === 7) { // Não tem type coercion!
    console.log("7 is nice!")
} else {
    console.log("Quero um emprego carai!")
}
// Podemos ja automaticamente converter para numero!
const favouriteNumber = Number(prompt("Whats your favorite number?"));


// SWITCH CASE
const day = "monday";
switch (day) {
    case "monday":
        console.log("Plan my course structure.");
        console.log("Go to coding meetup!");
        break;
    case "tuesday":
        console.log("Prepare theory videos.");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples!");
        break;
    case "friday":
        console.log("Record videos!");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend! :D");
        break;
    default:
        console.log("Not a valid day!");
}


// TERNARY OPERATOR
const age3 = 23;
age3 >= 18 ? console.log("I like to drink wine!") :
    console.log("I can't drink wine yet. D:");
// Condição, parte IF, parte ELSE.
// Pode também ser escrito assim, salvando em uma variável e TUDO EM UMA LINHA:
const drink = age3 >= 18 ? "Wine!" : "Water!";
console.log(drink);
// Ou assim:
console.log(`I like to drink ${age3 >= 18 ? "Beer!" : "Juice!"}`);