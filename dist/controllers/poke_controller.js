"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delPokenew = exports.upPokenew = exports.getPokenew = exports.getPokes = exports.createPokenew = void 0;
const Pokenew_1 = __importDefault(require("../models/Pokenew"));
function createPokenew(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { url, name, type1, type2, hp, attack, defense, specAtc, specDef, speed, title1, description1, title2, description2 } = req.body;
            // Check User Exists
            const pokeExists = yield Pokenew_1.default.findOne({ name: name });
            if (pokeExists)
                return res.status(422).json({ message: 'already existing Pokémon!' });
            const newPoke = new Pokenew_1.default({
                url: url,
                name: name,
                types: {
                    type1: type1,
                    type2: type2,
                },
                stats: {
                    hp: hp,
                    attack: attack,
                    defense: defense,
                    specAtc: specAtc,
                    specDef: specDef,
                    speed: speed,
                },
                abilities: {
                    ability1: {
                        title1: title1,
                        description1: description1,
                    },
                    ability2: {
                        title2: title2,
                        description2: description2
                    }
                }
            });
            yield newPoke.save();
            return res.json({
                newPoke
            });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json('A server error has occurred, please try again.' + error);
        }
    });
}
exports.createPokenew = createPokenew;
function getPokes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pokes = yield Pokenew_1.default.find();
            return res.json(pokes);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json('A server error has occurred, please try again.' + error);
        }
    });
}
exports.getPokes = getPokes;
function getPokenew(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = (req.params.id).toString();
            const pokenew = yield Pokenew_1.default.findById(id);
            return res.json(pokenew);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json('A server error has occurred, please try again.' + error);
        }
    });
}
exports.getPokenew = getPokenew;
function upPokenew(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = (req.params.id);
            const pokeExist = yield Pokenew_1.default.findById(id);
            if (!pokeExist)
                return res.status(404).json({ message: 'Pokémon not found!' });
            const updatePokenew = yield Pokenew_1.default.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            return res.json({
                message: 'Pokémon updated successfully!',
            });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json('A server error has occurred, please try again.' + error);
        }
    });
}
exports.upPokenew = upPokenew;
function delPokenew(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = (req.params.id).toString();
            const pokenew = yield Pokenew_1.default.findByIdAndRemove(id);
            if (!pokenew)
                return res.status(404).json({ message: "Pokémon not found!" });
            return res.json({ message: 'Pokémon successfully deleted!' });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json('A server error has occurred, please try again.' + error);
        }
    });
}
exports.delPokenew = delPokenew;
