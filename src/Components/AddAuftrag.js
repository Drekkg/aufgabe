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
      id: Math.random().toString(),
    };
    props.onAddAuftrag(auftragData);

    let aufgabeMulti = JSON.parse(localStorage.getItem("aufgabe")) || [];
    aufgabeMulti.push(auftragData);
    localStorage.setItem("aufgabe", JSON.stringify(aufgabeMulti));
   

    let contentObjMulti = JSON.parse(localStorage.getItem("contentObj44")) || {};
    contentObjMulti[auftragData.id] = [];
    localStorage.setItem("contentObj44", JSON.stringify(contentObjMulti));
    setNewAuftragForm(false);
  };
    
  return (
    <div className="buttonBox">
      {newAuftragForm && (
        <div>
          <AuftragForm onSaveAuftragData={onSaveAuftragDataHandler} />
          <button className="buttonStyle" onClick={dispCancelHandler}>
            Cancel
          </button>
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
