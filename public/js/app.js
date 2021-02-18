// Utilizando Javascript, crie uma função o mais 
// simples possível que receba um Array de objetos 
// Pessoa (formato exemplo: {name: "Alex",age: 24} ) 
// que retorne um novo Array somente com os objetos 
// Pessoa que possuem idade entre 20 e 30 anos.

let a = [
  { name: 'Pedro', age: Math.floor(Math.random() * 101 - 20) },
  { name: 'fadgg', age: Math.floor(Math.random() * 101 - 20) },
  { name: 'asgasgd', age: Math.floor(Math.random() * 101 - 20) },
  { name: 'asdgadg', age: Math.floor(Math.random() * 101 - 20) },
  { name: 'a4awg4agw', age: Math.floor(Math.random() * 101 - 20) },
  { name: 'a4g44gaw4', age: Math.floor(Math.random() * 101 - 20) }
]

// console.log(a)
console.log(a.filter((pessoa) => pessoa.age >= 20 && pessoa.age <= 30));
