import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

//Calendar for future use (Choosing dates)

const CalendarSelect = () => {
  // ✅ a change in default state: []
  const [selectedDays, setSelectedDays] = useState([]);
  return (
    <Calendar
      value={selectedDays}
      onChange={setSelectedDays}
      shouldHighlightWeekends
    />
  );
};

export default CalendarSelect;