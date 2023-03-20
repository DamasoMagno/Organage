import { FC } from "react";

import { MainCalendar } from "./styles"
import 'react-calendar/dist/Calendar.css';

interface CalendarModalProps {
  onSelectDate: (date: Date) => void;
}

export const ReactCalendar: FC<CalendarModalProps> =
  ({ onSelectDate }) => {
    return (
      <MainCalendar onChange={onSelectDate} />
    );
  }