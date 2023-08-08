import React from "react";

interface DateRangePickerProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (startDate: string) => void;
  onEndDateChange: (endDate: string) => void;
  onApplyDateRange: () => void;
}

const DateRangePicker = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}: DateRangePickerProps) => {
  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const startDateValue = event.target.value;
    onStartDateChange(startDateValue);
  };
  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const endDateValue = event.target.value;
    onEndDateChange(endDateValue);
  };

  return (
    <div className="my-1">
      <div>
        <input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </div>
      <div className="mt-2">
        <input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
