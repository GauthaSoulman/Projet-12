import styled from "styled-components";
const Main = styled.main`
  margin-left:20%
`;

const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: auto;
  margin-top: 2%;
  @media (max-width: 1430px){
      margin-left: 1rem;
  }
`;
const Head = styled.header`
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 18px;
  @media (max-width: 1280px) {
			margin-left: 2rem;
		}
  h1 {
    font-weight: 600;
    font-size:48px;
    margin-bottom:40px;
  }
`;

const Name = styled.span`
  color: #ff0000;
`;

export {Main,Container, Head, Name}