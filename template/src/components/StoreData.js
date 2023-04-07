import { useSelector } from 'react-redux';

const ShowInputValueComponent = () => {
  // const firstname = useSelector(state => state.firstname);
  // const lastname = useSelector(state => state.lastname);
  const person = useSelector(state => state);
  console.log("ajay", person);

  return (
    <div>{
      <div className='showMessage'>The input value is: {person.firstname} {person.lastname}</div>
    }
    </div>
  );
};

export default ShowInputValueComponent;