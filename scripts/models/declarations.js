// Variables Globales
export const d = document,
    className = 'active',
    box = d.querySelector('#app .box'),
    table = d.querySelector('#app .table'),
    btn = d.querySelector('.btn.open-menu'),
    menu = d.querySelector('#menu'),
    start = d.querySelector('.start-game'),
    control = d.querySelectorAll('.ctrl'),
// Objetos Referencia
    pieces = {
    stock: {
        r_1: ['q','k'],
        r_2: ['t','n','b'],
        r_8: ['p']
    },
    colors: ['w', 'b']
    },
    board = {
    pieces: [
        ...pieces.stock.r_2.map(p => p + 0),
        ...pieces.stock.r_1.map(p => p + 0),
        ...pieces.stock.r_2.reverse().map(p => p + 1)
    ].concat(),
    position: ['1','8'],
    pawns: ['2','7'],
    tags: ['thead', 'tbody'],
    childs: ['th', 'tr']
    },
    current = ''