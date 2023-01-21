import { EventContent } from "./styles";

export function Calendar() {
  return (
    <EventContent>
      <header>
        <strong>Reunião de Pais e Mestres</strong>
        <time>13:00</time>
      </header>

      <span>Descrição</span>
      <p>
        Todos os Pais deveram comparecer com os devidos documentos
        (RG, CPF, Comprovante de residencia).Durante a reuniao nao
        havera aula para os demais alunos.
      </p>
    </EventContent>
  );
}