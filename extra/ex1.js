const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
];

let newCategories = [];

for (const movie of movies) {
    const category = movie.categories;
    for (let i = 0; i < category.length; i++) {
        if (!newCategories.includes(category[i])) {
            newCategories.push(category[i])
        }
    }
}
console.log(newCategories)