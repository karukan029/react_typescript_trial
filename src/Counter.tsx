import React, { FC, useState } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';
import './Counter.css';

const Counter: FC = () => {
  const [count, setCount] = useState(0);
  const reset = () => setCount(0);
  // hooks API useState stateに値を設定する関数の引数に関数を渡した場合、
  // その関数の引数は直近のstate変数値で、戻り値が新たなstate変数値となる。
  const increment = () => setCount((c) => c + 1);
  // const increment = () => setCount(count + 1);

  // const plusThreeDirectly = () => [0, 1, 2].forEach((_) => setCount(count + 1));
  // const plusThreeWithFunction = () =>
  // [0, 1, 2].forEach((_) => setCount((c) => c + 1));

  return (
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>count</Statistic.Label>
        <Statistic.Value>{count}</Statistic.Value>
      </Statistic>
      <Card.Content>
        <div className="ui two buttons">
          <Button color="red" onClick={reset}>
            Reset
          </Button>
          <Button color="green" onClick={increment}>
            {/* <Button color="green" onClick={plusThreeDirectly}> */}
            +1
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default Counter;
