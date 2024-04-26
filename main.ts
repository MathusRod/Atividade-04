// SUPERCLASSE Pessoa
class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  mostrarDados(): string {
    return `\nDADOS\n\tNome: ${this.nome}\n\tIdade: ${this.idade}`;
  }
}

//CLASSE Ciddadao
class Cidadao extends Pessoa {
  telefone: string;
  email: string;
  agendamentoVacina: string;

  constructor(
    nome?: string,
    idade?: number,
    telefone?: string,
    email?: string
  ) {
    super(nome, idade);
    this.telefone = telefone;
    this.email = email;
    this.agendamentoVacina = null;
  }

  agendarVacina(data: Date) {
    this.agendamentoVacina = `${data.getDate()}/${
      data.getMonth() + 1
    }/${data.getFullYear()}`;
  }

  mostrarDados(): string {
    let agendamento: string = "Sem agendamento";
    if (this.agendamentoVacina) {
      agendamento = this.agendamentoVacina;
    }
    return (
      super.mostrarDados() +
      `\n\tTelefone: ${this.telefone}\n\tE-mail: ${this.email}\n\tAgendamento: ${agendamento}`
    );
  }

  agendamento() {
    const texto = showLista();
    const res: number = parseInt(prompt(texto)) - 1;
    const data: string = prompt(
      "Qual a data do agendamento?\nColoque dessa forma AA-MM-DD"
    );
    cidadao_array[res].agendarVacina(new Date(data));
  }
}

//CLASSE Funcionario
class Funcionario extends Pessoa {
  cargo: string;
  salario: number;

  constructor() {
    super("Matheus", 19);
    this.cargo = "Cadastrador";
    this.salario = 1300;
  }

  mostrarDados(): string {
    return (
      super.mostrarDados() +
      `\n\tCargo: ${this.cargo}\n\tSalario: ${this.salario}`
    );
  }
  registrarCidadao() {
    const nome: string = prompt(`Qual o nome do cidadão?`);
    const idade: number = parseInt(prompt(`Qual a idade de ${nome}?`));
    const telefone: string = prompt(
      `Qual o telefone de ${nome}?\nAVISO: SOMENTE OS 8 DIGITOS COM UM IFEN NO MEIO`
    );
    const email: string = prompt(`Qual o E-mail de ${nome}`);
    const novo_cidadao = new Cidadao(nome, idade, telefone, email);

    cidadao_array.push(novo_cidadao);
    console.log(cidadao_array);
  }

  removerCidadao() {
    let texto = "Qual cidadão você deseja remover:\n";
    cidadao_array.forEach((cidA, index) => {
      texto += `(${index}) - ${cidA.nome}\n`;
    });
    const res: number = parseInt(prompt(texto));
    if (res >= 0 && res <= cidadao_array.length) {
      cidadao_array = cidadao_array.filter((_, index) => index !== res);
      alert("Cadastro removido com sucesso!");
    } else alert("Valor invalido!");
  }
}

//Contantes usadas para chamar algum metodo ou variavel das classes
const _funcionario = new Funcionario();
let _cidadao = new Cidadao();

//Adicionei logo de início um cidadão cadastrado caso queira verificar a lista sem cadastrar algum cidadão 
let cidadao_array: Cidadao[] = [];
const pessoaDeAjuda = new Cidadao(
  "Carlos",
  23,
  "8898-9807",
  "carlos@obrigado.com"
);
cidadao_array.push(pessoaDeAjuda);


//Função que executa o código
function btn_start(){
  alert(`Seja bem vindo, ${_funcionario.nome}!`);
  funcionarioJanela();
};

//Função que mostra a lista de cidadãos
function showLista() {
  let texto = "LISTA\n------------------\n";
  cidadao_array.forEach((cidA, index) => {
    texto += `\nID: ${index + 1} ${cidA.mostrarDados()}\n`;
  });
  texto += `\n------------------`;

  return texto;
}

//Função de janela do funcionário
function funcionarioJanela() {
  const res = parseInt(
    prompt(
      `------------------------------------------------\n\nOpções:\n\n\t(0) - Sair\n\t(1) - Cadastrar um novo cidadão\n\t(2) - Remover um cadastro de cidadão\n\t(3) - Ver seus dados\n\t(4) - Lista de cadastrados\n\t(5) - Adicionar um agendamento de vacina\n\n------------------------------------------------`
    )
  );

  switch (res) {
    case 0:
      break;
    case 1:
      _funcionario.registrarCidadao();
      break;
    case 2:
      if (cidadao_array.length > 0) {
        _funcionario.removerCidadao();
      } else {
        alert(
          "Não possui nenhum cidadão cadastrado no momento.\nCadastre um para poder fazer alguma remoção"
        );
        return;
      }
      break;
    case 3:
      alert(_funcionario.mostrarDados());
      break;
    case 4:
      alert(showLista());
      break;
    case 5:
      _cidadao.agendamento();
      break;
    default:
      alert("Valor invalido!");
      break;
  }
}
