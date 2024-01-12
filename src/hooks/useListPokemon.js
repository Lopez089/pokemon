import { useState, useEffect, useRef } from 'react'
import { getPokemon } from '../services';
import { getColorRGBPokemon, assignNewColors } from '../utils'

export const useListPokemons = () => {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true);
  const ref = useRef([])

  useEffect(() => async () => {
    const pokemosAll = await getPokemon()
    setPokemons(pokemosAll)
    setLoading(false)
  }, [])

  useEffect(() => {
    const pokemoncolortRGB = getColorRGBPokemon(ref)

    setPokemons(oldState => {
      return assignNewColors(oldState, pokemoncolortRGB)
    })

  }, [loading]);

  return { pokemons, loading, ref }
}