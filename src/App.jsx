import { useState } from 'react'
import { useListPokemons } from './hooks'
import { Modal } from './components'
import './App.css'

// Todo 
// refactor de get de listado de pokemon
// refactor del info pokemon

const App = () => {
  const { pokemons, loading, ref } = useListPokemons()
  const [pokemonInfo, setPokemonInfo] = useState(null)

  const getPokemonInfo = async (pokemon) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      const data = await res.json()
      console.log("🚀 ~ file: App.jsx:57 ~ getPokemonInfo ~ data:", data)

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

  const handleModal = async (id) => {
    setPokemonInfo(await getPokemonInfo(id))
  }

  return (
    <main>
      <h1>Pokemon</h1>
      {
        loading ? (
          <section >
            loading
          </section>
        ) : (
          <section className='container'>
            {
              pokemons.map((pokemon, index) => {
                return (
                  <article
                    ref={element => ref.current[index] = element}
                    id={pokemon.id}
                    className='card'
                    key={pokemon.id}
                    style={{ 'backgroundColor': pokemon.color }}
                    onClick={() => handleModal(pokemon.id)}
                  >
                    <img src={pokemon.img} alt={pokemon.name} />
                    <h3>{pokemon.name}</h3>
                    <p>{
                      pokemon.id < 10 ? `00${pokemon.id}` :
                        pokemon.id < 100 ? `0${pokemon.id}` :
                          pokemon.id}</p>
                  </article >
                )
              })
            }

          </section>)

      }
      {
        pokemonInfo && <Modal pokemon={pokemonInfo} pokemonInfo={setPokemonInfo} />
      }
    </main >
  )
}

export default App
