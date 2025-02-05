import Friend from "./Friend";

export default function FriendList({friends , onSelected, selectedFriend}) {
   
  return (
    <div className="friend-list">
      {friends.map((friend, index) => {
          return <Friend data={friend} key={friend.id || index} onSelected={onSelected} selectedFriend={selectedFriend} />;
        })}
    </div>
  );
}
