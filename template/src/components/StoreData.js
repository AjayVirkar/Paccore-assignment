import { useSelector } from 'react-redux';

const ShowInputValueComponent = () => {
  const inputValue = useSelector(state => state.inputValue);

  return (
    <div>{
      inputValue &&
      <div className='showMessage'>The input value is: {inputValue}</div>
    }
    </div>
  );
};

export default ShowInputValueComponent;