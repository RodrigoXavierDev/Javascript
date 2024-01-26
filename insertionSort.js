function insertionSort(vetor) {
    let contador = 0;

    for (let i = 1; i < vetor.length; i++) {
        let insert = vetor[i]
        let j = i - 1
        while(j >= 0 && vetor[j] > insert) {
            vetor[j + 1 ] = vetor[j]
            j = j - 1
            contador++;
        }

        vetor[j + 1] = insert
    }

    return contador;
}

let vetor = [235, 14, 1, 133, 23, 43, 21, 435, 200, 37];
let contador = insertionSort(vetor);

console.log("Codigo ordenando: " + vetor);
console.log("Numero de trocas: " + contador)
