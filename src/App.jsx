import { useListPokemons, usePokemonInfo } from './hooks'
import { Modal } from './components'
import { ContainerListPokemon } from './containers'
import './App.css'

// todo 
// refactor css en cada componente

const App = () => {
  const { pokemons, loading, ref } = useListPokemons()
  const { handleModal, pokemonInfo, setPokemonInfo } = usePokemonInfo(pokemons)

  return (
    <main>
      <h1>Pokemon</h1>
      <ContainerListPokemon
        loading={loading}
        pokemons={pokemons}
        referece={ref}
        handleModal={handleModal}
      />
      {
        pokemonInfo && <Modal pokemon={pokemonInfo} pokemonInfo={setPokemonInfo} />
      }
    </main >
  )
}

export default App
