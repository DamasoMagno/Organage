import * as Modal from "@radix-ui/react-dialog";

import { useModal } from "contexts/useModal";

import {
  Overlay,
  ModalContainer,
  Event,
  Schedule
} from "./styles";


export function EventDetailtModal() {
  const { modal, setModal } = useModal();

  function onOpenChangeModal() {
    setModal({ isOpen: false });
  }

  return (
    <Modal.Root 
      open={modal.isOpen} 
      onOpenChange={onOpenChangeModal}
    >
      <Modal.Portal>
        <Overlay />

        <ModalContainer>
          <div className="bar" />

          {modal.type === "Calendar" ? (
            <Event>
              <time>13:00</time>

              <div className="details">
                <strong>Reunião de Pais e Mestres</strong>
                <span>Descrição</span>
                <p>
                  Todos os Pais deveram comparecer com os devidos documentos
                  (RG, CPF, Comprovante de residencia).Durante a reuniao nao
                  havera aula para os demais alunos.
                </p>
              </div>
            </Event>
          ) : (
            <Schedule>
              <strong>Segunda</strong>

              <ul>
                <li>
                  Matemática
                  <span>23:00</span>
                </li>
              </ul>
            </Schedule>
          )}
        </ModalContainer>
      </Modal.Portal>
    </Modal.Root>
  );
}