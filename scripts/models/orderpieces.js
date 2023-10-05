import { d } from './global.js';
import { board, pieces } from './objects.js';
// Organizacion de Piezas en el Tablero
const setPosition = ({ piece, index, color, cells }) => {
for (let [i, tag] of [piece,`p${index}`].entries()){
    const img = d.getElementById(`${color}${tag}`)
    const cell = d.getElementById(String.fromCharCode(index + 65) + cells[i])
    cell.append(img);
} }
export const setOrder = () => board.position.map((p, i) => {
    const color = pieces.colors[i]
    const pawns = board.pawns[i]
    board.pieces.map((piece, index) => setPosition( {
        color, piece, index,
        cells: [p, pawns]
    } ) ) 
} )