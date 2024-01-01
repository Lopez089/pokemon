import './modal.css'

export const Modal = ({ pokemon }) => {
  return (
    <section className='modal'>
      <div className='modal-card'>
        <section className="modal-card-details">
          <div>
            <h3>{pokemon.name}</h3>
            <p>{pokemon.type}</p>
          </div>
          <div className="modal-card-img">
            <img src={pokemon.img} alt={`imagen pokemon ${pokemon.name}`} />
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
            pokemon.characteristics.map((characteristic, key) => {
              console.log("🚀 ~ file: modal.jsx:50 ~ pokemon.characteristics.map ~ characteristic:", characteristic.name)
              return (
                <div className='wrap_bar' key={key}>
                  <div className="bar_container" >
                    <div style={{ height: `${characteristic.base_start}%` }} className="bar_container-bar">
                    </div>
                  </div>
                  <p className='text_bar'>{characteristic.name}</p>
                </div>
              )
            })
          }
        </section>
      </div>
    </section >
  )
}
