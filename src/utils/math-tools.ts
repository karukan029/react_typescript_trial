/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable import/prefer-default-export */
export const getPrimes = (maxRange: number): number[] =>
  // 配列から素数を抽出（2が最初の素数の要素）
  // Array(数値型)：引数に渡した数値の要素数の配列を作成
  // ...Array()：配列のスプレッド構文、配列のクローンを作成、Array.concat()相当の処理
  // Array.fillter():配列の各要素に対して実行するテスト関数です。
  // この関数が true を返した要素は残され、false を返した要素は取り除かれます。
  [...Array(maxRange + 1).keys()].slice(2).filter((n) => {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) return false;
    }

    return true;
  });
