import { d } from "./declarations.js";
import { board, pieces } from "./objects.js";
// Organizacion de Piezas en el Tablero

const setPosition = (config) => {
for (let [i, tag] of [config.piece,`p${config.index}`].entries()){
    let img = d.getElementById(`${config.color}${tag}`)
    let cell = d.getElementById(String.fromCharCode(config.index + 65) + config.cells[i])
    cell.append(img);
} }

export const setOrder = () => {
    board.position.forEach( ( p, i ) => {
        let color = pieces.colors[i];
        let pawns = board.pawns[i];
        board.pieces.forEach((piece,i) => 
        setPosition( {
            color: color,
            piece: piece,
            cells: [p, pawns],
            index: i
        } ) );
        } );
    }