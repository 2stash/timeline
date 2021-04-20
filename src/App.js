import "./App.css";
import styled from "styled-components";


const Month = styled.div`
  width: 300px;
`;

const TextBoxContainer = styled.div`
  display: grid;
  grid-template-columns: 150px 150px;
  grid-template-rows: auto;
`;

const TextBox = styled.div`
  border: black solid 1px;
  font-size: 12px;
  margin:8px;
`;

const text =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error a nulla debitis nesciunt assumenda odit atque libero expedita, magnam vero!";

const ArrowContainer = styled.div `
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 300px;
`;

const Arrow = styled.div `
  display:flex;
  justify-content:center;
  align-items: flex-end;
  height: 30px;
  border: black solid 1px;
`

const MonthBar = styled.div `
  width:100%;
  height: 40px;
  background-color:grey;
  color:white;
  font-size: 24px;
`

function App() {
  return (
    <div className='App'>
      <Month>
        <TextBoxContainer>
          <TextBox>
            <p>{text}</p>
          </TextBox>
          <TextBox>
            <p>{text}</p>
          </TextBox>
          <TextBox>
            <p>{text}</p>
          </TextBox>
          <TextBox>
            <p>{text}</p>
          </TextBox>
        </TextBoxContainer>
        <ArrowContainer>
          <Arrow><i class="fas fa-arrow-down"></i></Arrow>
          <Arrow><i class="fas fa-arrow-down"></i></Arrow>
          <Arrow><i class="fas fa-arrow-down"></i></Arrow>
          <Arrow><i class="fas fa-arrow-down"></i></Arrow>

        </ArrowContainer>
        <MonthBar>January</MonthBar>
        <ArrowContainer>
        <Arrow><i class="fas fa-arrow-up"></i></Arrow>
          <Arrow><i class="fas fa-arrow-up"></i></Arrow>
          <Arrow><i class="fas fa-arrow-up"></i></Arrow>
          <Arrow><i class="fas fa-arrow-up"></i></Arrow>
          </ArrowContainer>
          <TextBoxContainer>
          <TextBox>
            <p>{text}</p>
          </TextBox>
          <TextBox>
            <p>{text}</p>
          </TextBox>
          <TextBox>
            <p>{text}</p>
          </TextBox>
          <TextBox>
            <p>{text}</p>
          </TextBox>
        </TextBoxContainer>
      </Month>
    </div>
  );
}

export default App;
