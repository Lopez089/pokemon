/* eslint-disable react/prop-types */
import { ContainerModalCharacteristics } from '../../containers'

export const ModalInfo = ({ pokemon }) => {
  return (
    <section className="modal-card-info">
      <ContainerModalCharacteristics pokemon={pokemon} />
      <div>
        <p>{pokemon.description}</p>
      </div>
    </section >
  )
}