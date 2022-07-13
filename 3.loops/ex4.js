const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}];

let toysArr = [];
for (const toy of toys) {
    if (!toy.name.toLowerCase().includes('gato'.toLocaleLowerCase())) {
        toysArr.push(toy)
    }
}
console.log(toysArr);