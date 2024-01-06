import { Characteristics } from '../'
import './modal.css'



export const Modal = ({ pokemon, pokemonInfo }) => {
  return (
    <section className='modal' onClick={() => pokemonInfo(null)}>
      <div className='modal-card'>
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
        <section className="modal-card-info">
          <div>
            {
              pokemon.info.map(info => {
                return (
                  <div key={info.name} className="characteristics">
                    <p className="characteristics-name">
                      {info.name}
                    </p>
                    <p className="characteristics-info">
                      {info.info}
                    </p>
                  </div>
                )
              })
            }
          </div>
          <div>
            <p>{pokemon.description}</p>
          </div>
        </section>
        <section className="atributes">
          {
            // eslint-disable-next-line react/prop-types
            pokemon.characteristics.map((characteristic, index) => {
              return (
                <Characteristics characteristic={characteristic} key={index} />
              )
            })
          }
        </section>
      </div>
    </section >
  )
}
