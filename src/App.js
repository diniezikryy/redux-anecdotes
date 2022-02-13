import { useSelector, useDispatch } from "react-redux";
import { vote } from "./reducers/anecdoteReducer";
import AnecdoteForm from "./components/AnecdoteForm";

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const sortByVotes = (a1, a2) => {
    return a2.votes - a1.votes;
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort(sortByVotes).map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div>
      ))}
      <AnecdoteForm />
    </div>
  );
};

export default App;
