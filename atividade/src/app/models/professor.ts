export class Professor {
    id!: number;
    nome!: string;
    cpf!: string;
    email!: string;
    especialidade!: string;
    turmas!: number[];

    
    constructor(id: number,
        nome: string,
        cpf: string,
        email: string,
        especialidade: string,
    turmas: number[]){

            this.id = id;
            this.nome = nome;
            this.cpf = cpf;
            this.email = email;
            this.especialidade = especialidade;
            this.turmas = turmas;
        }
    }
