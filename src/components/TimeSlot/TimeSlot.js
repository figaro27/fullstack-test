import React, { useEffect, useState, useContext } from 'react';
import { AvailabilityContext } from "../../contexts/availability";
import './TimeSlot.css';

const TimeSlot = () => {
  const { date } = useContext(AvailabilityContext)

  return (
    <div style={{display:'flex', alignItems:'center'}}>
      { date &&
        date.availableSlots.map((item, idx) => {
          return (
            <div className="timeslot__time">
                {item.startTime}
            </div>
          )
        })
      }
    </div>
  );
}

export default TimeSlot;
