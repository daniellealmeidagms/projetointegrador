class Curso {
  dataInicio: Date
  horasTotais: number
  horasPorDia: number
  diasInstrucionais: number
  dataFim: Date
  dataAula: Date[]

  constructor(dataInicio: string, horasTotais: number, horasPorDia: number) {
    this.dataInicio = new Date(dataInicio)
    this.horasTotais = horasTotais
    this.horasPorDia = horasPorDia
    this.diasInstrucionais = Math.ceil(horasTotais / horasPorDia)
    this.dataFim = this.calcularDataFim()
    this.dataAula = this.gerarDatasAula()
  }

  calcularDataFim(): Date {
    const diasNecessarios = this.diasInstrucionais
    const msPorDia = 24 * 60 * 60 * 1000
    const dataInicio = new Date(this.dataInicio)
    let dataFim = new Date(dataInicio.getTime() + diasNecessarios * msPorDia)

    while (dataFim.getDay() === 0 || dataFim.getDay() === 6) {
      dataFim = new Date(dataFim.getTime() + msPorDia)
    }

    return dataFim
  }

  gerarDatasAula(): Date[] {
    const dataAula: Date[] = []
    const msPorDia = 24 * 60 * 60 * 1000
    let dataAtual = new Date(this.dataInicio)

    while (dataAula.length < this.diasInstrucionais) {
      if (dataAtual.getDay() !== 0 && dataAtual.getDay() !== 6) {
        dataAula.push(new Date(dataAtual))
      }
      dataAtual = new Date(dataAtual.getTime() + msPorDia)
    }

    return dataAula
  }

  cancelarAula(indiceAula: number): void {
    if (indiceAula < 0 || indiceAula >= this.dataAula.length) {
      console.log("Índice de aula inválido.")
      return
    }

    this.dataAula.splice(indiceAula, 1)
    this.diasInstrucionais--
    this.dataFim = this.calcularDataFim()
  }
}

const dataInicio = "2023-09-01"
const horasTotais = 40
const horasPorDia = 4

const curso = new Curso(dataInicio, horasTotais, horasPorDia)
console.log("Curso Inicial:", curso)

curso.cancelarAula(2)
console.log("Curso após o cancelamento da aula:", curso)
