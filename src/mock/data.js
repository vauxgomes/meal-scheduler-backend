const ROLE = {
    ADMIN: 'Administrador',
    DRIVER: 'Motorista',
    PASSENGER: 'Passageiro'
}

module.exports = {
    ROLE: ROLE,
    users: [
        { id: 1, name: 'Vaux', role: ROLE.ADMIN },
        { id: 2, name: 'Antônio', role: ROLE.DRIVER },
        { id: 3, name: 'Geraldo', role: ROLE.DRIVER },
        { id: 4, name: 'Francisca', role: ROLE.PASSENGER },
        { id: 5, name: 'Roberto', role: ROLE.PASSENGER }
    ],
    runs: [
        {
            id: 1,
            driver: 1,
            passenger: 4,
            price: 3.0,
            date: '2012-04-24T18:25:43.511Z'
        },
        {
            id: 2,
            driver: 1,
            passenger: 5,
            price: 3.5,
            date: '2012-04-24T18:25:43.511Z'
        },
        {
            id: 3,
            driver: 1,
            passenger: 5,
            price: 2.0,
            date: '2012-04-24T18:25:43.511Z'
        },
        {
            id: 4,
            driver: 2,
            passenger: 4,
            price: 5.0,
            date: '2012-04-24T18:25:43.511Z'
        }
    ]
}
