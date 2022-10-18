// Variables Globales
    let d = document;
    let box = d.querySelector('#app .box');
    let table = d.querySelector('#app .table');
    let btn = d.querySelector('.btn.open-menu');
    let menu = d.querySelector('.menu');
    let start = d.querySelector('.start-game');
// Objetos Referencia
    let pieces = {
        stock: {
            r_1: ['k','q'],
            r_2: ['t','n','b'],
            r_8: ['p']
        },
        colors: ['b', 'w']
    };
    let board = {
        pieces: [
            ...pieces.stock.r_2.map(p => p + 0),
            ...pieces.stock.r_1.map(p => p + 0),
            ...pieces.stock.r_2.reverse().map(p => p + 1)
        ].concat(),
        position: ['A','H'],
        pawns: ['B','G'],
        tags: ['thead', 'tbody'],
        childs: ['th', 'tr']
    }
    let current = [];
// Funcion Alternar Clases
    const toggle = (config) => {
        if (config.target.classList.toggle(config.status)){
            config.tag.classList.replace(config.list[0], config.list[1])
        } else {
            config.tag.classList.replace(config.list[1], config.list[0])
        }
    }
// Funciones Arrastrar y Soltar
    const onDrag = (e) => {
        e.dataTransfer.setData('piece', e.target.id)
    }
    const onDragOver = (e) => {
        e.preventDefault();
        e.target.classList.add('dragover');
    }
    const onDragLeave = (e) => {
        e.target.classList.remove('dragover')
    }
    const onDrop = (e) => {
        let dragged = e.dataTransfer.getData('piece');
        let piece = d.getElementById(dragged);
        e.target.appendChild(piece);
        e.target.classList.remove('dragover');
    }
// Funciones Click para mover
    const clickDrag = (e) => {
        current = e.target;
    }
    const clickDrop = (e) => {
        e.target.appendChild(current);
    }
// Bucle de creacion de Celdas
    const repeat = (total, tag, parent) => {
        let data = '';
        for(let i = 0; i < total; i++){
            data+=`<${tag} id="${tag == 'tr' ? 
                String.fromCharCode(i + 65) : 
                parent ? parent + parseInt(i + 1) : parseInt(i + 1)}">
            </${tag}>`
        }
        return data;
    }
// Mapeo de Cantidades por Pieza
    const getPieces = () => {
        let stock = pieces['stock'];
        Array.from(Object.keys(stock)).forEach( piece => {
            // Mapeo de las Piezas por cantidad
            stock[piece].forEach( (p) => {
            let stock = piece.split('_')[1];
            // Creacion de Piezas por Tipo
            for(let i = 0; i < stock; i ++){
                let color = pieces['colors']
                color.forEach( (c) => addPiece(c,p,i) ) 
            } } ) 
        } );    
    }
    const addPiece = (color, piece, index) => {
        let img = document.createElement('img');
        // Asignacion de Atributos
        Object.assign(img, {
            src: `assets/${color}${piece}.svg`,
            id: `${color}${piece}${index}`,
            alt: `${color}${piece}`,
            draggable: true
        } )
        box.appendChild(img)
        img.addEventListener('click', (e) => clickDrag(e))
        img.addEventListener('dragstart', (ev) => onDrag(ev))
    }
// Creacion del Tablero de Ajedrez
    const getBoard = () => {
        Array.from(board.tags).forEach( (t,i) => {
            let rows = d.createElement(t);
            rows.innerHTML = repeat(8, board.childs[i]);
            table.appendChild(rows);
        });
        createBoard();
        eventListeners();
    }
    const createBoard = () => {
        // Asignacion de Encabezados de Tabla
        table.querySelectorAll('th').forEach((h,i) => {
            h.innerHTML = String.fromCharCode(i + 65)
        } );
        // Creacion de Casillas por Filas
        table.querySelectorAll('tbody tr').forEach((r) => {
            r.innerHTML = repeat(8, 'td', r.id)
        } );
    }
    const eventListeners = () => {
        // Asignacion de Eventos de Casillas 
        table.querySelectorAll('td').forEach((t) => {
            t.addEventListener( 'dragover', (e) => onDragOver(e) )
            t.addEventListener( 'dragleave', (e) => onDragLeave(e) )
            t.addEventListener( 'drop', (e) => onDrop(e) )
            t.addEventListener( 'click', (e) => clickDrop(e))
        });
    }
// Organizacion de Piezas en el Tablero
    const setOrder = () => {
        board.position.forEach( ( p, i ) => {
            let color = pieces.colors[i];
            let pawns = board.pawns[i];
            board.pieces.forEach((piece,i) => 
                setPosition({
                    color: color,
                    piece: piece,
                    cells: [ p, pawns ],
                    index: i
            } ) );
        } );
    }
    const setPosition = (config) => {
        for (let [i, tag] of [config.piece,`p${config.index}`].entries()){
            let img = d.getElementById(`${config.color}${tag}`)
            let cell = d.getElementById(`${config.cells[i]}${config.index + 1}`)
            cell.append(img);
    } }
// Renderizado
getPieces();
getBoard();
// Eventos Principales
btn.addEventListener( 'click', (e) => toggle({
    tag: e.target,
    target: menu,
    status: 'active',
    list: ['open-menu','close-menu']
} ) )
start.addEventListener( 'click', (e) => {
    setOrder();
    toggle({
        tag: e.target,
        target: box,
        status: 'empty',
        list: ['start-game', 'end-game']
    } )
} )
