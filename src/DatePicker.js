import React,{ useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Example = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={startDate} 
      onChange={date => setStartDate(date)} 
      onInputClick={props.handleChange}
      dateFormat='yyyy/MM/dd'
      maxDate={new Date()}
      />
    );
  };

export default Example;