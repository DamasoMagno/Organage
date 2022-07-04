import Modal from "react-modal";

interface CalendarModalProps {
  modalIsOpen: boolean;
  onCloseModal(): void;
  data: {};
}

import { Container } from "./styles";

export function CalendarModal({ modalIsOpen, onCloseModal }: CalendarModalProps) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
    >
      <Container>
        <header>
          <strong>Reunião Pais e Mestres</strong>
          <span>17:00</span>
        </header>

        <div>
          <span>Observação</span>
          <p>Pais por favor, levar a sua carteira de identificação</p>
        </div>
      </Container>
    </Modal>
  );
}