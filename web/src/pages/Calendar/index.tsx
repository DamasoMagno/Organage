import { ArrowDown } from "phosphor-react";

import { useModal } from "contexts/useModal";

import { Header } from "components/Header";
import { Item as Event } from "components/Item";

import { Content } from "./styles";

export function Calendar() {
  const { setModal } = useModal();

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
            <Event onClick={() => setModal({ isOpen: true, type: "Calendar", id: "20" })}>
              Reunião Pais e Mestres
            </Event>
            <Event onClick={() => setModal({ isOpen: true, type: "Calendar", id: "10" })}>
              Reunião Pais e Mestres
            </Event>
            <Event>
              Reunião Pais e Mestres
            </Event>
            <Event>
              Reunião Pais e Mestres
            </Event>
            <Event>
              Reunião Pais e Mestres
            </Event>
          </div>
        </main>
      </Content>
    </>
  );
}