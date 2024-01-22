let marsrutai = [
    {
        marsrutas: 'Vilnius - Kaunas',
        isvykimoLaikas: '2024-01-30, 06:00',
        kelionesTrukme: '1:00'
    },
    {
        marsrutas: 'Vilnius - Klaipeda',
        isvykimoLaikas: '2024-01-30, 08:00',
        kelionesTrukme: '2:45'
    },
    {
        marsrutas: 'Vilnius - Ryga',
        isvykimoLaikas: '2024-01-30, 09:00',
        kelionesTrukme: '3:30'
    },
    {
        marsrutas: 'Vilnius - Berlinas',
        isvykimoLaikas: '2024-01-30, 10:00',
        kelionesTrukme: '10:00'
    },
    {
        marsrutas: 'Vilnius - Barselona',
        isvykimoLaikas: '2024-01-30, 12:00',
        kelionesTrukme: '26:35'
    }
];

function marsrutasIsMiestoAIMiestaB(marsrutas) {
    const isvykimoPilnaDataIrLaikas = marsrutas.isvykimoLaikas.split(', ');

    const dataIsvykimo = isvykimoPilnaDataIrLaikas[0];
    const laikasIsvykimo = isvykimoPilnaDataIrLaikas[1];

    /* const atvykimoData =  */
    /* const atvykimoLaikas = (laikasIsvykimo + marsrutas.kelionesTrukme);
     nesugalvojau kaip sudeti laiko ir datos*/
    console.log('Marsrutas is miesto ' + marsrutas.marsrutas + ' i miesta');
    console.log('Isvykomo data:', dataIsvykimo + ' Isvykimo laikas ' + laikasIsvykimo);
    console.log('Keliones trukme ' + marsrutas.kelionesTrukme);
    /* console.log('Atvykimo data ' + atvykimoData + 'Atvykimo laikas'); */


}

// Loop through the array and call the function for each object
marsrutai.forEach(marsrutasIsMiestoAIMiestaB);