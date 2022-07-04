import styled from "styled-components";

export const Container = styled.div``;

export const ScheduleContent = styled.main`
  width: 90%;
  height: 80vh;
  margin: 2rem auto;
  background-color: ${(ctx) => ctx.theme.colors.gray[700]};
  border-radius: 4px;
  padding: 1rem 1rem 1.5rem;

  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .selectTypeEvent {
      margin-top: 1rem;
      height: 2rem;
      background-color: ${(ctx) => ctx.theme.colors.white[900]};
      display: flex;
      align-items: center;
      border-radius: 4px;
      padding: 0.25rem 0.5rem;
      border: 1px solid transparent;

      &:focus-within {
        border-color: ${(ctx) => ctx.theme.colors.blue[900]};
      }

      select {
        width: 100%;
        appearance: none;
        background-color: transparent;
        font-size: 1rem;
        height: 100%;
        border: 0;
        outline: 0;
      }
    }
  }
`;
