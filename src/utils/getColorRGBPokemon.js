export const getColorRGBPokemon = (ref) => {

  const colorRGBPokemon = ref.current.map(pokemonElement => {
    const element = window.getComputedStyle(pokemonElement)
    const rgb = element.getPropertyValue('background-color')

    return {
      id: pokemonElement.getAttribute('id'),
      color: rgb,
    }
  })
  return colorRGBPokemon
}