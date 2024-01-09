import { useState } from 'react'
import { getPokemonInfo } from '../services'

export const usePokemonInfo = (pokemons) => {
  const [pokemonInfo, setPokemonInfo] = useState(null)

  const handleModal = async (id) => {
    setPokemonInfo(await getPokemonInfo(pokemons, id))
  }

  return { handleModal, pokemonInfo, setPokemonInfo }
} 