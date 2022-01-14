import { Dispatch, SetStateAction } from 'react';
import { useOutletContext } from 'remix';

const Path1 = () => {
  const [state, setState] =
    useOutletContext<[number, Dispatch<SetStateAction<number>>]>();
  return (
    <div>
      path1 route component
      <div>state: {state}</div>
      <button onClick={() => setState((prev) => prev + 1)}>increment</button>
      <button onClick={() => setState((prev) => prev - 1)}>decrement</button>
    </div>
  );
};

export default Path1;
