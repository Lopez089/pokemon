/* eslint-disable react/prop-types */
import styled, { keyframes } from 'styled-components'
import './characteristic.css'

export const Characteristics = ({ characteristic }) => {
  return (
    <div className='wrap_bar'>
      <div className="bar_container" >
        <ProgressBar baseStart={`${characteristic.base_start}%`} />
        {/* <div style={{ height: `${characteristic.base_start}%` }} className="bar_container-bar">
        </div> */}
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
  background: #399494;
  animation: ${props => progress(props.baseStart)} 1s ease forwards 500ms;
}
`
