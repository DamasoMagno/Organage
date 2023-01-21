import * as Modal from "@radix-ui/react-dialog";

import { useModal } from "contexts/useModal";

import { Schedule } from "./Schedule";
import { Calendar } from "./Calendar";

import { Overlay, ModalContainer} from "./styles";

export function EventDetailtModal() {
  const { modal, setModal } = useModal();

  function onOpenChangeModal() {
    setModal({ isOpen: false });
  }

  return (
    <Modal.Root open={modal.isOpen} onOpenChange={onOpenChangeModal}>
      <Modal.Portal>
        <Overlay />

        <ModalContainer>
          <div className="bar" />
          {
            modal.type === "Calendar" ? 
            <Calendar /> : 
            <Schedule />
          }
        </ModalContainer>
      </Modal.Portal>
    </Modal.Root>
  );
}