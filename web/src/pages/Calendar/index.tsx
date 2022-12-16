import { ArrowDown } from "phosphor-react";

import { SideBar } from "components/SideBar";
import { Item as Event } from "components/Item";

import { Content } from "./styles";

export function Calendar() {
  return (
    <>
      <SideBar />

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
            <Event>
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