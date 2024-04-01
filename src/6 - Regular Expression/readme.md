# Expressões Regulares em JavaScript

As expressões regulares, também conhecidas como regex, são uma poderosa ferramenta para busca e manipulação de padrões em strings. Neste guia, vamos explorar diferentes exemplos de expressões regulares em JavaScript.

## Introdução

Uma expressão regular é uma sequência de caracteres que especifica um padrão de busca em strings. Podemos criar expressões regulares usando o construtor `RegExp` ou a sintaxe literal.

### Exemplo de Declaração de Expressão Regular:

```javascript
// Usando o construtor RegExp
const regBola = new RegExp('bola');

// Usando a sintaxe literal
const regBola2 = /bola/;
```

### Exemplos de Expressões Regulares

Vamos explorar alguns exemplos de expressões regulares e como elas podem ser aplicadas:

### Encontrando a palavra 'bola'

```javascript
console.log(regBola.test('Tem bola?')); // Output: true
console.log(regBola.test("Não tem")); // Output: false

console.log(regBola2.test('Tem bola?')); // Output: true
console.log(regBola2.test("Não tem")); // Output: false
```

#### Encontrando 'testando'

```javascript
console.log(/testando/.test('tttttestandoooooooo')); // Output: true
console.log(/testando/.test('asdtestasd')); // Output: false
```

## Correspondência com Conjuntos []

Em expressões regulares, os conjuntos são usados para corresponder a qualquer caractere dentro de um conjunto especificado. Eles oferecem uma maneira flexível de especificar um conjunto de caracteres que você deseja corresponder em uma string.

Um conjunto é definido colocando os caracteres desejados entre colchetes `[]`.

Exemplo:
- `[abc]`: Corresponde a qualquer caractere 'a', 'b' ou 'c'.

Você também pode especificar intervalos de caracteres dentro de um conjunto usando o traço `-`.

Exemplo:
- `[a-z]`: Corresponde a qualquer caractere alfabético minúsculo de 'a' a 'z'.
- `[0-9]`: Corresponde a qualquer dígito de 0 a 9.

### Exemplos

Vamos ver alguns exemplos práticos de conjuntos em expressões regulares:

#### Corresponder a números de telefone

```javascript
const regex = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
console.log(regex.test('123-456-7890')); // Output: true
console.log(regex.test('abc-def-ghij')); // Output: false
```

Neste exemplo, `[0-9]` corresponde a qualquer dígito de 0 a 9 e `{3}` indica que queremos exatamente três ocorrências desse conjunto.

#### Corresponder a letras maiúsculas ou minúsculas

```javascript
const regex = /[A-Za-z]/;
console.log(regex.test('Hello')); // Output: true
console.log(regex.test('123')); // Output: false
```

Neste exemplo, `[A-Za-z]` corresponde a qualquer letra maiúscula ou minúscula.

#### Corresponder a vogais

```javascript
const regex = /[aeiou]/;
console.log(regex.test('apple')); // Output: true
console.log(regex.test('banana')); // Output: false
```

Neste exemplo, `[aeiou]` corresponde a qualquer vogal.

## Negando Conjuntos

Você também pode negar conjuntos adicionando um `^` como primeiro caractere dentro dos colchetes.

Exemplo:
- `[^0-9]`: Corresponde a qualquer caractere que não seja um dígito de 0 a 9.

Isso significa que ele corresponderá a qualquer caractere que não esteja dentro do conjunto especificado.


```javascript
// Encontra qualquer número de 1 a 5
console.log(/[12345]/.test('Temos o número 6?')); // Output: false
console.log(/[12345]/.test('Temos o número 62?')); // Output: true

// Encontra qualquer dígito de 0 a 9
console.log(/[0-9]/.test('Temos o número 92813789735?')); // Output: true
console.log(/[0-9]/.test('Temos o número?')); // Output: false
```

## Caracteres Especiais em Expressões Regulares

As expressões regulares em JavaScript possuem uma série de caracteres especiais que são utilizados para representar classes de caracteres específicas. Vamos explorar cada um desses caracteres e sua aplicação em expressões regulares:

### . (Ponto)

O ponto corresponde a qualquer caractere único, exceto uma quebra de linha. Ele é utilizado para representar qualquer caractere em uma expressão regular.

Exemplo:
```javascript
const pontoRegex = /\./;
console.log(pontoRegex.test('abc')); // Output: false
console.log(pontoRegex.test(' ')); // Output: false
console.log(pontoRegex.test('123')); // Output: false
console.log(pontoRegex.test('123abc')); // Output: true
```

### \d

O `\d` corresponde a qualquer dígito de 0 a 9. É utilizado para encontrar ocorrências de números em uma string.

Exemplo:
```javascript
const d_Regex = /\d/;
console.log(d_Regex.test('abc')); // Output: false
console.log(d_Regex.test(' ')); // Output: false
console.log(d_Regex.test('123')); // Output: true
console.log(d_Regex.test('123abc')); // Output: true
```

### \D

O `\D` corresponde a qualquer caractere que não seja um dígito de 0 a 9. É útil para encontrar caracteres não numéricos em uma string.

Exemplo:
```javascript
const D_Regex = /\D/;
console.log(D_Regex.test('abc')); // Output: true
console.log(D_Regex.test(' ')); // Output: true
console.log(D_Regex.test('123')); // Output: false
console.log(D_Regex.test('123abc')); // Output: true
```

