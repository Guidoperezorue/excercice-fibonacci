// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

let list = []
let valorInicial = 0
let valorSumado = 1

function fibonacci (num) {
        list.push(1)
    for (let i = 1; i<num; i++){
        let total = valorInicial + valorSumado
        list.push(total)
        valorInicial = valorSumado
        valorSumado = total
    }
}

fibonacci(7)

console.log(list)

console.log(list[5])