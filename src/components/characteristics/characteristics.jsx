/* eslint-disable react/prop-types */
import { ProgressBar } from '../../components'
import './characteristic.css'

export const Characteristics = ({ characteristic, color }) => {
  return (
    <div className='wrap_bar'>
      <div className="bar_container" >
        <ProgressBar basestart={`${characteristic.base_start}%`} color={color} />
      </div>
      <p className='text_bar'>{characteristic.name}</p>
    </div>
  )
}


