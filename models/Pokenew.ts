import mongoose, { Document, Schema, model } from "mongoose";

export const PokeSchema: Schema = new Schema({
  createdAt: Date,
  url: { type: String, required: true },
  name: { type: String, required: true },
  types: {
    type1: {type: String, required: true},
    type2: {type: String, required: true},
  },
  stats: {
    hp: {type: String},
    attack: {type: String},
    defense: {type: String},
    specAtc: {type: String},
    specDef: {type: String},
    speed: {type: String}
  },
  abilities: {
    ability1: {
      title1: {type: String},
      description1: {type: String},
    },
    ability2: {
      title2: {type: String},
      description2: {type: String},
    }
  }  
}, {
  timestamps: true,
  collection: 'pokenews',
  versionKey: false
});

const Pokenew = mongoose.model("Pokenew", PokeSchema);

export default Pokenew


