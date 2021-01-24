import React, { FC } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';
// import useTimer from './hooks/use-timer';
import '../Timer.css';

// presentional componentとcantainer componentのパターンで分割
// presentional component：表現に関するもの、見た目だけを責任とするコンポーネント
// container component：コンテナのように包含してロジックを追加するためのコンポーネント

// JSX内で使用されているものだけをPropsとして設定
type Props = {
  timeLeft?: number;
  isPrime?: boolean;
  reset?: () => void;
};

const Timer: FC<Props> = ({
  timeLeft = 0,
  isPrime = false,
  reset = () => undefined,
}) => {
  // const [timeLeft, isPrime, reset] = useTimer(limit);

  return (
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>time</Statistic.Label>
        <Statistic.Value className={isPrime ? 'prime-number' : undefined}>
          {timeLeft}
        </Statistic.Value>
      </Statistic>
      <Card.Content>
        <Button color="red" fluid onClick={reset}>
          <Icon name="redo" />
          Reset
        </Button>
      </Card.Content>
    </Card>
  );
};

export default Timer;
