"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alunos = [
    { nome: "João" },
    { nome: "Felipe" },
    { nome: "Maria" },
    { nome: "José" },
    { nome: "Ana" },
    { nome: "Carlos" },
    { nome: "Pedro" },
    { nome: "Paulo" },
    { nome: "Lucas" },
    { nome: "Mariana" },
    { nome: "Juliana" },
    { nome: "Fernanda" },
    { nome: "Rafael" },
    { nome: "Ricardo" },
    { nome: "Jorge" },
    { nome: "Miguel" }
];
function main() {
    var fileiras = [];
    // Preenchendo as fileiras
    var index = 0;
    while (index < alunos.length) {
        var fileira = {
            nome: "Fileira ".concat(fileiras.length + 1),
            alunos: []
        };
        for (var i = 0; i < 5 && index < alunos.length; i++) {
            fileira.alunos.push(alunos[index]);
            index++;
        }
        fileiras.push(fileira);
    }
    // Simulando a saída dos alunos
    fileiras.forEach(function (fileira) {
        console.log(fileira.nome);
        fileira.alunos.forEach(function (aluno) {
            console.log("".concat(aluno.nome, " se levantou da cadeira ").concat(fileira.alunos.indexOf(aluno) + 1));
            console.log("Tchau ".concat(aluno.nome, "!"));
            console.log("-------------------------------");
        });
        console.log("-------------------------------");
    });
}
main();
