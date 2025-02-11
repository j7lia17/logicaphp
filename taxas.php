<?php

//Exercício 5: Conversão de Moedas

//Crie um array asssociativo com as taxas de conversão de diferentes moedas para reais ( R$):
// * Dólar ( USD ) = 5.10
// * Euro ( EUR) = 5.50
// * Libra ( GBP) = 6.30
// * Peso Argentino ( ARS) = 0.05

$taxas = [
    'USD' => 6.00,
    'EUR' => 5.50,
    'GBP' => 6.30,
    'ARS' => 0.05,
];
$valorReal = 100;

echo " Valor em Dólar : US$ ". number_format($valorReal / $taxas['USD'] , 2, "," , ".") . '<br>';
echo " Valor em Euro : EU$ " . number_format($valorReal / $taxas['EUR'] , 2, "," , ".") . '<br>';
echo " Valor em Libra : GB$ " . number_format($valorReal / $taxas['GBP'] , 2 , "," , "."). '<br>';
echo " Valor em Peso Argentino : AR$ " . number_format($valorReal / $taxas['ARS'] , 2, "," , "."). '<br>'; 