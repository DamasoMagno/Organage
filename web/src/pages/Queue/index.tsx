import { Header } from "components/Header";

import { Content, ClassPosition } from "./styles";

export function Queue() {
  return (
    <>
      <Header />

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