/* eslint-disable react/prop-types */
import { CharacteristicsName } from '../components'

export const ContainerModalCharacteristics = ({ pokemon }) => {
  return (
    <div>
      {
        pokemon.info.map(info => {
          return (
            <div key={info.name} className="characteristics">
              <CharacteristicsName color={pokemon.color}>
                {info.name}
              </CharacteristicsName>
              <p className="characteristics-info">
                {info.info}
              </p>
            </div>
          )
        })
      }
    </div>
  )
}