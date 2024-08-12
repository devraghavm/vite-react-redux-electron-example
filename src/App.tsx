import './App.css'
import Counter from './components/Counter';
import { useAppSelector } from './hooks/storeHooks'
import { Col, Row } from 'antd'

function App() {
  const count = useAppSelector((state) => state.counter.value);

  return (
    <Row justify={'center'}>
      <Col>
        <Row justify={'center'}>
          <Col>
            <h1>The count is {count}</h1>
          </Col>
        </Row>
        <Row justify={'center'}>
          <Col>
            <Counter />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default App
