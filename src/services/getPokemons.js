export const getPokemon = async (limit = 25) => {
  const baseUrl = 'https://pokeapi.co/api/v2'

  const res = await fetch(`${baseUrl}/pokemon?limit=${limit}&offset=0`)
  const data = await res.json()

  const promise = data.results.map(async (pokemon) => {
    const res = await fetch(pokemon.url)
    const data = await res.json()
    return data
  })

  const allPokemon = await Promise.all(promise)

  const promiseDataSpecies = allPokemon.map(async (pokemon) => {
    const res = await fetch(pokemon.species.url)
    const data = await res.json()
    return {
      id: pokemon.id,
      name: pokemon.name,
      color: data.color.name,
      img: pokemon.sprites.front_default
    }
  })

  const allPokemonsData = await Promise.all(promiseDataSpecies)

  return allPokemonsData

}