import { 
    box,
    pieces
} from '../models/declarations.js';

import {
    clickDrag,
    onDrag
} from "../controllers/movements.js";
// Mapeo de Cantidades por Pieza
export const getPieces = () => {
    let stock = pieces['stock'];
    Array.from(Object.keys(stock)).forEach( piece => {
        // Mapeo de las Piezas por cantidad
        stock[piece].forEach( (p) => {
        let stock = piece.split('_')[1];
        // Creacion de Piezas por Tipo
        for(let i = 0; i < stock; i ++){
            let color = pieces['colors'];
            color.forEach( (c) => addPiece(c,p,i) );
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
box.appendChild(img);
img.addEventListener('click', (e) => clickDrag(e));
img.addEventListener('dragstart', (e) => onDrag(e));
}