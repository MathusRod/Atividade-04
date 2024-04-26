var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// SUPERCLASSE Pessoa
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.mostrarDados = function () {
        return "\nDADOS\n\tNome: ".concat(this.nome, "\n\tIdade: ").concat(this.idade);
    };
    return Pessoa;
}());
//CLASSE Ciddadao
var Cidadao = /** @class */ (function (_super) {
    __extends(Cidadao, _super);
    function Cidadao(nome, idade, telefone, email) {
        var _this = _super.call(this, nome, idade) || this;
        _this.telefone = telefone;
        _this.email = email;
        _this.agendamentoVacina = null;
        return _this;
    }
    Cidadao.prototype.agendarVacina = function (data) {
        this.agendamentoVacina = "".concat(data.getDate(), "/").concat(data.getMonth() + 1, "/").concat(data.getFullYear());
    };
    Cidadao.prototype.mostrarDados = function () {
        var agendamento = "Sem agendamento";
        if (this.agendamentoVacina) {
            agendamento = this.agendamentoVacina;
        }
        return (_super.prototype.mostrarDados.call(this) +
            "\n\tTelefone: ".concat(this.telefone, "\n\tE-mail: ").concat(this.email, "\n\tAgendamento: ").concat(agendamento));
    };
    Cidadao.prototype.agendamento = function () {
        var texto = showLista();
        var res = parseInt(prompt(texto)) - 1;
        var data = prompt("Qual a data do agendamento?\nColoque dessa forma AA-MM-DD");
        cidadao_array[res].agendarVacina(new Date(data));
    };
    return Cidadao;
}(Pessoa));
//CLASSE Funcionario
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario() {
        var _this = _super.call(this, "Matheus", 19) || this;
        _this.cargo = "Cadastrador";
        _this.salario = 1300;
        return _this;
    }
    Funcionario.prototype.mostrarDados = function () {
        return (_super.prototype.mostrarDados.call(this) +
            "\n\tCargo: ".concat(this.cargo, "\n\tSalario: ").concat(this.salario));
    };
    Funcionario.prototype.registrarCidadao = function () {
        var nome = prompt("Qual o nome do cidad\u00E3o?");
        var idade = parseInt(prompt("Qual a idade de ".concat(nome, "?")));
        var telefone = prompt("Qual o telefone de ".concat(nome, "?\nAVISO: SOMENTE OS 8 DIGITOS COM UM IFEN NO MEIO"));
        var email = prompt("Qual o E-mail de ".concat(nome));
        var novo_cidadao = new Cidadao(nome, idade, telefone, email);
        cidadao_array.push(novo_cidadao);
        console.log(cidadao_array);
    };
    Funcionario.prototype.removerCidadao = function () {
        var texto = "Qual cidadão você deseja remover:\n";
        cidadao_array.forEach(function (cidA, index) {
            texto += "(".concat(index, ") - ").concat(cidA.nome, "\n");
        });
        var res = parseInt(prompt(texto));
        if (res >= 0 && res <= cidadao_array.length) {
            cidadao_array = cidadao_array.filter(function (_, index) { return index !== res; });
            alert("Cadastro removido com sucesso!");
        }
        else
            alert("Valor invalido!");
    };
    return Funcionario;
}(Pessoa));
//Contantes usadas para chamar algum metodo ou variavel das classes
var _funcionario = new Funcionario();
var _cidadao = new Cidadao();
//Adicionei logo de início um cidadão cadastrado caso queira verificar a lista sem cadastrar algum cidadão 
var cidadao_array = [];
var pessoaDeAjuda = new Cidadao("Carlos", 23, "8898-9807", "carlos@obrigado.com");
cidadao_array.push(pessoaDeAjuda);
//Função que executa o código
function btn_start() {
    alert("Seja bem vindo, ".concat(_funcionario.nome, "!"));
    funcionarioJanela();
}
;
//Função que mostra a lista de cidadãos
function showLista() {
    var texto = "LISTA\n------------------\n";
    cidadao_array.forEach(function (cidA, index) {
        texto += "\nID: ".concat(index + 1, " ").concat(cidA.mostrarDados(), "\n");
    });
    texto += "\n------------------";
    return texto;
}
//Função de janela do funcionário
function funcionarioJanela() {
    var res = parseInt(prompt("------------------------------------------------\n\nOp\u00E7\u00F5es:\n\n\t(0) - Sair\n\t(1) - Cadastrar um novo cidad\u00E3o\n\t(2) - Remover um cadastro de cidad\u00E3o\n\t(3) - Ver seus dados\n\t(4) - Lista de cadastrados\n\t(5) - Adicionar um agendamento de vacina\n\n------------------------------------------------"));
    switch (res) {
        case 0:
            break;
        case 1:
            _funcionario.registrarCidadao();
            break;
        case 2:
            if (cidadao_array.length > 0) {
                _funcionario.removerCidadao();
            }
            else {
                alert("Não possui nenhum cidadão cadastrado no momento.\nCadastre um para poder fazer alguma remoção");
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
