
/* Variaveis : Podem ser alteradas*/
let firstName = 'Rafinha';
let lastName = 'Torres';

console.log(firstName);
console.log(lastName);

/* Constante : Nao podem ser alteradas*/
const price = 20;

console.log(price);

/* ASI : Feature do JavaScript (Automatic Semicolon Insert)*/

let withOutSemiCollon = 10
console.log(withOutSemiCollon)


/*Tipos de Variáveis : Primitivo e Referência*/
let itemA = 0;
console.log(typeof itemA);

/* Primitivo : String, Number, Boolean, Udefined, Null */

let itemName = 'Pen';
let itemPrice = 3;
let itemAvaiable = true;
let itemColor = undefined; 

// Não foi definido no momento
console.log(itemColor);

// Null : Anula o dado dentro da variável
console.log(itemName);
itemName = null;
console.log(itemName);

/* Referencia : Objects, Arrays, Functions */

// Objects
let pen = {
    itemName: 'Pen',
    itemPrice: 3,
    itemAvaiable: true,
    itemColor:'Red'
};

pen.itemColor = 'blue';

console.log(pen)

// Arrays

let friends = ['Marcos', 'Silvia', 'Elisia'];
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

friends[1] = 'Lucas';
console.log(friends);

// Functions

function saleStatus(status, total) /*Parâmentros*/ {
    console.log('Transaction ' + status + '! Total Ammount : $' + total);
}

saleStatus('Aprroved', 30 ); // Argumentos

// Functions with Return

function percentage10(price) {
    return price - (price * 10 / 100);
}

console.log(percentage10(100));
