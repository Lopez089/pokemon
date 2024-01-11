/* eslint-disable react/prop-types */
import { CardPokemon } from '../components'

export const ContainerCardPokemon = ({ pokemons, referece, handleModal }) => {
  return (
    <section className='container'>
      {
        pokemons.map((pokemon, index) => {
          return (
            <CardPokemon
              key={pokemon.id}
              referece={referece}
              pokemon={pokemon}
              handleModal={handleModal}
              index={index}
            />
          )
        })
      }

    </section >
  )
}