export class Professor {
    constructor(
        public id: number = 0,
        public nome: string = '',
        public cpf: string = '',
        public email: string = '',
        public especialidade: string = '',
        public turmas: number[] = []
    ) {}
}
