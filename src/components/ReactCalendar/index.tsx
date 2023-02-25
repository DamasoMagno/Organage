import {MainCalendar } from "./styles"
import 'react-calendar/dist/Calendar.css';

interface CalendarModalProps {
  onSelectDate: (date: Date) => void;
}

export function ReactCalendar({ onSelectDate }: CalendarModalProps) {
  return (
    <MainCalendar 
      onChange={onSelectDate} 
    />
  );
}