import React from 'react';

type Props = {name: string; times? : number};
// interface TProps {name: string; times? : number};

const Greets: React.FunctionComponent<Props> = (props) => {
  const { name, times = 1, children } = props;

  // const tProps: TProps = {name: 'a',times: 5};
  return (
    <>
      {[...Array(times)].map((_, i) => (
        <p key={i}>
          Hello,
          {name}
          !
          {children}
        </p>
      ))}
    </>
  );
};

export default Greets;
