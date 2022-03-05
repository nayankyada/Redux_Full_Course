import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT, SET } from './Redux/actions';
import { actions } from './Redux/store';

export const Counter = () => {
  const incident = 'Incident';
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button
          onClick={() => {
            actions.increment(); // used actionbinder
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            actions.set(0); // used action binder
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            dispatch({ type: DECREMENT }); // used useDispatch hooks
          }}
        >
          Decrement
        </button>

        
      </section>
    </main>
  );
};

export default Counter;
