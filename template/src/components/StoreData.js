import { useSelector } from 'react-redux';

const ShowInputValueComponent = () => {
  const inputValue = useSelector(state => state.inputValue);

  return (
    <div>
      <p>The input value is: {inputValue}</p>
    </div>
  );
};

export default ShowInputValueComponent;