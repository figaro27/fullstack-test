import React, { useEffect, useState, useContext } from 'react';
import { AvailabilityContext } from "../../contexts/availability";
import './Day.css';

const Day = (props) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const { availability, selectDate, date } = useContext(AvailabilityContext)
    const [selectable, setSelectable] = useState(false)
    const [selcted, setSelected] = useState(false)
    useEffect(() => {
        const idx = availability.findIndex(item => {
            return new Date(item.date).getDate() == props.date.getDate()
        })
        if(idx !== -1) {
            setSelectable(true)
        }
        if (date && new Date(date.date).getDate() === props.date.getDate()) setSelected(true)
        else setSelected(false)
    }, [props.date])

    return (
        <div className={`day ${selectable ? 'selectable': ''} ${selcted ? 'active': ''}`} onClick={() => { selectDate(props.date) }}>
            <span>{props.date.getDate()}</span>
            <span>{days[props.date.getDay()]}</span>
        </div>
    )
}
export default Day;