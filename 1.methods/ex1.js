const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

let result = [];
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.toLowerCase().includes('Camiseta'.toLowerCase())) {
        result.push(product);    
    }
}
console.log(result);