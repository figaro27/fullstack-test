import React, { useState, createContext, useEffect } from "react"
import { getAvailability } from '../utils/api';
export const AvailabilityContext = createContext({
    availability: [],
    selectDate: () => {},
    timeSlot: []
});
const AvailabilityProvider = (props) => {
    const [availability , setAvailability ] = useState([]);
    const [date, setDate] = useState(null)
    useEffect(() => {
        let mounted = true;
        getAvailability()
          .then(items => {
            if(mounted) {
              setAvailability(items.sort((a, b) => {
                return new Date(a.date) - new Date(b.date)
              }))
              setDate(items[0])
            }
          })
        return () => mounted = false;
    }, [])
    const selectDate = (date) => {
        const idx = availability.findIndex(item => {
            return new Date(item.date).getDate() == date.getDate()
        })
        if(idx != -1) {
            setDate(availability[idx])
        }
    }

    return (
        <AvailabilityContext.Provider value={{ availability, selectDate, date }}>
            {props.children}
        </AvailabilityContext.Provider>
    )
}
export default AvailabilityProvider