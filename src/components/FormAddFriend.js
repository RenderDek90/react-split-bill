import { useState } from "react";

export default function FormAddFriend({onAddFriend}) {

    const [name , setName] = useState("");
    const [image , setImage] = useState("https://i.pravatar.cc/48");

    function handleSubmit(e){
        e.preventDefault();

        if(!name || !image) return;

        const id = crypto.randomUUID();
        const newFriend = {
            id , name , image : `${image}?=${id}`, balance : 0
        }

        onAddFriend(newFriend);

        setName("");
        setImage("https://i.pravatar.cc/48");
    }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Nama</label>
        <input type="text" name="" value={name} onChange={(e) => {
            setName(e.target.value);
        }} />
      </div>
      <div>
        <label htmlFor="">Image</label>
        <input type="text" name="" value={image} onChange={(e) => {
            setImage(e.target.value);
        }} />
      </div>

      <button >Add</button>
    </form>
  );
}
