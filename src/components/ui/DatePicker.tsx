// components/DatePicker.tsx
import React, { useState } from "react";
import { CalendarIcon } from "@shadcn/icons";
import { DayPicker } from "react-day-picker";
import { Input } from "@shadcn/ui"; // Import the Input component from shadcn-ui

const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [isOpen, setIsOpen] = useState(false);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Input
        type="text"
        value={selectedDate ? selectedDate.toDateString() : ""}
        onClick={() => setIsOpen(!isOpen)}
        readOnly
        placeholder="Select a date"
        className="cursor-pointer pr-10"
      />
      <CalendarIcon className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      {isOpen && (
        <div className="absolute mt-2 z-10">
          <DayPicker
            selected={selectedDate}
            onSelect={handleDateChange}
            mode="single"
            modifiersClassNames={{
              selected: "bg-blue-500 text-white",
              today: "bg-blue-200 text-blue-600",
            }}
            className="bg-white border border-gray-300 rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
