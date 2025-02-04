import { useEffect, useState } from 'react';
import FormAddFriend from './components/FormAddFriend';
import FriendList from './components/FriendList';

import "./App.css";
import FormSplitBill from './components/FormSplitBill';

function App() {
  const [friends, setFriends] = useState([]);
  const [showAddFriend , setShowAddFriend] = useState(false);


  function handleShowAddFriend(){
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }

  function handleAddFriend(friend){
    setFriends((friends) => [...friends, friend]);
  }


  useEffect(() => {
    fetch('/data.json') // Assuming data.json is in the public folder
      .then((response) => response.json())
      .then((data) => {
        setFriends(data);
        console.log(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends}></FriendList>
        {showAddFriend && <FormAddFriend onAdd={handleAddFriend}></FormAddFriend>}
        <button className='button' onClick={handleShowAddFriend}>{showAddFriend ? "Tutup" : "Add Friend"}</button>
      </div>

      <FormSplitBill />
    </div>
  );
}

export default App;
