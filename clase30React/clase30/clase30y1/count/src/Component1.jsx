// eslint-disable-next-line react/prop-types
export const Component1 = ({ sendValue, value }) => {
  const increment = () => {
    sendValue(value + 1);
  };

  const decrement = () => {
    sendValue(value - 1);
  };

  const handleInput = (e) => {
    const inputValue = Number(e.target.value);
    sendValue(inputValue);
  };
  return (
    <div>
      <button onClick={decrement}>-</button>
      <input type="text" value={value} onChange={handleInput} />
      <button onClick={increment}>+</button>
    </div>
  );
};
