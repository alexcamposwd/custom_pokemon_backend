"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
exports.PokeSchema = new mongoose_1.Schema({
    createdAt: Date,
    url: { type: String, required: true },
    name: { type: String, required: true },
    types: {
        type1: { type: String, required: true },
        type2: { type: String, required: true },
    },
    stats: {
        hp: { type: String },
        attack: { type: String },
        defense: { type: String },
        specAtc: { type: String },
        specDef: { type: String },
        speed: { type: String }
    },
    abilities: {
        ability1: {
            title1: { type: String },
            description1: { type: String },
        },
        ability2: {
            title2: { type: String },
            description2: { type: String },
        }
    }
}, {
    timestamps: true,
    collection: 'pokenews',
    versionKey: false
});
const Pokenew = mongoose_1.default.model("Pokenew", exports.PokeSchema);
exports.default = Pokenew;
