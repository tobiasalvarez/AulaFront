export class Turma {
    constructor(
        public id: number = 0,
        public nome: string = '',
        public semestre: string = '',
        public ano: number = 0,
        public turno: string = '',
        public professores: string[] = [],
        public alunos: string[] = [],
        public curso: string = ''
    ) {}
}
