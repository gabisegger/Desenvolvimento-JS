/*Regras de aprovação: 
  - A nota deve ser de, pelo menos, 70%, logo, a nota deve ser maior ou igual a 0.7;
  - Aluno deve ter cursado, pelo menos, 3 semestres, logo, o valor da variável que armazena os semestres cursados deve ser maior ou igual a 3;
*/


// Fragmento de código do sistema de seleção de estagiários
function primeiraEtapa(acertos_na_prova, semestres_cursados){
  /*   
  * Help: 
  * acertos_na_prova recebe a quantidade de acertos na prova
  * semestres_cursados: semestres cursados
  */
  // regras para aprovação
  const total_de_questoes = 20 
  const nota_minima_aprovacao = 0.7 
  const minimo_semestres = 3
 
  // calcula a nota %
  let nota = acertos_na_prova / total_de_questoes
  
  // calcula se vai ser aprovado ou não
  if((nota > nota_minima_aprovacao) || (semestres_cursados >= minimo_semestres)){
    return "Aprovado";
  }
  else{
    return "Reprovado";
  }
}

// Resolução

function primeiraFase(acertos_na_prova, semestres_cursados){

  // regras para aprovação
  const total_de_questoes = 20 
  const nota_minima_aprovacao = 0.7 
  const minimo_semestres = 3
  
  // calcula a nota %
  let nota = acertos_na_prova / total_de_questoes
  
  // calcula se acertou o número mínimo de questões e se possui o número mínimo de semestres cursados
  if((nota >= nota_minima_aprovacao) && (semestres_cursados >= minimo_semestres)){
    return "Aprovado";
  } else{
    return "Reprovado";
  }

}