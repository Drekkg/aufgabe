import React, { useState } from "react";
import "./AddAuftrag.css";
import AuftragForm from "./AuftragForm";


function AddAuftrag(props) {
  const [newAuftragForm, setNewAuftragForm] = useState();


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
    aufgabeMulti.unshift(auftragData);
    localStorage.setItem("aufgabe", JSON.stringify(aufgabeMulti));
   

    let contentObjMulti = JSON.parse(localStorage.getItem("contentObj44")) || {};
    contentObjMulti[auftragData.id] = [];
    localStorage.setItem("contentObj44", JSON.stringify(contentObjMulti));
    setNewAuftragForm(false);
  };
    
  return (
    <div>
    
      {newAuftragForm && (
        <div className="buttonBox">
          <AuftragForm onSaveAuftragData={onSaveAuftragDataHandler}
          cancelForm={dispCancelHandler} />
          
        </div>
      )}
      {!newAuftragForm && (
        <div>
        <button className="buttonStyle" onClick={dispNewAuftragHandler}>
          Auftrag erstellen
        </button>
        
        </div>
      )}
    </div>
  );
}

export default AddAuftrag;
