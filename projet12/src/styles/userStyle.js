import styled from "styled-components";

const Main = styled.main`
  display: grid;
  grid-template-columns:  auto;
  margin: auto;
  @media screen and (max-width: 1250px) {
    grid-gap: 1em;
  }
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
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  aside {
    display: flex;
    flex-wrap: wrap;
    padding-bottom:25%;
    max-width: 300px;
    height: 400px;
    margin: auto;
    margin-left: 2rem;
    @media (max-width: 1280px) {
      display: grid;
      grid-template-columns: 3fr 3fr 2fr;
      margin-left: 60px;
      height: auto;
    }
    > div {
      margin: 20px 5px;
    }
  }
`;

const BottomChart = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
  justify-content: space-between;
`;


export {Main,Container, Head, Name, BottomChart, Content}