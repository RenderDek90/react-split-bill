import Friend from "./Friend";

export default function FriendList({friends}) {
   
  return (
    <div className="friend-list">
      {friends.map((friend, index) => {
          return <Friend data={friend} key={friend.id || index} />;
        })}
    </div>
  );
}
