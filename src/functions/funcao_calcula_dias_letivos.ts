
// A)

const { isSameDay } = require('date-fns')

const prompt =  require("prompt-sync")()

const calcula_dias_letivo = (carga_horaria, horas_dias) => {return carga_horaria / horas_dias}

const carga_horaria = 200
const horas_dias = 4

let dias_letivos = calcula_dias_letivo(carga_horaria, horas_dias)
console.log(`Dias letivos do cruso "${dias_letivos}" dias`)

// -------------------------------------------------------------------------------------------------------------------

// B)
// 1 aula para cada dia letivo a partir dia inicio
// não ha aulas no (sabado/domingo e datas recessos)
// avisar a data termino da turma

// data atual hoje
const dataInicio = new Date(prompt("Digite a data de início(Ano - no formato Y-M-D): "))

// Defina uma lista de feriados (você pode adicionar os feriados relevantes aqui)
const feriados = [new Date("2023-12-25"), new Date("2024-01-01")]

let dataAtual = new Date(dataInicio)

let aulasCanceladas = 0

// Loop para encontrar a data final
while (dias_letivos > 0 && aulasCanceladas > 0) {
  // Verifique se a data atual não é um final de semana ou feriado
  if (dataAtual.getDay() !== 6 && dataAtual.getDay() !== 0 && !feriados.some((feriado) => isSameDay (feriado, dataAtual))) {
    // aulasCanceladas--
    
  }
  dataAtual.setDate(dataAtual.getDate() + 1); // Adicione um dia à data atual
  // dataAtual = addDays(dataAtual, 1) // Avance para o próximo dia
}

console.log(`A turma terminará em: ${dataAtual.toISOString().split("T")[0]}`)


// -------------------------------------------------------------------------------------------------------------------

// C)
function adiarAulas() {
  aulasCanceladas = parseInt(prompt("Quantas aulas foram canceladas? "))
  
  if (aulasCanceladas < 0) {
    console.log("Número inválido de aulas canceladas.")
    return
  }
  return 
}


adiarAulas()
