import styled from "styled-components";

const Div= styled.main`
  margin: 10rem 20rem 20rem;
  @media (max-width: 1025px) {
    margin: 1.5rem;
  }
  
  
  `

  const Title = styled.h1`
color: red;
font-size: 10rem;
text-align: center;
margin-bottom: 5rem;
@media (max-width: 1025px) {
    font-size: 5rem;
  }
`

export {Div, Title}