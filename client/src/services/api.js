import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
})

export const apiNew = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  headers: {
    'Content-type': 'application/json',
  },
})

export const getPokesRequest = () => apiNew.get('/all')

export const getPokeRequest = (id) => apiNew.get(`/pokenew/${id}`)

export const createPokesRequest = (data) => apiNew.post('/new', data)

export const updatePokesRequest = (id, data) =>
  apiNew.put(`/pokeedit/${id}`, data)

export const deletePokeRequest = (id) => apiNew.delete(`/pokedel/${id}`)
