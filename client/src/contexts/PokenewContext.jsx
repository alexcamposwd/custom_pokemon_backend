/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */
import React, { useState, createContext, useContext, useEffect } from 'react'
import { toast } from 'react-toastify'
import {
  getPokesRequest,
  getPokeRequest,
  createPokesRequest,
  updatePokesRequest,
  deletePokeRequest,
} from '../services/api'

const PokeContext = createContext({})

export const PokeProvider = ({ children }) => {
  const [newPokes, setNewPokes] = useState([])
  const [editPoke, setEditPoke] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPokesRequest()
      .then((res) => {
        const { data } = res
        setNewPokes(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [editPoke])

  const getPoke = async (id) => {
    try {
      const { data } = await getPokeRequest(id)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  const getPokes = async () => {
    try {
      const { data } = await getPokesRequest()
      return data
    } catch (error) {
      console.error(error)
    }
  }

  const createPoke = async (pokenew) => {
    try {
      const { data } = await createPokesRequest(pokenew)
      setNewPokes([...newPokes, data])
      toast.success('Pokémon criado com sucesse!')
    } catch (error) {
      console.error(error)
    }
  }

  const deletePoke = async (id) => {
    try {
      const res = await deletePokeRequest(id)
      if (res.status === 204) {
        setNewPokes(newPokes.filter((pokenew) => pokenew._id !== id))
        toast.success('Pokémon deletado com sucesse!')
      }
      setEditPoke(true)
    } catch (error) {
      console.error(error)
    }
  }

  const updatePoke = async (id, value) => {
    try {
      await updatePokesRequest(id, value)
      if (value) {
        setNewPokes([
          ...newPokes.map((poke) =>
            poke._id === id ? { ...newPokes, value } : poke
          ),
        ])
      }
      setEditPoke(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <PokeContext.Provider
      value={{
        newPokes,
        setNewPokes,
        getPoke,
        getPokes,
        createPoke,
        deletePoke,
        updatePoke,
        loading,
        setLoading,
      }}
    >
      {children}
    </PokeContext.Provider>
  )
}

export const usePoke = () => {
  const context = useContext(PokeContext)
  if (!context) throw new Error('Poke Provider is missing')
  return context
}
