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
      <header>
        <section>
          <h1>Pokemon APP</h1>
        </section>
        <section className="container-form">
          <form>
            <select>
              <option value="4" key="1">sfasf</option>
              <option value="4" key="1">sfasf</option>
              <option value="4" key="1">sfasf</option>
            </select>
            <input type="text" name="search" id="" />
            <button type='submit'>Buscar</button>
          </form>
        </section>
      </header>
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
