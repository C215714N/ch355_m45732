import { box, table } from '../models/selectors.js';
import { createBoard } from './rows.js';
import { eventListeners } from '../controllers/listeners.js';

// Creacion del Tablero de Ajedrez
export const getBoard = () => {
    createBoard();
    eventListeners([box]);
    eventListeners([table]);
}