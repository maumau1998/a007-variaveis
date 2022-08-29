let Person = prompt("Qual é o seu nome?");
let namePerson = (Person);
let Age = Number(prompt("Quantos anos você tem?"));
let NumberAge = (Age);

console.log(namePerson, typeof namePerson);
console.log(NumberAge, typeof NumberAge);

/* Isso foi impresso porque o prompt retorna string como valor padrão, já quando
inserimos o Number ele altera o tipo para um inteiro */

console.log("Olá",namePerson,"você tem",NumberAge,"anos.")