const { addDays, isSaturday, isSunday } = require("date-fns") // Utilizando a biblioteca date-fns para manipulação de datas

function calcularDias(cargaHoraria, horasPorDia) {
  const horasTotais = Math.ceil(cargaHoraria / horasPorDia)
  return horasTotais
}

function adicionarDiasUteis(dataInicio, numDiasUteis) {
  let dataAtual = dataInicio
  let diasUteisAdicionados = 0

  while (diasUteisAdicionados < numDiasUteis) {
    dataAtual = addDays(dataAtual, 1)
    if (!isSaturday(dataAtual) && !isSunday(dataAtual)) {
      diasUteisAdicionados++
    }
  }

  return dataAtual
}

function adiarAulas(apartirDe, numDiasUteis) {
  // Adia as aulas a partir da data especificada em numDiasUteis
  // Atualiza a data de término da turma
  const novaDataTermino = adicionarDiasUteis(dataTermino, numDiasUteis)
  dataTermino = novaDataTermino

  for (let i = 0; i < aulas.length; i++) {
    if (aulas[i] >= apartirDe) {
      aulas[i] = adicionarDiasUteis(aulas[i], numDiasUteis)
    }
  }
}

// Exemplo de uso
const cargaHorariaDoCurso = 40 // Substitua pelo valor da carga horária da turma
const horasPorDiaDeAula = 4 // Substitua pelo valor das horas de aula por dia
const dataInicio = new Date("2023-09-01") // Substitua pela data de início da turma

const diasLetivos = calcularDias(cargaHorariaDoCurso, horasPorDiaDeAula)
let dataAula = dataInicio
const aulas = []

for (let i = 0; i < diasLetivos; i++) {
  dataAula = adicionarDiasUteis(dataAula, 1)
  aulas.push(new Date(dataAula))
}

let dataTermino = adicionarDiasUteis(dataInicio, diasLetivos)

console.log("Datas previstas para término das aulas:")
for (let i = 0; i < aulas.length; i++) {
  console.log(`Aula ${i + 1}: ${aulas[i].toDateString()}`)
}

console.log(
  `Data de término da turma (sem cancelamento): ${dataTermino.toDateString()}`
)

// Simulando o cancelamento de uma aula (por exemplo, a segunda aula)
const aulaCancelada = 1 // Índice da aula cancelada
const diasAdiados = 1 // Número de dias letivos para adiar

adiarAulas(aulas[aulaCancelada], diasAdiados)

console.log("Datas das aulas atualizadas:")
for (let i = 0; i < aulas.length; i++) {
  console.log(`Aula ${i + 1}: ${aulas[i].toDateString()}`)
}

console.log(
  `Nova data de término da turma (com cancelamento): ${dataTermino.toDateString()}`
)
