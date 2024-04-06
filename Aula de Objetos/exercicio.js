// Exercício: IMPLEMENTE UMA FUNÇÃO QUE RECEBA UMA LISTA DE ALUNOS (NOME, RA , NOTAP1, NOTAP2). Essa função deverá:
//A) Mostrar na tela os alunos.
//B) Notas menores que 6 em vermelho, maiores ou iguais em azul.
//C) Média P1 da turma. 
//D) Média P2 da turma.
//E) A média cada aluno.
//F) A quantidad de aprovdos e reprovados.

// Exercise: IMPLEMENT A FUNCTION THAT RECEIVES A LIST OF STUDENTS (NAME, ID (RA), GRADE1, GRADE2). This function should:
// A) Display the students on the screen.
// B) Grades less than 6 in red, greater or equal in blue.
// C) Class average of Grade 1 (Média P1).
// D) Class average of Grade 2 (Média P2).
// E) Each student's average grade (Média).
// F) The number of students approved and failed (Aprovados/Reprovados).

var listaAlunos = [{"nome":"Miguel", "ra":"001","p1": 10, "p2" : 10},
                    {"nome":"Carlos", "ra":"002","p1": 10, "p2" : 8},
                    {"nome":"Raquel", "ra":"003","p1": 8, "p2" : 8},
                    {"nome":"Daniel", "ra":"004","p1": 3, "p2" : 2},
                    {"nome":"Clarisse", "ra":"005","p1": 0, "p2" : 7}]

function tabelaAlunos(listaAlunos){
    let lsMedia = mediasTotal(listaAlunos);
    let mediaInd = mediaIndividual(listaAlunos);
    let status = aprovacao(mediaInd);
    let classA = classApproval(status);
    let tab = "<caption>Nota dos alunos</caption><table><thead><tr><th>Nome</th>" +   
                "<th>RA</th>" +
                "<th>P1</th>" +
                "<th>P2</th>" +
                "<th>Média</th>" +
                "<th>Status</th>" +
                "</tr>"+
                "</thead>"+
                "<tbody>";
  for (let i = 0; i < listaAlunos.length; i++){
          let colorp1 = (listaAlunos[i].p1 <= 6) ? "blue" : "red";
          let colorp2 = (listaAlunos[i].p1 <= 6) ? "blue" : "red";
          tab = tab + "<tr><td>" + listaAlunos[i].nome + "</td>"+
          "<td>" + listaAlunos[i].ra + "</td>" +
          '<td class="score" style="color:' + colorp1 + ';">' + listaAlunos[i].p1 +"</td>" +
          '<td class="score" style="color:' + colorp2 + ';">' + listaAlunos[i].p2 + "</td>" +
          "<td>" + mediaInd[i] + "</td>" +
          "<td>" + status[i] + "</td></tr>";
      }
    tab = tab + "</tbody></table>";

    tabMedia = "<table><thead><tr><th>Média P1</th>" + "<th>Média P2</th>" + "<th>Aprovados</th>" + "<th>Reprovados</th>" + "</tr></thead>" +
                "<tbody>" +
                "<tr><td>" + lsMedia[0] + "</td>" +
                "<td>" + lsMedia[1] + "</td>" +
                "<td>" + classA[0] + "</td>" +
                "<td>" + classA[1] + "</td></tr>" +
                "</tbody>";

    document.write(tab);
    document.write(tabMedia);
}

function mediasTotal(listaAlunos){
    let mediasT = [];
    let result = 0;
    for(let i = 0; i < listaAlunos.length; i++){
        result = result + listaAlunos[i].p1;
    }
    result = result/listaAlunos.length; 
    mediasT.push(result);
    result = 0;
    for(let i = 0; i < listaAlunos.length; i++){
        result = result + listaAlunos[i].p2;
    }
    result = result/listaAlunos.length; 
    mediasT.push(result);
    return mediasT;
}

function mediaIndividual(listaAlunos){
    let medias = [];
    let result = 0;
    for(let i = 0; i < listaAlunos.length; i++){
        result = (listaAlunos[i].p1 + listaAlunos[i].p2)/2;
        medias.push(result);
    }
    return medias;
}

function aprovacao(mediaInd){
    let status = [];
    for(let i = 0; i < mediaInd.length; i++){
        if(mediaInd[i] >= 6){
            status.push("Aprovado");
        }
        else{
            status.push("Reprovado");
        }
    }
    return status;
}

function classApproval(status){
    let aux = [];
    let numApproval;
    let numRefusal;
    numApproval = status.filter(x => x === "Aprovado").length;
    aux.push(numApproval); 
    numRefusal = status.filter(x => x === "Reprovado").length;
    aux.push(numRefusal);
    console.log(aux)
    return aux;
}
