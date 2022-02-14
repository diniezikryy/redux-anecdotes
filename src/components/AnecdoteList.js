import { vote } from "../reducers/anecdoteReducer";
import { createNotification } from "../reducers/notificationReducer";
import { useSelector, useDispatch } from "react-redux";

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch();

  const voteHandler = () => {
    dispatch(vote(anecdote.id));
    dispatch(createNotification(`You voted for '${anecdote.content}'`));
    setTimeout(() => {
      dispatch(createNotification(null));
    }, 5000);
  };

  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={voteHandler}>vote</button>
      </div>
    </div>
  );
};

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdoteReducer);

  const sortByVotes = (a1, a2) => {
    return a2.votes - a1.votes;
  };

  return [...anecdotes]
    .sort(sortByVotes)
    .map((anecdote) => <Anecdote key={anecdote.id} anecdote={anecdote} />);
};

export default AnecdoteList;
