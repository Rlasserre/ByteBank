import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Contas/ContaCorrente.js";
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";
import { ContaSalario } from "./Contas/ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrente1 = new ContaCorrente(cliente1, 1001);
const contaPoupanca1 = new ContaPoupanca(50, cliente1, 1001);
const contaSalario1 = new ContaSalario(cliente1);
contaSalario1.depositar(100);
contaSalario1.sacar(10);

console.log(contaSalario1);

