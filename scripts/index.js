"use strict";

import { getBoard } from "./views/chessboard.js";
import { getPieces } from "./views/chesspieces.js";
import { EventListeners } from "./controllers/events.js";
import { selectItem } from "./controllers/behaviors.js";

getPieces();
getBoard();
selectItem();
EventListeners();
