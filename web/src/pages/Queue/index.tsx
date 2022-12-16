import { SideBar } from "components/SideBar";

import { Content, ClassPosition } from "./styles";

export function Queue() {
  return (
    <>
      <SideBar />

      <Content>
        <header>
          <h2>Ordem Fila</h2>
        </header>

        <main>
          <ClassPosition isOwnClass>
            <span>2</span>

            <p className="class">
              <span>2º</span>
              Redes de Computadores
            </p>
          </ClassPosition> 
          
          <ClassPosition>
            <span>2</span>

            <p className="class">
              <span>2º</span>
              Redes de Computadores
            </p>
          </ClassPosition>

          
        </main>
      </Content>
    </>
  );
}