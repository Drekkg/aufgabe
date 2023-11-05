import React from "react";
import "./ContentDisplay.js";
import "./DeleteModal.css";

function DeleteModal(props) {
  
  function deleteAuftrag(delFalse) {
    delFalse = false;
    props.deleteHandlerDisp(delFalse);
  }

  function cancelDelete(delFalse) {
    delFalse = false;
    props.cancelHandlerDisp(delFalse);
  }

  return (
    <div>
      <div>
        {props.deleteHandlerModal ? (
          <div className="delete_modal_box">
            <div className="delete_modal_button_box">
              Sind Sie Sicher dass Sie den Auftrag Löschen möchten.Es ist nicht
              Rückgänig.
              <button className="delete_auftrag" onClick={deleteAuftrag}>
                Auftrag Löschen
              </button>
              <button className="cancel_auftrag" onClick={cancelDelete}>
                Cancel
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default DeleteModal;
