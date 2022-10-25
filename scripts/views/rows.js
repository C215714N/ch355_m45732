import { d, table } from "../models/declarations.js";
import { board } from "../models/objects.js";
import { repeat } from "../controllers/chessboard.js";
export const createBoard = () => {
    Array.from(board.tags).forEach( (t,i) => {
        let rows = d.createElement(t);
        rows.innerHTML = repeat(8, board.childs[i]);
        table.appendChild(rows);
    });
    // Asignacion de Encabezados de Tabla
    table.querySelectorAll('th').forEach((h,i) => {
        h.innerHTML = String.fromCharCode(i + 65)
    } );
    // Creacion de Casillas por Filas
    table.querySelectorAll('tbody tr').forEach((r) => {
        r.innerHTML = repeat(8, 'td', r.id)
    } );
}