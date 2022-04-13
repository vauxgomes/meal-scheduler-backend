exports.seed = async function (knex) {
    console.log('SEEDS: MEALS')

    await knex('meals').del()
    await knex('meals').insert([
        {
            title: 'Vitamina de abacate, biscoito MZ e maçã ',
            description: 'Vitamina de abacate, biscoito maizena e maçã'
        },
        {
            title: 'Cuscuz com ovos e suco de goiaba',
            description: 'Cuscuz com ovos temperados e suco de goiaba'
        },
        {
            title: 'Cuscuz com calabresa e laranja',
            description: 'Cuscuz com calabresa e laranja'
        },
        {
            title: 'Vitamina de banana, biscoito CC e maçã',
            description: 'Vitamina de banana, biscoito cream creacker e maçã'
        },
        {
            title: 'Suco de goiaba, biscoito DOCE e melão',
            description: 'Suco de goiaba, biscoito doce e melão'
        },
        {
            title: 'Macarronada com carne, salada crua e mamão',
            description:
                'Macarronada com carne moída e soja, salada crua (alface e tomate) e mamão'
        },
        {
            title: 'Risoto de frango, salada crua e laranja',
            description:
                'Risoto de frango, salada crua (alface, tomate, repolho, beterraba) e laranja'
        },
        {
            title: 'Leite com achocolatado, biscoito CC e banana',
            description:
                'Leite com achocolatado, biscoito cream cracker e banana'
        },
        {
            title: 'Arroz, carne cozida, batata doce e mamão',
            description: 'Arroz, carne cozida com legumes, batata doce e mamão'
        },
        {
            title: 'Vitamina de banana, biscoito CC e laranja',
            description: 'Vitamina de banana, biscoito cream creacker e laranja'
        },
        {
            title: 'Mingau de farinha lácea e banana',
            description: 'Mingau de farinha lácea e banana'
        },
        {
            title: 'Sopa de feijão com legumes',
            description: 'Sopa de feijão com legumes'
        },
        {
            title: 'Sopa de carne com legumes',
            description: 'Sopa de carne com legumes'
        },
        {
            title: 'Leite com achocolatado, biscoito MZ e banana',
            description: 'Leite com achocolatado, biscoito maizena e banana'
        },
        {
            title: 'Mingau de biscoito e batata',
            description: 'Mingau de biscoito e batata'
        },
        {
            title: 'Baião de dois, farofa com ovos, salada e banana',
            description:
                'Baião de dois, farofa com ovos, salada nordestina (batata doce e jerimum) e banana'
        },
        {
            title: 'Suco de goiaba, biscoito MZ e banana',
            description: 'Suco de goiaba, biscoito maizena e melão'
        },
        {
            title: 'Cuscuz com carne moída e laranja',
            description: 'Cuscuz com carne moída e soja e laranja'
        },
        {
            title: 'Vitamina de abacate, biscoito CC e mamão ',
            description: 'Vitamina de abacate, biscoito cream cracker e mamão'
        },
        {
            title: 'Arroz, frango com legumes e purê de batata',
            description: 'Arroz, frango com legumes e purê de batata'
        },
        {
            title: 'Macarronada de frango, salada crua e melancia',
            description:
                'Macarronada de frango, salada crua (alface, repolho, tomate, beterraba) e melancia'
        },
        {
            title: 'Salda de frutas e biscoito CC',
            description: 'Salda de frutas e biscoito cream cracker'
        },
        {
            title: 'Cuscuz com ovos e laranja',
            description: 'Cuscuz com ovos temperados e laranja'
        },
        {
            title: 'Suco de acelora, biscoito CC e melão',
            description: 'Suco de acelora, biscoito cream cracker e melão'
        },
        {
            title: 'Mingau de biscoito e maçã',
            description: 'Mingau de biscoito e maçã'
        },
        {
            title: 'Baião de dois, farofa de carne, batata doce e laranja',
            description: 'Baião de dois, farofa de carne, batata doce e laranja'
        },
        {
            title: 'Vitamina de goiaba, biscoito CC e maçã',
            description: 'Vitamina de goiaba, biscoito cream cracker e maçã'
        },
        {
            title: 'Cuscuz com carne e legumes e laranja',
            description: 'Cuscuz com carne e legumes e laranja'
        }
    ])
}
