import { Button, Col, Row } from "antd";
import { useAppDispatch } from "../hooks/storeHooks";
import { increment, decrement } from "../slices/counterSlice";

export default function Counter() {
  const dispatch = useAppDispatch();

  const incrementCounter = () => {
    dispatch(increment());
  }

  const decrementCounter = () => {
    dispatch(decrement());
  }

  return (
      <Row>
        <Col>
          <Button type="primary" onClick={incrementCounter}>
            Increment +
          </Button>
        </Col>
        <Col>
          <Button type="primary" onClick={decrementCounter}>
            Decrement -
          </Button>
        </Col>
      </Row>
    );

}