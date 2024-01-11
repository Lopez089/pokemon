/* eslint-disable react/prop-types */

export const CardPokemon = ({ referece, pokemon, handleModal, index }) => {
  return (
    <article
      ref={element => referece.current[index] = element}
      id={pokemon.id}
      className='card'
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
}