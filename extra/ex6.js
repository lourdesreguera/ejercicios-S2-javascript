function swap(array, index1, index2) {
    let i1 = array.slice(index1, index1 + 1);
    let i2 = array.slice(index2, index2 + 1);
    array[index1] = i2.toString();
    array[index2] = i1.toString(); 
    return array;
}

console.log(swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 1, 2))