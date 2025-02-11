<?php

//Exercício 2: Soma de Valores em um Array 

// Crie um array contendo os seguintes números: 5, 10, 15, 20, 25.
// * Some todos os valores e exiba o resultado na tela.

$numeros = array( 5, 10, 15, 20, 25);
$soma = 0;

foreach ($numeros as $numero) {
   // $total += $numero;
    $soma = $soma + $numero;
} 
echo " A soma dos números é de " . $soma;