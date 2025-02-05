export default function Friend({ data, onSelected, selectedFriend }) {
  const isSelected = selectedFriend?.id === data.id;
  const style = isSelected ? 'cyan' : '';

  return (
    <div className="friend" style={{ backgroundColor: style }}>
      <img src={data.image} alt={data.name} style={{ height: '10%', width: 'auto', margin: 'auto' }} />
      <div>
        <p>{data.name}</p>
        <p>{data.balance}</p>
      </div>
      <button style={{ margin: 'auto', padding: '0.5rem' }} onClick={() => onSelected(data)}>
        {isSelected ? 'Close' : 'Choose'}
      </button>
    </div>
  );
}
