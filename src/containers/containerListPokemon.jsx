/* eslint-disable react/prop-types */
import { Loading } from '../components'
import { ContainerCardPokemon } from './'

export const ContainerListPokemon = ({ loading, pokemons, referece, handleModal }) => {
  return (
    <>
      {
        loading ? (
          <Loading />
        ) : (
          <ContainerCardPokemon
            pokemons={pokemons}
            referece={referece}
            handleModal={handleModal}
          />
        )

      }
    </>
  )
}