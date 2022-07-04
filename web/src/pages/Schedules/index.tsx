import { SideBar } from "@components/SideBar";
import { Item as Schedule } from "@components/Item";

import { Container, ScheduleContent } from "./styles";

export function Schedules() {
  return (
    <Container>
      <SideBar />

      <ScheduleContent>
        <header>
          <h2>Horários</h2>
        </header>

        <main>
          <div>
            <Schedule label="Segunda" />
            <Schedule label="Terça" />
            <Schedule label="Quarta" />
            <Schedule label="Quinta" />
            <Schedule label="Sexta" />
          </div>
        </main>
      </ScheduleContent>
    </Container>
  );
}