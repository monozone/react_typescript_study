import styled from '@emotion/styled';
import {Component, useState} from 'react';
import { Button } from 'components/Button';
import { Label } from './components/Label';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

/*const Label = styled.span`
  margin: 0 16px;
  font-size: 1.2rem;
`;*/

/*const Button = styled.button`
  border: 0;
  color: #ffffff;
  background-color: #ff5722;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  &:hover {
    background-color: #ff5722;
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;*/

/*function App() {
  const [counter, setCounter] = useState(0);

  const sub = () => {
    setCounter(counter - 1);
  };
  const add = () => {
    setCounter(counter + 1);
  };

  return (
    <Container>
      <Title>Counter App</Title>
      <Contents>
        <Button label="-" onClick={sub} />
        <Label data={counter} />
        <Button label="+" onClick={add} />
      </Contents>
    </Container>
  );
}*/


type Props = Record<string, never>;
interface State {
  readonly counter: number;
}

export class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  private sub = () => {
    const {counter} = this.state;
    this.setState({
      counter: counter - 1
    });
  };
  private add = () => {
    const {counter} = this.state;
    this.setState({
      counter: counter + 1
    });
  };

  render() {
    const {counter} = this.state;
    return (
        <Container>
          <Title>Counter App</Title>
          <Contents>
            <Button label="-" onClick={this.sub} />
            <Label data={counter} />
            <Button label="+" onClick={this.add} />
          </Contents>
        </Container>
    );
  }
}


export default App;
