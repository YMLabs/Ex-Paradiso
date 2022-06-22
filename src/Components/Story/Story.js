import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./Story.css";

function Story() {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <section style={{margin: "0 3rem",paddingBottom: "2rem"}}>
      <Modal
        open={open}
        onClose={onCloseModal}
        closeOnEsc
        closeOnOverlayClick
        classNames={{
          overlay: "eventOverlay",
          modal: "eventModal",
        }}
      >
        <div className="modal-container">
          <div>
            <img src="./story-img.png" alt="" />
          </div>
          <div className="">
            <h3>CONTRABAND STOLEN</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              tempora tempore similique ad illum consectetur possimus quae
              delectus excepturi fugiat quibusdam ex architecto impedit dolore
              ipsa, amet ea est sapiente?
            </p>
          </div>
        </div>
      </Modal>

      <div className="header">
        <p className="font-andale">Section --- 05</p>
        <img src="./dotted-lines.png" alt="" />
        <h1 className="font-laviossa">STORY</h1>
      </div>
      <div className="story-group">
        <img src="./story-img.png" onClick={() => {onOpenModal(true)}} />
        <img src="./story-img.png" onClick={() => {onOpenModal(true)}} />
        <img src="./story-img.png" onClick={() => {onOpenModal(true)}} />
        <img src="./story-img.png" onClick={() => {onOpenModal(true)}} />
      </div>
    </section>
  );
}

export default Story;
