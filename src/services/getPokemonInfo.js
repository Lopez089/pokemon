export const getPokemonInfo = async (pokemons, pokemon) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await res.json()

    const responseSpecie = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`)
    const dataSpecie = await responseSpecie.json()

    return {
      name: data.name,
      id: data.id,
      color: pokemons[data.id - 1].color,
      type: data.types[0].type.name,
      img: data.sprites.front_default,
      description: dataSpecie.flavor_text_entries[6].flavor_text,
      info: [
        {
          name: 'height',
          info: data.height,
        },
        {
          name: 'weight',
          info: data.weight,
        },
        {
          name: 'category',
          info: (dataSpecie.genera[7].genus).split(' ')[0],
        },
        {
          name: 'abilities',
          info: data.abilities[0].ability.name,
        }
      ],
      characteristics:
        data.stats.map(stat => {
          return {
            base_start: stat.base_stat,
            name: stat.stat.name,
          }
        })

    }
  } catch (error) {
    throw new Error(error)
  }
}