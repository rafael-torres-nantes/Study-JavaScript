// Expressão regular é uma sequência de caracteres que especifica um padrão de busca em strings.

// Exemplos de expressões regulares para encontrar a palavra 'bola' em uma string:
const regBola = new RegExp('bola'); // Criando expressão regular usando o construtor RegExp
console.log(regBola.test('Tem bola?')); // Verifica se a string contém 'bola'
console.log(regBola.test("Não tem"));

const regBola2 = /bola/; // Criando expressão regular usando a sintaxe literal
console.log(regBola2.test('Tem bola?')); // Verifica se a string contém 'bola'
console.log(regBola2.test("Não tem"));

// Exemplo de expressão regular para encontrar 'testando' em uma string:
console.log(/testando/.test('tttttestandoooooooo')); // Verifica se a string contém 'testando'
console.log(/testando/.test('asdtestasd'));

// Conjuntos [] - correspondência com qualquer caractere dentro dos colchetes
const regConjuntoNum = /[12345]/; // Encontra qualquer número de 1 a 5
console.log(regConjuntoNum.test('Temos o número 6?'));
console.log(regConjuntoNum.test('Temos o número 62?'));

const regConjuntoNum2 = /[0-9]/; // Encontra qualquer dígito de 0 a 9
console.log(regConjuntoNum2.test('Temos o número 92813789735?'));
console.log(regConjuntoNum2.test('Temos o número?'));

// Caracteres Especiais
// Corresponde a qualquer caractere, exceto uma quebra de linha
const pontoRegex = /\./; 
console.log('.');
console.log(pontoRegex.test('abc'));
console.log(pontoRegex.test(' '));
console.log(pontoRegex.test('123'));
console.log(pontoRegex.test('123abc'));

// Corresponde a qualquer dígito (0-9)
const d_Regex = /\d/; 
console.log('\\d');
console.log(d_Regex.test('abc'));
console.log(d_Regex.test(' '));
console.log(d_Regex.test('123'));
console.log(d_Regex.test('123abc'));

// Corresponde a qualquer caractere que não seja um dígito (0-9)
console.log('\\D');
const D_Regex = /\D/; 
console.log(D_Regex.test('abc'));
console.log(D_Regex.test(' '));
console.log(D_Regex.test('123'));
console.log(D_Regex.test('123abc'));

// Corresponde a qualquer caractere de espaço em branco
const s_Regex = /\s/; 
console.log('\\s');
console.log(s_Regex.test('abc'));
console.log(s_Regex.test(' '));
console.log(s_Regex.test('123'));
console.log(s_Regex.test('123abc'));

// Corresponde a qualquer caractere alfanumérico (letras, dígitos, sublinhado)
const w_Regex = /\w/; 
console.log('\\w');
console.log(w_Regex.test('asd'));
console.log(w_Regex.test(' '));
console.log(w_Regex.test('123'));
console.log(w_Regex.test('123asd'));

// Caracteres Especiais na Prática
console.log('Caracteres Especiais na Prática:');
const regDay = /\d\d/

console.log(regDay.test('2020'))
console.log(regDay.test('abc'))
console.log(regDay.test('05'))
console.log(regDay.test('asd1'))

// Não iria funcionar 
console.log(regDay.test('2020') && '2020'.length == 2)
console.log(regDay.test('05')  && '05'.length == 2)

const regWorldThreeLetter = /\w\w\w/

console.log(regWorldThreeLetter.test('ab'))
console.log(regWorldThreeLetter.test('abc'))
console.log(regWorldThreeLetter.test('abcdefg'))

// Operador not
const regNotAB = /[^ab]/

console.log('Operador NOT:');
console.log(regNotAB.test('a'))
console.log(regNotAB.test('Aqui tem a'))

const regNotAZ = /[^a-z]/

console.log('Operador NOT:');
console.log(regNotAZ.test('a'))
console.log(regNotAZ.test('Aqui tem a'))
console.log(regNotAZ.test('123456789'))

// Operador Plus
const regPlusNumbers = /\d+/

console.log('Operador Plus:');
console.log(regNotAB.test('12345'))
console.log(regNotAB.test(''))
console.log(regNotAB.test('abc'))

// Operador Question 
const regPadrao= /Abacax?i/

console.log('Operador Question:');
console.log(regPadrao.test('Abacaxi'))
console.log(regPadrao.test('Abacai'))
console.log(regPadrao.test('Abacati'))

const regPadraoNum= /\d+\w?/

console.log('Operador Question:');
console.log(regNotAB.test('12345'))
console.log(regNotAB.test('12345a'))
console.log(regNotAB.test(''))
console.log(regNotAB.test('abc'))

// Ocorrência Precisa {}
const regCep= /\d{5}-\d{3}/

console.log('Ocorrência Precisa:');
console.log(regCep.test('12345-123'))
console.log(regCep.test('12345678-99'))

const regCelular= /(\d{2})\d{4,5}-\d{4}/

console.log('Ocorrência Precisa:');
console.log(regCelular.test('(67)99999-9999'))
console.log(regCelular.test('(67)99999-99'))

// Método Exec

const regDigitos = /\d+/
console.log('Método Exec:');
console.log(regDigitos.exec('Tem o numero 100 aqui'))
console.log(regDigitos.exec('Tem o numero ??? aqui'))

// Método Match

const regFrase1 = 'Tem o numero 100 aqui'.match(/\d+/)
const regFrase2 = 'Tem o numero ??? aqui'.match(/\d+/)
console.log('Método Match:');
console.log(regFrase1)
console.log(regFrase2)

// Choice Pattern

const regName = /\w+: (Rafael|Mathues|Sarah)/
console.log('Choice Pattern:');
console.log(regName.test('Nome: Rafael'))
console.log(regName.test('Nome: Marcos'))
console.log(regName.test('Nome: Sarah'))

// Exemplo aplicado : Validando domínios web

const regValidateDomin = /(?:www\.)?\w+\.(?:com\.br|com)/

console.log('Webpage Exemplo aplicado:');
console.log(regValidateDomin.test('www.google.com'))
console.log(regValidateDomin.test('www.webpage.com.br'))
console.log(regValidateDomin.test('www.webpage'))
console.log(regValidateDomin.test('webpage.com.br'))

// Exemplo aplicado : Validando emails

const regValidateEmail = /\w+@\w+\.\w+/

console.log('Email Exemplo aplicado:');
console.log(regValidateEmail.test('email@gmail.com'))
console.log(regValidateEmail.test('email@gmail'))
console.log(regValidateEmail.test('@gmail.com'))
console.log(regValidateEmail.test('email@gmail.com.br'))

// Exemplo aplicado : Validando datas de nascimento
const regValidateBirthDay= /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/

console.log('Data de Nascimento Exemplo aplicado:');
console.log(regValidateBirthDay.test('22/02/2002'))
console.log(regValidateBirthDay.test('11/22/3333'))
console.log(regValidateBirthDay.test('1/2/333'))
console.log(regValidateBirthDay.test('11-22-3333'))
