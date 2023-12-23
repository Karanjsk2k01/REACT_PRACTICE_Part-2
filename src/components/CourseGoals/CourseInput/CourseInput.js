import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setisValid] = useState(true);

  const goalInputChangeHandler = event => {
    setisValid(true)
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setisValid(false);
      return;
    }
    props.onAddGoal(enteredValue);

    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" className={`button ${!isValid ? 'invalid' : ''}`}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
