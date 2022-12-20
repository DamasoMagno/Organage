import { useModal } from "contexts/useModal";

import { Header } from "components/Header";
import { Item as Schedule } from "components/Item";

import { Content } from "./styles";

export function Schedules() {
  const { setModal } = useModal();

  return (
    <>
      <Header />

      <Content>
        <header>
          <h2>Horários</h2>
        </header>

        <main>
          <div>
            <Schedule onClick={() => setModal(
              {
                isOpen: true,
                type: "Schedule"
              }
            )}>Segunda</Schedule>
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