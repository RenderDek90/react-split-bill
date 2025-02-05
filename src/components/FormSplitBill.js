import { useState } from 'react';

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [amount, setAmount] = useState('');
  const [myBill, setMyBill] = useState('');
  const [whoIsPaying, setWhoIsPaying] = useState('');
  const friendBill = amount ? amount - myBill : '';

  function handleSubmit(e){
    e.preventDefault();

    if(!amount || !myBill) return;

    onSplitBill(whoIsPaying === "user" ? friendBill : -myBill);
  }

  return (
    <form action="" className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Patungan Bareng si {selectedFriend.name}</h2>
      <div>
        <label htmlFor="">Total Tagihan</label>
        <input type="text" name="" id="" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>

      <div>
        <label htmlFor="">Tagihan Kamu</label>
        <input type="text" name="" id="" value={myBill} onChange={(e) => setMyBill(e.target.value)} />
      </div>

      <div>
        <label htmlFor="">Tagihan {selectedFriend.name}</label>
        <input type="text" name="" id="" value={friendBill} disabled />
      </div>

      <div>
        <label htmlFor="">Ditalangan sama ?</label>
        <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
          <option value="user">Kamu</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
      </div>

      <button>Add</button>
    </form>
  );
}
