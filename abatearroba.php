<?php
//O sistema deverá pegar o peso do animal(bovino) e deverá somar os pesos das partes.
//O sistema deverá calcular o valor a ser pago ao produtor baseado no valor da arroba.

$arroba = 15;
$produtor = 'Oscar';
$peso_1 = 150;
$peso_2 = 150;

$somaPartes = ($peso_1 + $peso_2);

$total_de_arrobas = $somaPartes/$arroba;

$custocadaArroba = 500;

$valorpagoProdutor = ( $total_de_arrobas * $custocadaArroba);

echo 'Seu ' . $produtor . ', o peso total do boi será de ' . $somaPartes . 'kilos' . ' e o valor de cada arroba é de ' . $custocadaArroba . ' reais. ';

echo '<br><br> O valor que o senhor receberá é de ' . $valorpagoProdutor . ' reais.';
