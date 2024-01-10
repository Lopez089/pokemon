import { useState, useEffect, useRef } from 'react'
import { getPokemon } from '../services';
import { getColorRGBPokemon, assignNewColors } from '../utils'

export const useListPokemons = () => {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true);
  const ref = useRef([])

  console.log("🚀 ~ useListPokemons ~ pokemons:", pokemons)
  useEffect(() => async () => {
    setPokemons(await getPokemon())
    console.log('1')
    setLoading(false)
    console.log('2')
  }, [])

  useEffect(() => {
    const pokemoncolortRGB = getColorRGBPokemon(ref)

    setPokemons(oldState => {
      return assignNewColors(oldState, pokemoncolortRGB)
    })

  }, [loading]);

  return { pokemons, loading, ref }
}