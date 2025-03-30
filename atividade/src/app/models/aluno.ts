export class Aluno {
    constructor(
        public id: number = 0,
        public nome: string = '',
        public cpf: string = '',
        public telefone: string = '',
        public cadastroCompleto: boolean = false,
        public turma: number = 0
    ) {}
}
