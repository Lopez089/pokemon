import { useListPokemons, usePokemonInfo } from './hooks'
import { Modal } from './components'
import './App.css'

// todo 
// refactorizar app
// component
// otros

const App = () => {
  const { pokemons, loading, ref } = useListPokemons()
  const { handleModal, pokemonInfo, setPokemonInfo } = usePokemonInfo(pokemons)

  return (
    <main>
      <h1>Pokemon</h1>
      {
        loading ? (
          <section >
            loading...
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
