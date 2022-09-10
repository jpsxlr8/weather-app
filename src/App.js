import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 300px;
  background: white;
`;
const CityComponent = styled.div`
   display: flex;
   flex-direction: column;
`;

const WeatherComponent = styled.div`
   display:flex;
   flex-direction: column;
`;
function App() {
  return (
    <Container>
      weather app
    <CityComponent>CityCompoenet</CityComponent>
    <WeatherComponent>WeatherComponent</WeatherComponent>
    </Container>
  );
}

export default App;
