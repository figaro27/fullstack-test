import React, { useEffect, useState, useContext } from 'react';
import Day from './Day/Day'
import TimeSlot from './TimeSlot/TimeSlot';
import { AvailabilityContext } from "../contexts/availability";

const Availability = () => {
  const { availability } = useContext(AvailabilityContext)
  var currentDate = new Date();
  const firstday = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <div style={{display:'flex'}}>
      {
        new Array(7).fill(0).map((item, idx) => {
          return <Day date={new Date(new Date().setDate(firstday.getDate() + idx))} />
        })
      }
      </div>
      <TimeSlot />
    </div>
  );
}

export default Availability;
