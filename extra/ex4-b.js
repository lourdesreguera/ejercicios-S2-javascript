function findArrayIndex(array, text) {
    return array.indexOf(text);
};

function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    array.splice(index, 1);
    return array;
}

console.log(removeItem(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Caracol'));
console.log(removeItem(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Mosquito'));
console.log(removeItem(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Salamandra'));
console.log(removeItem(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Ajolote'));