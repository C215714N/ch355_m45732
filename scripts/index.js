"use strict";
import { getBoard } from "./views/chessboard.js";
import { getPieces } from "./views/chesspieces.js";
import { EventListeners } from "./controllers/events.js";
import { selectItem } from "./controllers/behaviors.js";
// Punto de Entrada Principal
( function () {
    getPieces();
    getBoard();
    selectItem();
    EventListeners();
} )()