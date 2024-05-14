export interface Aluno {
    nome: string;
}

export interface Fileira {
    nome: string;
    alunos: Aluno[];
}