import { pieces } from '../models/objects.js';
import { addPiece } from './piece.js';
// Mapeo de Cantidades por Pieza
export const 
getPieces = () => Object.keys(pieces.stock).map(k => 
// Mapeo de las Piezas por cantidad
pieces.stock[k].map((p) => {
    const stock = k.split('_')[1]
    // Creacion de Piezas por Tipo
    for(let i = 0; i < stock; i ++) 
    pieces['colors'].map((c) => addPiece(c,p,i))
} ) )