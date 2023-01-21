import styled from "styled-components";
import { DefaultContainer } from "styles/defaultContainer";

export const Content = styled(DefaultContainer)`
  main {
    display: flex;
    flex-direction: column;

    .day {
      display: flex;
      flex-direction: column;
      gap: .15rem;
      margin-top: 1rem;

      label {
        color: rgba(51, 51, 51, 0.5);
        font-weight: 500;
      }

      .content {
        display: flex;
        align-items: center;
        gap: .25rem;
      }
    }

    .daysQuantity {
      overflow: scroll;
      width: 100%;
      height: 2.5rem;
      display: flex;

      ::-webkit-scrollbar {
        display: none;
      }

      button {
        background: #FFF;
        color: #333;
        padding: 0 1.25rem;
        border: 0;
        margin-right: .15rem;

        &:first-child {
          border-radius: 5px 0 0 5px;
        }
        
        &:last-child {
          border-radius: 0 5px 5px 0;
          margin-right: 0;
        }

        &.currentDay {
          background: #00A3FF;
          color: #FFF;
        }
      }
    }

    .categoryEvents {
      margin-top: .75rem;
      margin-bottom: 1.5rem;

      label {
        color: rgba(51, 51, 51, 0.5);
        margin-bottom: .45rem;
        font-weight: 500;
      }
    }
  }
`;

export const Select = styled.div`
  margin-top: 0.25rem;
  min-width: 30%;
  height: 2.5rem;
  background-color: #FFF;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid transparent;

  &:focus-within {
    border-color: #00A3FF;
  }

  select {
    width: 100%;
    appearance: none;
    background-color: transparent;
    font-size: 0.875rem;
    height: 100%;
    border: 0;
    outline: 0;
    font-weight: 500;
  }

  svg {
    width: .85rem;
    height: .85rem;
  }
`;
