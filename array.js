let frutas = ['maçã', 'uva', 'laranja'];
console.log(frutas[0]); //exibe o primeiro item do array
console.log(frutas[2]); //exibe o ultimo item do array

//adiciona o item ao final do array
frutas.push('Morango');
console.log(frutas);

//remove o último item 
frutas.pop();
console.log(frutas);

//tamanho do array
let numeros = [10, 20, 30, 40];
console.log(numeros.length); //4 numeros

//filtra com base em condição
let nomes = ['Ana', 'Beatriz','Josenaldo', 'Carlos'];
let nomeFiltrado = nomes.filter(nome => nome == 'Josenaldo');
console.log(nomeFiltrado);

let cores = ['azul' , 'vermelho', 'verde'];
cores.forEach(cor => {
    console.log('Cor: ', cor);
})