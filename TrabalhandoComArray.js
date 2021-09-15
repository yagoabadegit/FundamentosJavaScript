// 🎯 Pop
// O array.pop() é usado para remover o último elemento de um array
const fruits = ['banana','orange','apple']
fruits.pop() //['banana','orange']


// 🎯 Shift
// O array.shift() é usado para remover o primeiro elemento do array.
const fruits = ['orange','apple']
fruits.shift() //['banana','orange']


// 🎯 Splice
// O array.splice(position, quantity) é usado para remover um elemento de uma posição especifica. O segundo parâmetro indica a quantidade de elementos que devem ser removidos.
const fruits = ['orange','apple']
fruits.splice(0, 1) //['banana','orange']

// 🎯 delete
// A opção delete remove um elemento de uma posição especifica.
const fruits = ['banana','orange','apple']
fruits.delete() //['banana','orange']