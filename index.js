import { Cliente } from "./src/Cliente.js";
import { Gerente } from "./src/Funcionarios/Gerente.js";
import { Diretor } from "./src/Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./src/SistemaAutenticacao.js";

const cliente = new Cliente("Rafa", 55532345871, 3584);
const gerente = new Gerente("Maraisa", 5000, 55522233311);
const diretor = new Diretor("Rafael", 10000, 55522233311);
diretor.cadastrarSenha("12345678");
gerente.cadastrarSenha("5678");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "3584");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "12345678");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "5678");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
