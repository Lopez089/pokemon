/* eslint-disable react/prop-types */
export const ContainerListPokemon = ({ loading, pokemons, referece, handleModal }) => {
  console.log("🚀 ~ ContainerListPokemon ~ loading:", loading)
  return (
    <>
      {
        loading ? (
          <section >
            loading...
          </section >
        ) : (
          <section className='container'>
            {
              pokemons.map((pokemon, index) => {
                return (
                  <article
                    ref={element => referece.current[index] = element}
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

          </section>
        )

      }
    </>
  )
}