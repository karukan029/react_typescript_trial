import React from 'react';

type Props = { name: string; times?: number };
// interface TProps {name: string; times? : number};

const Greets: React.FunctionComponent<Props> = (props) => {
  const { name, times = 1, children } = props;

  // const tProps: TProps = {name: 'a',times: 5};
  return (
    <>
      {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        [...Array(times)].map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={i}>
            Hello,
            {name}!{children}
          </p>
        ))
      }
    </>
  );
};

export default Greets;
