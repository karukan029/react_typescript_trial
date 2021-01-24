import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getPrimes } from '../utils/math-tool';

const useTimer = (limit: number): [number, boolean, () => void] => {
  const [timeLeft, setTimeLeft] = useState(limit);
  // メモ化したファイルの呼び出し
  const primes = useMemo(() => getPrimes(limit), [limit]);
  const timerId = useRef<NodeJS.Timeout>();
  const reset = useCallback(() => setTimeLeft(limit), [limit]);
  const tick = () => setTimeLeft((t) => t - 1);

  useEffect(() => {
    const clearTimer = () => {
      if (timerId.current) {
        clearInterval(timerId.current);
      }
    };
    reset();
    clearTimer();
    // timerIdをref属性にもつDOMにアクセス
    timerId.current = setInterval(tick, 1000);

    // returnに設定した関数をアンマウント時に実行
    return clearTimer;
  }, [limit, reset]);

  useEffect(() => {
    if (timeLeft === 0) {
      reset();
    }
  }, [timeLeft, reset]);

  return [timeLeft, primes.includes(timeLeft), reset];
};

export default useTimer;
