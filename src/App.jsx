import { useState, useEffect } from 'react'
import { Modal } from './components'
import './App.css'


// TODO:
// crear una car donde se vera todo la info 
// poner la info que voy a poner ficticia
// darle estilos como lo quiero
// cuando hace click se activa el modal
// cuando se hace click se gurda los datos del pkemon y se muestra en el modal
// 

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true);

  const getPokemon = async (limit = 40) => {
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
                  <article className='card' key={pokemon.id} style={{ 'backgroundColor': pokemon.color }}>
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
      {/* <Modal /> */}
    </main >
  )
}

export default App