### \s

O `\s` corresponde a qualquer caractere de espaço em branco, como espaços, tabulações e quebras de linha.

Exemplo:
```javascript
const s_Regex = /\s/;
console.log(s_Regex.test('abc')); // Output: false
console.log(s_Regex.test(' ')); // Output: true
console.log(s_Regex.test('123')); // Output: false
console.log(s_Regex.test('123abc')); // Output: false
```

### \w

O `\w` corresponde a qualquer caractere alfanumérico, incluindo letras, dígitos e o sublinhado.

Exemplo:
```javascript
const w_Regex = /\w/;
console.log(w_Regex.test('asd')); // Output: true
console.log(w_Regex.test(' ')); // Output: false
console.log(w_Regex.test('123')); // Output: true
console.log(w_Regex.test('123asd')); // Output: true
```

Esses caracteres especiais são fundamentais para a construção de expressões regulares em JavaScript e são amplamente utilizados para encontrar padrões específicos em strings. Compreender o significado e o uso de cada um desses caracteres é essencial para a criação de expressões regulares eficazes.

#### Caracteres Especiais na Prática

Vamos aplicar alguns dos caracteres especiais em situações práticas:

```javascript
console.log('Caracteres Especiais na Prática:');

const regDay = /\d\d/
console.log(regDay.test('2020')); // Output: true
console.log(regDay.test('abc')); // Output: false
console.log(regDay.test('05')); // Output: true
console.log(regDay.test('asd1')); // Output: false

// Não iria funcionar 
console.log(regDay.test('2020') && '2020'.length == 2); // Output: true
console.log(regDay.test('05')  && '05'.length == 2); // Output: true

const regWorldThreeLetter = /\w\w\w/
console.log(regWorldThreeLetter.test('ab')); // Output: false
console.log(regWorldThreeLetter.test('abc')); // Output: true
console.log(regWorldThreeLetter.test('abcdefg')); // Output: true
```

## Operador NOT

O operador `[^]` é usado para encontrar caracteres que não estejam dentro de um conjunto especificado:

```javascript
console.log('Operador NOT:');

const regNotAB = /[^ab]/
console.log(regNotAB.test('a')); // Output: false
console.log(regNotAB.test('Aqui tem a')); // Output: true

const regNotAZ = /[^a-z]/
console.log(regNotAZ.test('a')); // Output: false
console.log(regNotAZ.test('Aqui tem a')); // Output: true
console.log(regNotAZ.test('123456789')); // Output: true
```

## Operador Plus e Operador Question

O operador `+` é usado para encontrar uma ou mais ocorrências de um padrão, enquanto o operador `?` é usado para encontrar zero ou uma ocorrência de um padrão:

```javascript
console.log('Operador Plus e Operador Question:');

const regPlusNumbers = /\d+/
console.log(regPlusNumbers.test('12345')); // Output: true
console.log(regPlusNumbers.test('')); // Output: false
console.log(regPlusNumbers.test('abc')); // Output: false

const regPadrao= /Abacax?i/
console.log(regPadrao.test('Abacaxi')); // Output: true
console.log(regPadrao.test('Abacai')); // Output: true
console.log(regPadrao.test('Abacati')); // Output: false

const regPadraoNum= /\d+\w?/
console.log(regPadraoNum.test('12345')); // Output: true
console.log(regPadraoNum.test('12345a')); // Output: true
console.log(regPadraoNum.test('')); // Output: false
console.log(regPadraoNum.test('abc')); // Output: false
```

## Ocorrência Precisa {}

Podemos especificar o número exato de ocorrências de um padrão usando `{}`:

```javascript
console.log('Ocorrência Precisa:');

const regCep= /\d{5}-\d{3}/
console.log(regCep.test('12345-123')); // Output: true
console.log(regCep.test('12345678-99')); // Output: false

const regCelular= /(\d{2})\d{4,5}-\d{4}/
console.log(regCelular.test('(67)99999-9999')); // Output: true
console.log(regCelular.test('(67)99999-99')); // Output: false
```

## Métodos Exec e Match

Os métodos `exec` e `match` são usados para encontrar correspondências em strings:

```javascript
console.log('Método Exec e Método Match:');

const regDigitos = /\d+/
console.log(regDigitos.exec('Tem o numero 100 aqui')); // Output: [ '100', index: 13, input: 'Tem o numero 100 aqui', groups: undefined ]
console.log(regDigitos.exec('Tem o numero ??? aqui')); // Output: [ '100', index: 11, input: 'Tem o numero ??? aqui', groups: undefined ]

const regFrase1 = 'Tem o numero 100 aqui'.match(/\d+/)
const regFrase2 = 'Tem o numero ??? aqui'.match(/\d+/)
console.log(regFrase1); // Output: [ '100', index: 12, input: 'Tem o numero 100 aqui', groups: undefined ]
console.log(regFrase2); // Output: [ '100', index: 10, input: 'Tem o numero ??? aqui', groups: undefined ]
```

## Choice Pattern

O padrão de escolha é usado para encontrar uma de várias opções especificadas:

```javascript
console.log('Choice Pattern:');

const regName = /\w+: (Rafael|Mathues|Sarah)/
console.log(regName.test('Nome: Rafael')); // Output: true
console.log(regName.test('Nome: Marcos')); // Output: false
console.log(regName.test('Nome: Sarah')); // Output: true
```