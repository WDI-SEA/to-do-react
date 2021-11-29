import './App.css';
import ListItem from './ListItem';

function MyList({ theList }) {
  let todoItems = theList.map((item, index) => {
    return <ListItem task={item} key={index} />;
  });
  return (
    <div className='App'>
      <h1>Things I should stop procrastinating:</h1>
      <ul>{todoItems}</ul>
      <form action='' type='text' className='App-form'>
        <input type='text' placeholder='Type an item here' />
        <button>Add it</button>
      </form>
      <button>Finished the List!</button>
    </div>
  );
}

export default MyList;
