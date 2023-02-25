import Calendar from "react-calendar";
import styled from "styled-components";

export const MainCalendar = styled(Calendar)`
  border-radius: 10px;
  margin: 1rem 0 1.5rem;
  border: 0;
  width: 100%;
  overflow: hidden;

  .react-calendar__navigation {
    margin-bottom: .25rem;
    background: #949494;
    
    span, button {
      color: #FFF;
    }

    .react-calendar__navigation__next2-button,
    .react-calendar__navigation__prev2-button {
      display: none;
    }
  }

  .react-calendar__month-view__weekdays__weekday {
    abbr {
      text-decoration: none;
    }
  }


  .react-calendar__tile--active {
    background: rgba(0, 0, 255, .25);
  }

  .react-calendar__month-view__days__day {
    border-radius: 10px;
  }

  .react-calendar__tile--now {
    background: blue;
    border-radius: 10px;
    color: #FFF;
  }
`;
