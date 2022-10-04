import React, { useState, useCallback } from "react";

import Modal, { ModalHeader, ModalBody, ModalCloseButton } from "./Modal";

export const Default: React.FC = () => {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);
  return (
    <div>
      <button onClick={openModal}>Click to open </button>
      <Modal open={open} onClose={closeModal}>
        <ModalHeader>
          <h1>My Header</h1>
        </ModalHeader>
        <ModalBody>
          <p>
            Modal Content. <b>Click outside to close</b>
          </p>
        </ModalBody>
        <ModalCloseButton />
      </Modal>
    </div>
  );
};

export default {
  title: "Modal",
  component: Modal,
  layout: "fullscreen",
};
