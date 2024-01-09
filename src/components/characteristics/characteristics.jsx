/* eslint-disable react/prop-types */
import styled, { keyframes } from 'styled-components'
import './characteristic.css'

export const Characteristics = ({ characteristic, color }) => {
  return (
    <div className='wrap_bar'>
      <div className="bar_container" >
        <ProgressBar baseStart={`${characteristic.base_start}%`} color={color} />
      </div>
      <p className='text_bar'>{characteristic.name}</p>
    </div>
  )
}

const progress = (baseStart) => keyframes`
  0%{
    height:0%;
  }

  100%{
    height: ${baseStart}};
  }
`

const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: ${props => props.color};
  animation: ${props => progress(props.baseStart)} 1s ease forwards 500ms;
}
`
