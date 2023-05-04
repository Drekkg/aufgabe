import React, { useState } from "react";
import "./AddAuftrag.css";
import AuftragForm from "./AuftragForm";

function AddAuftrag(props) {
  const [newAuftragForm, setNewAuftragForm] = useState(false);

  function dispNewAuftragHandler() {
    setNewAuftragForm(true);
  }

  function dispCancelHandler() {
    setNewAuftragForm(false);
  }
  const onSaveAuftragDataHandler = (enteredAuftragData) => {
    const auftragData = {
      ...enteredAuftragData,
      id: Math.random().toString()
    };
    props.onAddAuftrag(auftragData);
    setNewAuftragForm(false);
  }; 

  return (
    <div className="buttonBox">
      

      {newAuftragForm && (
        <div>
  <AuftragForm onSaveAuftragData={onSaveAuftragDataHandler}/>
          <button className="buttonStyle" onClick={dispCancelHandler}>cancel</button>
        </div>
      )}
      {!newAuftragForm && (
        <button className="buttonStyle" onClick={dispNewAuftragHandler}>
          Auftrag erstellen
        </button>
      )}
    </div>
  );
}

export default AddAuftrag;
