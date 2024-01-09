export const assignNewColors = (oldState, pokemoncolortRGB) => {
  const pokemonsNewColorRGB = oldState.map(pokemon => {
    const pokemonColor = pokemoncolortRGB.find((e) => { return e.id == pokemon.id })
    return {
      ...pokemon,
      color: pokemonColor.color.slice(0, -1) + ' , 0.6)'
    }
  })
  return pokemonsNewColorRGB
}

