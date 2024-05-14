import { Aluno, Fileira } from './types';
import { create, enqueue, dequeue, peek, isEmpty, isFull } from './fila';

const alunos: Aluno[] = [
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
    const fileiras: Fileira[] = [];

    // Preenchendo as fileiras
    let index = 0;
    while (index < alunos.length) {
        const fileira: Fileira = {
            nome: `Fileira ${fileiras.length + 1}`,
            alunos: []
        };

        for (let i = 0; i < 5 && index < alunos.length; i++) {
            fileira.alunos.push(alunos[index]);
            index++;
        }

        fileiras.push(fileira);
    }

    // Simulando a saída dos alunos
    fileiras.forEach(fileira => {
        console.log(fileira.nome);

        fileira.alunos.forEach(aluno => {
            console.log(`${aluno.nome} se levantou da cadeira ${fileira.alunos.indexOf(aluno) + 1}`);
            console.log(`Tchau ${aluno.nome}!`);
            console.log("-------------------------------");
        });

        console.log("-------------------------------");
    });
}

main();