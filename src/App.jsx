import { useState, useEffect } from 'react'
import { Modal } from './components'
import './App.css'


// TODO:
// extraer en componentes
// colores del pokemon que seleciones
// mejorar los estolos

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true);
  const [pokemonInfo, setPokemonInfo] = useState(null)

  const getPokemon = async (limit = 4) => {
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

    const allPokemonData = await Promise.all(promiseDataSpecies)

    setPokemons(allPokemonData)
    setLoading(false)
  }

  useEffect(() => {
    getPokemon()
  }, []);

  const getPokemonInfo = async (pokemon) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      const data = await res.json()

      const responseSpecie = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`)
      const dataSpecie = await responseSpecie.json()

      return {
        name: data.name,
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
              pokemons.map(pokemon => {
                return (
                  <article
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
