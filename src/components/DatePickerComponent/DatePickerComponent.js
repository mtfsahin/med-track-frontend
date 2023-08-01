import React, { useState, useEffect }from "react";
import Button from "../ButtonComponent/Button";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

const DatePickerComponent=({}) => {

    const [currrentDate, setCurrentDate] = useState('');
    
    function getDate() {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        setCurrentDate(formattedDate);
    }

    useEffect(() => {
        getDate();
    },[]); 

    let inputProps = {
        placeholder: currrentDate,
    };
    
    return(
        <div className="flex flex-row  justify-center  text-white p-1 gap-2">
            
            <Button color="primary"  > Back </Button>
            <Datetime locale="tr" inputProps={inputProps} className="text-black border-red"/>
            <Button color="seconday" > Next </Button>
            
        </div>
    )
}

export default DatePickerComponent;