
//A

function calcularDiasLetivos(carga_horaria_curso, horas_por_dia) {
  let dias_letivos = carga_horaria_curso / horas_por_dia
  return math.ceil(dias_letivos)
}

let carga_horaria_curso = parseFloat
let horas_por_dia = parseFloat

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

let cargaHorariaCurso = parseFloat
let horasPorDia = parseFloat

let diasLetivos = calcularDiasLetivos(cargaHorariaCurso, horasPorDia);

let dataInicio = new Date

let diasRecesso = parseInt|| 0

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

    carga_horaria_curso = parseFloat
    horas_por_dia = parseFloat

    dataInicio = new Date

    diasRecesso = parseInt|| 0

const dataAulaCancelada = prompt

cancelarAula(dataAulaCancelada, dataInicio, diasRecesso)