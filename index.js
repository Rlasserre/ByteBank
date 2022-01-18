import { Cliente } from "./src/Cliente.js";
import { Gerente } from "./src/Funcionarios/Gerente.js";
import { Diretor } from "./src/Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./src/SistemaAutenticacao.js";

const gerente1 = new Gerente("Maraisa", 5000, 55522233311);
const diretor1 = new Diretor("Rafael", 10000, 55522233311);
diretor1.cadastrarSenha("12345678");

const estaLogado = SistemaAutenticacao.login(diretor1, "12345678");

console.log(estaLogado);
