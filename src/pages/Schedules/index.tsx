import { useModal } from "contexts/useModal";

import { Header } from "components/Header";
import { Item as Schedule } from "components/Item";

import { Content } from "./styles";

const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

export function Schedules() {
  const { setModal } = useModal();

  function openScheduleModal() {
    setModal({
      isOpen: true,
      type: "Schedule",
      id: String("")
    });
  }

  return (
    <>
      <Header />

      <Content>
        <header>
          <h2>Horários</h2>
        </header>

        <main>
          <div>
            {days.map((day, index) => (
              <Schedule key={index} onClick={openScheduleModal}>
                {day}
              </Schedule>
            ))}
          </div>
        </main>
      </Content>
    </>
  );
}