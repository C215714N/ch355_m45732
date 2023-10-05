import { d } from "../models/global.js";
import { table } from "../models/selectors.js";
import { board } from "../models/objects.js";
import { repeat } from "../controllers/chessboard.js";
export const createBoard = () => {
    board.tags.map((t,i) => {
        const rows = d.createElement(t);
        rows.innerHTML = repeat(8, board.childs[i]);
        table.append(rows);
    } )
    // Asignacion de Encabezados de Tabla
    table.querySelectorAll('th').forEach((h,i) => {
        h.innerHTML = String.fromCharCode(i + 65)
    } )
    // Creacion de Casillas por Filas
    table.querySelectorAll('tbody tr').forEach((r) => {
        r.innerHTML = repeat(8, 'td', r.id)
    } );
}