const prompt=require("prompt-sync")()
//A

function calcularDiasLetivos(carga_horaria_curso, horas_por_dia) {
  let dias_letivos = carga_horaria_curso / horas_por_dia
  return math.ceil(dias_letivos)
}

let carga_horaria_curso = parseFloat(prompt("Informe a carga horária do curso em horas: "))
let horas_por_dia = parseFloat(prompt("Informe o número de horas de aula por dia: "))

let dias_letivos = calcularDiasLetivos(carga_horaria_curso, horas_por_dia)

console.log(`A quantidade de dias letivos é: ${dias_letivos}`)
//B

function calcularDiasLetivos(carga_horaria_curso, horas_por_dia) {
    let dias_letivos = carga_horaria_curso / horas_por_dia
    return math.ceil(dias_letivos)
}

function adicionarDiasUteis(data,dias) {
    let nova_data = new Date(data)
    while (dias > 0) {
    nova_data.setDate(nova_data.getDate() + 1)
    if (nova_data.getDay() !== 0 && nova_data.getDay() !== 6) {
    dias--
  }
}
    return novaData
}

let cargaHorariaCurso = parseFloat(prompt("Informe a carga horária do curso em horas: "))
let horasPorDia = parseFloat(prompt("Informe o número de horas de aula por dia: "))

let diasLetivos = calcularDiasLetivos(cargaHorariaCurso, horasPorDia);

let dataInicio = new Date(prompt("Informe a data de início da turma (no formato 'YYYY-MM-DD'): "))

let diasRecesso = parseInt(prompt("Informe o número de dias de recesso (0 se não houver): ")) || 0

let dataAtual = new Date(dataInicio)
for (let i = 0; i < diasLetivos; i++) {
    dataAtual = adicionarDiasUteis(dataAtual, 1)
}

if (diasRecesso > 0) {
    dataAtual = adicionarDiasUteis(dataAtual, diasRecesso)
}

console.log(`A quantidade de dias letivos é: ${diasLetivos}`)
console.log(`A data de término da turma é: ${dataAtual.toISOString().split('T')[0]}`)

//C

function calcularDiasLetivos(carga_horaria_curso, horas_por_dia) {
    let dias_letivos = carga_horaria_curso / horas_por_dia
    let diasLetivosArredondados = Math.ceil(dias_letivos)
    return  diasLetivosArredondados
}

function adicionarDiasUteis(data, dias) {
    let nova_data = new Date(data)
    while (dias > 0) {
    nova_data.setDate(nova_data.getDate() + 1)
    if (nova_data.getDay() !== 0 && nova_data.getDay() !== 6) {
    dias--
    }
    }
    return nova_data
}

function cancelarAula(dataAulaCancelada, dataInicio, diasRecesso) {
    let dataAtual = new Date(dataInicio)
    let diasAdiados = 0
    
    while (dataAtual.toISOString().split('T')[0] !== dataAulaCancelada) {
        dataAtual = adicionarDiasUteis(dataAtual, 1)
        diasAdiados++
    }

    let diasLetivos = calcularDiasLetivos(cargaHorariaCurso, horasPorDia)
    let novaDataTermino = new Date(dataInicio);
    for (let i = 0; i < diasLetivos; i++) {
        novaDataTermino = adicionarDiasUteis(novaDataTermino, 1)
    }
    if (diasRecesso > 0) {
        novaDataTermino = adicionarDiasUteis(novaDataTermino, diasRecesso)
    }

    console.log(`A aula cancelada foi em ${dataAulaCancelada}.`)
    console.log(`Foram adiados ${diasAdiados} dias letivos.`)
    console.log(`A nova data de término da turma é: ${novaDataTermino.toISOString().split('T')[0]}`)
}

    carga_horaria_curso = parseFloat(prompt("Informe a carga horária do curso em horas: "))
    horas_por_dia = parseFloat(prompt("Informe o número de horas de aula por dia: "))

    dataInicio = new Date(prompt("Informe a data de início da turma (no formato 'YYYY-MM-DD'): "))

    diasRecesso = parseInt(prompt("Informe o número de dias de recesso (0 se não houver): ")) || 0

const dataAulaCancelada = prompt("Informe a data da aula que será cancelada (no formato 'YYYY-MM-DD'): ")

cancelarAula(dataAulaCancelada, dataInicio, diasRecesso)