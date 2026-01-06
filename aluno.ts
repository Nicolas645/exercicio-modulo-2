class Aluno {
    nome: string;
    idade: number;
    curso: string;

    constructor(nome: string, idade: number, curso: string) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }

    apresentar(): string {
        return `Olá, meu nome é ${this.nome} e eu faço o curso de ${this.curso}.`;
    }
}


const alunoExemplo = new Aluno("Nicolas", 67, "Front-end");
console.log(alunoExemplo.apresentar());

export { Aluno };
