<?php
// Crie um array com números aleatórios e:
// 1. Exiba os números na ordem original.
// 2. Ordene o array em ordem crescente e exiba novamente.
// 3. Ordene o array em ordem decrescente e exiba novamente.

$numeros = [15, 10, 35, 20, 18, 30, 5, 60, 45, 40];

foreach($numeros as $numero) {
    echo $numero . "<br>";
}

echo ' ----------------------------- <br>';

rsort($numeros);
foreach($numeros as $numero) {
    echo $numero . "<br>";
}

sort($numeros);
foreach($numeros as $numero) {
    echo $numero . "<br>";
}