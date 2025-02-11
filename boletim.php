<?php

//Exercício 4 :Manipulação de Arrays Associativos 
//Crie um array associativo com as seguintes informações de alunos:
// * Nome
// * Matéria
// * Nota 

$aluno = array( 
    'nome' => 'Lucas',
    'materia' => 'História',
    'nota' => 9.8,
);

// Utilize um loop foreach para exibir as inormções de cada aluno.
//Baseado na nota, exiba uma mensagem de aprovação ou reprovação.
// * Se a nota for maior ou igual a 7, exiba a mensagem: "Aluno Aprovado".

if($aluno['nota'] >= 7) {
    echo "Aluno Aprovado";
    echo "<br>";

// * Se a nota for menor que 7, e maior ou igual a 5 exiba a mensagem: "Aluno em recupereção".
} else if($aluno['nota'] >= 5) {
    echo "O aluno" . $aluno['nome'] . 'está  em recuperação';

// * Se a nota for memnor que 5, exiba a mensagem: "Aluno Reprovado".
} 
else{ 'O aluno' . $aluno['nome'] . 'está reprovado';}

 $alunos = [
    [   'nome' => 'Lucas',
        'materia' => 'História',
        'nota' => 9.8,
    ],
    [   'nome' => 'Maria',
        'materia' => 'Matemática',
        'nota' => 6.8,
    ],
    [   'nome' => 'João',
        'materia' => 'Português',
        'nota' => 4.8,
    ],
    [   'nome' => 'Ana',
        'materia' => 'Geografia',
        'nota' => 7.8,

    ],
 ]

 foreach ($alunos as $aluno) {
     if($aluno['nota'] >= 7) {
         echo "Aluno Aprovado";
         echo "<br>";
     } else if($aluno['nota'] >= 5) {
         echo "O aluno" . $aluno['nome'] . 'está  em recuperação';
     } else {
         echo "O aluno" . $aluno['nome'] . 'está reprovado';
     }
 }