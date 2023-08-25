const prompt = require("prompt-sync")()

// 01
let calcular = (cargaHoraria, aula) => {
    return cargaHoraria / aula
}

let cargaHoraria = parseInt(prompt("Insira a carga horaria: "))
let aula = parseInt(prompt("Insira quantas horas de aula tem por dia: "))

let resultado = calcular(cargaHoraria, aula)
let arredondado = Math.ceil(resultado)

console.log(arredondado)

// 02
class Recesso {
    constructor() {
        this.datas = [
            "2023-02-09", "2023-02-12", "2023-02-13", "2023-02-14"
        ]
    }
}

class Turma {
    constructor() {
        this.recesso = new Recesso().datas
        this.cargaHoraria = 250
        this.aulasPorDia = 4
        this.dataInicio = new Date("2023-02-01")
        this.diasAulas = this.calcularDiasAulas()
    }

    create() {
        console.log("Turma criada")
    }

    calcularDiasAulas() {
        const resultado = this.cargaHoraria / this.aulasPorDia
        const diasLetivos = Math.ceil(resultado)

        const diasAulas = []
        const dataAtual = new Date(this.dataInicio)

        while (diasAulas.length < diasLetivos) {
            if (!this.recesso.includes(dataAtual.toISOString().substr(0, 10)) && !this.isWeekend(dataAtual)) {
                diasAulas.push(new Date(dataAtual))
            }
            dataAtual.setDate(dataAtual.getDate() + 1)
        }

        return diasAulas
    }

    isWeekend(date) {
        const setDate = new Date(date)
        return setDate.getDay() === 6 || setDate.getDay() === 0
    }

    ////03
    cancelarAula(data) {
        const index = this.diasAulas.findIndex(aula => aula.toISOString().substr(0, 10) === data)
        if (index === -1) {
            console.log("Aula não encontrada para cancelamento.")
            return
        }
        this.diasAulas.splice(index, 1)
        for (let i = index; i < this.diasAulas.length; i++) {
            this.diasAulas[i].setDate(this.diasAulas[i].getDate() + 1)
        }
        this.dataInicio.setDate(this.dataInicio.getDate() + 1)
        console.log("Aula cancelada. Aulas subsequentes adiadas e data de término atualizada.")
    }
}

const minhaTurma = new Turma()
minhaTurma.create();

const dataAulaCancelada = "2023-02-07"
minhaTurma.cancelarAula(dataAulaCancelada)

console.log("Datas das aulas ajustadas:", minhaTurma.diasAulas.map(date => date.toISOString().substr(0, 10)))
console.log("Nova data de término da turma:", minhaTurma.dataInicio.toISOString().substr(0, 10))