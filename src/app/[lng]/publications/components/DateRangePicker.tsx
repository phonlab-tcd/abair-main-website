"use client";

import React from "react";
import { useTranslation } from "@/app/i18n/client";

interface DateRangePickerProps {
  startYear: number;
  endYear: number;
  onStartYearChange: (startYear: number) => void;
  onEndYearChange: (endYear: number) => void;
  onApplyYearRange: () => void;
  lng: string;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startYear,
  endYear,
  onStartYearChange,
  onEndYearChange,
  onApplyYearRange,
  lng,
}) => {
  const { t } = useTranslation(lng);

  const handleStartYearChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const startYearValue = event.target.value;
    const no1 = Number(startYearValue);
    onStartYearChange(no1);
  };

  const handleEndYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const endYearValue = event.target.value;
    const no2 = Number(endYearValue);
    onEndYearChange(no2);
  };

  return (
    <div>
      <div className="flex my-1">
        <label className="w-8">{t("search.from")}</label>
        <select
          className="rounded px-2 ml-4 bg-white border border-grey-500 hover:cursor-pointer"
          value={startYear}
          onChange={handleStartYearChange}
        >
          <option value={2022}>2022</option>
          <option value={2021}>2021</option>
          <option value={2020}>2020</option>
          <option value={2019}>2019</option>
          <option value={2018}>2018</option>
          <option value={2017}>2017</option>
        </select>
      </div>
      <div className="flex">
        <label className="w-8">{t("search.to")}</label>
        <select
          className="rounded px-2 ml-4 bg-white border border-grey-500 hover:cursor-pointer"
          value={endYear}
          onChange={handleEndYearChange}
        >
          <option value={2022}>2022</option>
          <option value={2021}>2021</option>
          <option value={2020}>2020</option>
          <option value={2019}>2019</option>
          <option value={2018}>2018</option>
          <option value={2017}>2017</option>
        </select>
      </div>
    </div>
  );
};

export default DateRangePicker;
