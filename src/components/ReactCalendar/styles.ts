import Calendar from "react-calendar";
import styled from "styled-components";

export const MainCalendar = styled(Calendar)`
  border-radius: 10px;
  margin-bottom: 1.5rem;
  border: 0;
  width: 100%;
  overflow: hidden;

  .react-calendar__navigation {
    margin-bottom: .25rem;
    height: 2.5rem;
    background-color: rgb(66, 153, 225);
    display: flex;
    align-items: center;
    
    span, button {
      color: #FFF;
    }

    .react-calendar__navigation__next2-button,
    .react-calendar__navigation__prev2-button {
      display: none;
    }
  }

  .react-calendar__tile--active, 
  .react-calendar__tile--now {
    background: rgb(66, 153, 225) !important;
    border-radius: 10px;
    color: #FFF;
  }

  .react-calendar__month-view__days__day {
    border-radius: 10px;
  }


  .react-calendar__month-view__days > .react-calendar__tile,
  .react-calendar__month-view__weekdays__weekday {
    flex-basis: 20% !important;
    max-width: 20% !important;

    &:nth-child(6),
    &:nth-child(7) {
      display: none !important;
    }

    abbr {
      text-decoration: none;
    }
  }

  .react-calendar__month-view__days__day--weekend {
    display: none !important;
  }

  .react-calendar__navigation button:enabled:hover, 
  .react-calendar__navigation button:enabled:focus {
    background: transparent;
  }
`;
