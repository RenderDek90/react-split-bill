export default function FormSplitBill() {
  return (
    <form action="" className="form-split-bill">
      <h2>Patungan Bareng si X</h2>
      <div>
        <label htmlFor="">Total Biaya</label>
        <input type="text" name="" id="" />
      </div>

      <div>
        <label htmlFor="">Tagihan Kamu</label>
        <input type="text" name="" id="" />
      </div>

      <div>
        <label htmlFor="">Tagihan X</label>
        <input type="text" name="" id="" disabled />
      </div>

      <div>
        <label htmlFor="">Ditalangan sama ?</label>
        <select name="" id="">
          <option value="user">Kamu</option>
          <option value="friend">X</option>
        </select>
      </div>

      <button>Add</button>
    </form>
  );
}
