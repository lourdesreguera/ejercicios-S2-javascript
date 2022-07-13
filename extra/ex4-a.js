function findArrayIndex(array, text) {
    return array.indexOf(text);
};

console.log(findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Caracol'));
console.log(findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Mosquito'));
console.log(findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Salamandra'));
console.log(findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Ajolote'));