const ROLE = {
    ROOT: 'Root',
    ADMIN: 'Administrador',
    USER: 'Usuário'
}

const TURN = {
    MORNING: 'Manhã',
    AFTERNOON: 'Tarde',
    NIGHT: 'Noite'
}

module.exports = {
    ROLE: ROLE,
    users: [
        {
            id: 1,
            name: 'Vaux',
            login: 'user1',
            pass: '123',
            role: ROLE.ROOT,
            active: true
        },
        {
            id: 2,
            name: 'Antônio',
            login: 'user2',
            pass: '123',
            role: ROLE.ADMIN,
            active: true
        },
        {
            id: 3,
            name: 'Geraldo',
            login: 'user3',
            pass: '123',
            role: ROLE.USER,
            active: true
        },
        {
            id: 4,
            name: 'Francisca',
            login: 'user4',
            pass: '123',
            role: ROLE.USER,
            active: true
        }
    ],

    students: [
        {
            user_id: 3,
            registration_code: '20220000001',
            course: 'Informática para Internet',
            food_restriction: false
        },
        {
            user_id: 4,
            registration_code: '20220000002',
            course: 'Automação Industrial',
            food_restriction: true
        }
    ],

    meals: [
        { id: 1, description: 'Meal 1', calorific_value: 100 },
        { id: 2, description: 'Meal 2', calorific_value: 200 },
        { id: 3, description: 'Meal 3', calorific_value: 300 },
        { id: 4, description: 'Meal 4', calorific_value: 400 }
    ],

    schedules: [
        { meal_id: 1, date: '2022-03-21', turn: TURN.MORNING },
        { meal_id: 2, date: '2022-03-21', turn: TURN.AFTERNOON },
        { meal_id: 3, date: '2022-03-21', turn: TURN.NIGHT },
        { meal_id: 4, date: '2022-03-22', turn: TURN.MORNING },
        { meal_id: 2, date: '2022-03-22', turn: TURN.AFTERNOON },
        { meal_id: 3, date: '2022-03-22', turn: TURN.NIGHT },
    ]
}
