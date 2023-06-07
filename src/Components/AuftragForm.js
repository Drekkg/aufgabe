import React, { useState, Fragment } from "react";
import "./AuftragForm.css";

function AuftragForm(props) {

const [enteredKunde, setEnteredKunde] = useState('');
const [enteredProjekt, setEnteredProjekt] = useState('');
const [enteredDatum, setEnteredDatum] = useState('');
const [enteredSachbearbeiter, setEnteredSachbearbeiter] = useState('');
const [enteredAuftragNummer, setEnteredAuftragNummer] = useState(''); 
const [enteredPriority, setEnteredPriority] = useState(false);

const kundeChangeHandler = (event) => {
  setEnteredKunde(event.target.value);
}
const projektChangeHandler = (event) => {
  setEnteredProjekt(event.target.value);
}
const datumChangeHandler = (event) => {
 var datum = event.target.value.replace(/\-/g, '/');
 
  setEnteredDatum(datum);
}
const sachbearbeiterChangeHandler = (event) => {
  setEnteredSachbearbeiter(event.target.value);
}

const auftragNummerHandler =(event) => {
  setEnteredAuftragNummer(event.target.value);
}

const priorityHandler = (event) => {
  if(event.target.value === "true"){
    setEnteredPriority(true);
  }
}




const submitHandler = (event) => {
  event.preventDefault();

  const enteredAuftragData = {
    kunde: enteredKunde,
    projekt: enteredProjekt,
    datum: enteredDatum,
    sachbearbeiter: enteredSachbearbeiter,
    content: enteredAuftragNummer,
    priority: enteredPriority,
  
    
  };

  props.onSaveAuftragData(enteredAuftragData);
  setEnteredProjekt('');
  setEnteredDatum('');
  setEnteredSachbearbeiter('');
  setEnteredKunde('');
  setEnteredAuftragNummer('');
  setEnteredPriority(false);

 
  
}

  return (
    <form onSubmit={submitHandler}>
      <div className="new-auftrag__controls">
        <div className="new-auftrag__control label">
          <label>Kunde </label>
          <input type="text" size="50" onChange={kundeChangeHandler}/>
        </div>

        <div className="new-auftrag__control label">
          <label>Projekt</label>
          <input type="text" onChange={projektChangeHandler}/>  
        </div>

        <div className="new-auftrag__control label">
          <label>Datum</label>
          <input type="date" onChange={datumChangeHandler}/>
        </div>

        <div className="new-auftrag__control label"> 
          <label>Sachbearbeiter</label>
          <input type="text" onChange={sachbearbeiterChangeHandler}/>
        </div>

        <div className="new-auftrag__control label">
          <label>Auftrag Nummmer:</label>
          <input type="text" onChange={auftragNummerHandler}/>
        </div>

        <div>
          <label>Priorität: Hoch 
          <input type="checkbox"  value="true" onChange={priorityHandler}/>
          </label>
        </div>

      </div>
      

      <div>
        <button className="buttonStyle" type="submit">Erstellen</button>
      </div>
    </form>
  );
}

export default AuftragForm;
