import * as Modal from "@radix-ui/react-dialog";

import { useModal } from "contexts/useModal";

import { Calendar } from "./Calendar";

import { Overlay, Content } from "./styles";

export function CalendarDetailsModal() {
  const { state, dispatch } = useModal();

  function onOpenChangeModal() {
    dispatch({ type: "CLOSE_MODAl" });
  }

  const modalIsOpen = !!state.id;

  return (
    <Modal.Root 
      open={modalIsOpen} 
      onOpenChange={onOpenChangeModal}
    >
      <Modal.Portal>
        <Overlay />

        <Content>
          <div className="bar" />
          <Calendar />
        </Content>
      </Modal.Portal>
    </Modal.Root>
  );
}