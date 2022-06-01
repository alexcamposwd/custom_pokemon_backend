import { Request, Response, NextFunction } from 'express'

import Pokenew from '../models/Pokenew'

export async function createPokenew(req: Request, res: Response): Promise<Response> {
  try {
    const { url, name, type1, type2, hp, attack, defense, specAtc, specDef, speed, title1, description1, title2, description2 } = req.body

    // Check User Exists
    const pokeExists = await Pokenew.findOne({ name: name })
    if (pokeExists) return res.status(422).json({ message: 'already existing Pokémon!' })

    const newPoke = new Pokenew({
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
    })

    await newPoke.save()

    return res.json({
      newPoke
    })
  }
  catch (error) {
    console.log(error)
    return res.status(500).json('A server error has occurred, please try again.' + error)
  }
}

export async function getPokes(req: Request, res: Response): Promise<Response> {
  try {
    const pokes = await Pokenew.find()
    return res.json(pokes)
  }
  catch (error) {
    console.log(error)
    return res.status(500).json('A server error has occurred, please try again.' + error)
  }
}

export async function getPokenew(req: Request, res: Response): Promise<Response> {
  try {
    const id = (req.params.id).toString()
    const pokenew = await Pokenew.findById(id)
    return res.json(pokenew)
  }
  catch (error) {
    console.log(error)
    return res.status(500).json('A server error has occurred, please try again.' + error)
  }
}

export async function upPokenew(req: Request, res: Response): Promise<Response> {
  try {
    const id = (req.params.id)
    const pokeExist = await Pokenew.findById(id)
    if (!pokeExist) return res.status(404).json({ message: 'Pokémon not found!' })

    const updatePokenew = await Pokenew.findByIdAndUpdate(id, req.body, {
      new: true,
    })

    return res.json({
      message: 'Pokémon updated successfully!',
    })
  }
  catch (error) {
    console.log(error)
    return res.status(500).json('A server error has occurred, please try again.' + error)
  }
}

export async function delPokenew(req: Request, res: Response): Promise<Response> {
  try {
    const id = (req.params.id).toString()
    const pokenew = await Pokenew.findByIdAndRemove(id)
    if (!pokenew) return res.status(404).json({ message: "Pokémon not found!" })

    return res.json({ message: 'Pokémon successfully deleted!' })
  }
  catch (error) {
    console.log(error)
    return res.status(500).json('A server error has occurred, please try again.' + error)
  }
}