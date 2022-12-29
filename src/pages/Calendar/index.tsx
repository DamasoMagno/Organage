import { ArrowDown } from "phosphor-react";

import { useModal } from "contexts/useModal";

import { Header } from "components/Header";
import { Item as Event } from "components/Item";

import { Content } from "./styles";

export function Calendar() {
  const { setModal } = useModal();

  const events = [
    {
      id: Math.random(),
      name: "Treino Basquete",
    },
    {
      id: Math.random(),
      name: "Treino Basquete",
    },
    {
      id: Math.random(),
      name: "Treino Basquete",
    },
    {
      id: Math.random(),
      name: "Treino Basquete",
    },
    {
      id: Math.random(),
      name: "Treino Basquete",
    },
  ];

  return (
    <>
      <Header />

      <Content>
        <header>
          <h2>Eventos</h2>
        </header>

        <main>
          <div className="categoryEvents">
            <h3>Selecione a categoria</h3>

            <div>
              <select>
                <option>Eventos</option>
                <option>Provas</option>
              </select>

              <ArrowDown />
            </div>
          </div>

          <div>
            {events.map(event => (
              <Event
                key={event.id}
                onClick={() => setModal({
                  isOpen: true,
                  type: "Calendar",
                  id: String(event.id)
                })}
              >
                {event.name}
              </Event>
            ))}
          </div>
        </main>
      </Content>
    </>
  );
}