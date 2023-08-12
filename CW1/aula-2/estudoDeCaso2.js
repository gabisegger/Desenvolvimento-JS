/* Regra:
    - Se o aluno acertar a nota mínima ou mais, mas não tiver o número mínimo de semestres, retornar a mensagem "Você foi incluído em nosso banco de currículos";
*/

function primeiraFaseNova(acertos_na_prova, semestres_cursados){

    // regras para aprovação
    const total_de_questoes = 20 
    const nota_minima_aprovacao = 0.7 
    const minimo_semestres = 3

    // calcula a nota %
    let nota = acertos_na_prova / total_de_questoes

    // calcula se acertou o número mínimo de questões e se possui o número mínimo de semestres cursados
    if((nota >= nota_minima_aprovacao) && (semestres_cursados >= minimo_semestres)){
        return "Aprovado";
    } else if(nota >= nota_minima_aprovacao){
        return "Você foi incluído em nosso banco de currículos"
    } else{
        return "Reprovado";
    }

}