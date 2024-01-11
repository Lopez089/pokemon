/* eslint-disable react/prop-types */
import {
  ModalDetail,
  ModalInfo,
} from '../'
import { ContainerAtribute } from '../../containers'
import './modal.css'

export const Modal = ({ pokemon, pokemonInfo }) => {
  return (
    <section className='modal' onClick={() => pokemonInfo(null)}>
      <div className='modal-card'>
        <ModalDetail pokemon={pokemon} pokemonInfo={pokemonInfo} />
        <ModalInfo pokemon={pokemon} />
        <ContainerAtribute pokemon={pokemon} />
      </div >
    </section >
  )
}
