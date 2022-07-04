import { SideBar } from "@components/SideBar";

import { Container, QueueContent, ClassPosition } from "./styles";

export function Queue() {
  return (
    <Container>
      <SideBar />

      <QueueContent>
        <header>
          <h2>Ordem Fila</h2>
        </header>

        <main>
          <strong>12/10/2022</strong>

          <ClassPosition>
            <p>1ª</p>
            <strong>2º Redes de Computadores</strong>
          </ClassPosition>

          <ClassPosition isOwnClass>
            <p>2ª</p>
            <strong>2º Redes de Computadores</strong>
          </ClassPosition>
        </main>
      </QueueContent>
    </Container>
  );
}