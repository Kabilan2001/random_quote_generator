import React from 'react';

const DropDown = () => {
  const options = ["COIMBATORE","OOTY","KOCHIN","MADURAI"];
  const ChangeHandler = (event) => {
      console.log("My favourite place is "+ event.target.value)
  }
  return (
      <div>
          <select onChange={ChangeHandler}>
            <option>Please choose one option</option>
                  {options.map((option, index) => {
                      return <option key={index} >
                          {option}
                      </option>
                  })}
              </select>
  
      </div>
  );
};

export default DropDown;