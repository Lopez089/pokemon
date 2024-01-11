/* eslint-disable react/prop-types */
import { Characteristics } from '../components'

export const ContainerAtribute = ({ pokemon }) => {
  return (
    <section className="atributes">
      {
        pokemon.characteristics.map((characteristic, index) => {
          return (
            <Characteristics characteristic={characteristic} key={index} color={pokemon.color} />
          )
        })
      }
    </section>
  )
}