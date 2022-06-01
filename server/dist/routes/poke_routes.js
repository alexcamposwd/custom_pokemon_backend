"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const poke_controller_1 = require("../controllers/poke_controller");
// Route Create User - localhost:5000/api/v1/new
router.post('/new', poke_controller_1.createPokenew);
//Route Login - localhost:5000/api/v1/all
router.get('/all', poke_controller_1.getPokes);
//Route - localhost:5000/api/v1/pokenew/:id
router.get('/pokenew/:id', poke_controller_1.getPokenew);
//Route Private - localhost:5000/api/v1/pokeedit/:id
router.put('/pokeedit/:id', poke_controller_1.upPokenew);
//Route Delete - localhost:5000/api/v1/pokedel/:id
router.delete('/pokedel/:id', poke_controller_1.delPokenew);
exports.default = router;
