import { pieces } from '../models/objects.js';
import { addPiece } from './piece.js';
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