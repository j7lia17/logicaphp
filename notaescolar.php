<?php
//Crie um aplicativo que leia as notos de um aluno nos quatro bimestres
// Calcule a média e se o aluno teve nova maior ou igual a 7 aprovado
// se teve nota menor que 7 reprovado

$nota_1b = 8;
$nota_2b = 6;
$nota_3b = 5;
$nota_4b = 4;
$mediaFinal = ($nota_1b + $nota_2b + $nota_3b + $nota_4b) / 4;

if( $mediaFinal >= 7) 
{ echo ' Você foi aprovado com a média ' . $mediaFinal . ', parabéns!!';}
  else if ($mediaFinal < 7 && $mediaFinal >=5) 
  { echo ' Você está em recuperaçao com a media ' . $mediaFinal;}
else
{ echo ' Você está reprovado com a média ' . $mediaFinal;}
