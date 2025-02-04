export default function Friend({data}) {

    function handleToggle(){
        
    }

  return (
    <div className="friend">
      <img src={data.image} alt={data.name} style={{ height: "10%" , width:"auto" , margin:"auto"}} />
        <div>
            <p>{data.name}</p>
            <p>{data.balance}</p>
        </div>
        <button style={{margin:"auto" , padding:"0.5rem"}} onClick={handleToggle}>Choose</button>
      </div>
  );
}
