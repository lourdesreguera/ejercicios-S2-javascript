const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
];

alumns.forEach(element => {
    if (element.T1 && element.T2 || element.T2 && element.T3 || element.T1 && element.T3) {
        element.isApproved = true;
    } else {
        element.isApproved = false;
    }
});

console.log(alumns);



// for (let i = 0; i < alumns.length; i++) {
//     const alumn = alumns[i];
//     let cuenta = 0;

//     cuenta = alumn.T1 ? cuenta + 1 : cuenta;
//     cuenta = alumn.T2 ? cuenta + 1 : cuenta;
//     cuenta = alumn.T3 ? cuenta + 1 : cuenta;

//     alumn.isApproved = cuenta >= 2 ? true : false;
// }

// console.log(alumns);