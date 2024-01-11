import styled, { keyframes } from 'styled-components'
export const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: ${props => props.color};
  animation: ${props => progress(props.basestart)} 1s ease forwards 500ms;
}
`
const progress = (basestart) => keyframes`
  0%{
    height:0%;
  }

  100%{
    height: ${basestart}};
  }
`