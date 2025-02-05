import { useEffect, useState } from 'react';
import FormAddFriend from './components/FormAddFriend';
import FriendList from './components/FriendList';

import './App.css';
import FormSplitBill from './components/FormSplitBill';

function App() {
  const [friends, setFriends] = useState([]);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null); // as an Object

  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
    setSelectedFriend(null);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function handleSelectedFriend(friend) {

    // selected?.id --> meaning, dia bisa jadi Null
    setSelectedFriend((selected) => selected?.id === friend.id ? null : friend);
    setShowAddFriend(false);
  }

  function handleSplitBill(value){
    setFriends(
      friends.map((friend) => {
        if(friend.id === selectedFriend.id){
          return {
            ...friend, 
            balance: friend.balance + value
          }
        }

        return friend;
      })
    );

    setSelectedFriend(null);
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
        <FriendList friends={friends} onSelected={handleSelectedFriend} selectedFriend={selectedFriend}></FriendList>
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}></FormAddFriend>}
        <button className="button" onClick={handleShowAddFriend}>
          {showAddFriend ? 'Tutup' : 'Add Friend'}
        </button>
      </div>

      {/* if not null */}
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill}/>}
    </div>
  );
}

export default App;
