/* eslint-disable react/prop-types */
export const ModalDetail = ({ pokemon, pokemonInfo }) => {
  return (
    <section className="modal-card-details">
      <div>
        <h3>{pokemon.name}</h3>
        <p>{pokemon.type}</p>
      </div>
      <div className="modal-card-img">
        <img src={pokemon.img} alt={`imagen pokemon ${pokemon.name}`} />
      </div>
      <div>
        <span
          className="material-symbols-outlined"
          onClick={() => pokemonInfo(null)}
        >
          close
        </span>
      </div>
    </section >
  )
}