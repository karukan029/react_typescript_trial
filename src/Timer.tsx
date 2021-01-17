import React, { FC, useEffect, useMemo, useCallback, useState } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';
import { getPrimes } from './utils/math-tools';
import './Timer.css';

const Timer: FC<{ limit: number }> = ({ limit }) => {
  const [timeLeft, setTimeLeft] = useState(limit);
  // メモ化したファイルの呼び出し
  const primes = useMemo(() => getPrimes(limit), [limit]);
  // const reset = (): void => setTimeLeft(limit);
  const reset = useCallback(() => setTimeLeft(limit), [limit]);
  const tick = (): void => setTimeLeft((t) => t - 1);

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    // if (timeLeft === 0) setTimeLeft(limit);
    // resetで共通化
    if (timeLeft === 0) reset();
    // }, [timeLeft, limit]);
    // 依存配列を修正（reset関数の定義はuseEffectの外にあるためresetを追加）
  }, [timeLeft, reset]);

  return (
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>time</Statistic.Label>
        <Statistic.Value
          className={primes.includes(timeLeft) ? 'prime-number' : undefined}
        >
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
