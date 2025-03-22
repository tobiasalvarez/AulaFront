export class Aluno {
    id!: number;
    nome!: string;
    cpf!: string;
    telefone!: string;
    cadastroCompleto!: boolean;
    turma!: number;

    constructor(id: number,
        nome: string,
        cpf: string,
        telefone: string,
        turma: number){

            this.id = id;
            this.nome = nome;
            this.cpf = cpf;
            this.telefone = telefone;
            this.turma = turma;
    }
}


