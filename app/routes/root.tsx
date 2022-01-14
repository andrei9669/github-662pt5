import { Outlet, Link, useLocation } from 'remix';
import { useState } from 'react';

const Root = () => {
  const [state, setState] = useState(0);
  const location = useLocation();
  return (
    <div className="remix__page">
      <div>url path: {location.pathname}</div>
      <div>root state: {state}</div>
      <Link to="path1">path1 link</Link>
      <Link to="path2">path2 link</Link>
      <button onClick={() => setState((prev) => prev + 1)}>increment</button>
      <button onClick={() => setState((prev) => prev - 1)}>decrement</button>
      <Outlet context={[state, setState]}/>
    </div>
  );
};

export default Root;
