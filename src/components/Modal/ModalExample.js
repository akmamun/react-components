import React, { useState } from "react";
import Modal from "./Modal";

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Click Modal!</button>
      <Modal show={isOpen} closeModal={() => setIsOpen(false)}>
        <h4> here is hook modal data </h4>
      </Modal>
    </div>
  );
}
