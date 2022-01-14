import { Dispatch, SetStateAction } from 'react';
import { useOutletContext } from 'remix';

const Path2 = () => {
  const [state, setState] =
    useOutletContext<[number, Dispatch<SetStateAction<number>>]>();
  return (
    <div>
      path2 route component
      <div>
        {state} + 5 = {state + 5}
      </div>
      <button onClick={() => setState((prev) => prev + 1)}>increment</button>
      <button onClick={() => setState((prev) => prev - 1)}>decrement</button>
    </div>
  );
};

export default Path2;
