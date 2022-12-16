import { SideBar } from "components/SideBar";
import { Item as Schedule } from "components/Item";

import { Content } from "./styles";

export function Schedules() {
  return (
    <>
      <SideBar />

      <Content>
        <header>
          <h2>Horários</h2>
        </header>

        <main>
          <div>
            <Schedule>Segunda</Schedule>
            <Schedule>Terça</Schedule>
            <Schedule>Quarta</Schedule>
            <Schedule>Quinta</Schedule>
            <Schedule>Sexta</Schedule>
          </div>
        </main>
      </Content>
    </>
  );
}