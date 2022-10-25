import {
    d,
    box,
    table,
    board
} from '../models/declarations.js';

import {
    onDragOver,
    onDragLeave,
    onDrop,
    clickDrop
} from "../controllers/movements.js";
// Bucle de creacion de Celdas
const repeat = (total, tag, parent) => {
    let data = '';
    for(let i = 0; i < total; i++){
    data+=`<${tag} id="${tag == 'tr' ? 
        parseInt(i + 1) :
        parent ? String.fromCharCode(i + 65) + parent : 
        String.fromCharCode(i + 65) }">
    </${tag}>`
    }
    return data;
}
// Creacion del Tablero de Ajedrez
export const getBoard = () => {
    Array.from(board.tags).forEach( (t,i) => {
        let rows = d.createElement(t);
        rows.innerHTML = repeat(8, board.childs[i]);
        table.appendChild(rows);
    });
    createBoard();
    eventListeners([box]);
    eventListeners([table]);
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
const eventListeners = (tags) => {
// Asignacion de Eventos de Casillas 
tags.forEach((t) => {
    t.addEventListener( 'dragover', (e) => onDragOver(e) )
    t.addEventListener( 'dragleave', (e) => onDragLeave(e) )
    t.addEventListener( 'drop', (e) => onDrop(e) )
    t.addEventListener( 'click', (e) => clickDrop(e) )
} );
}