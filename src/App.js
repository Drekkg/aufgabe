import React, { useState, Fragment } from "react";
import "./App.css";
// import cold_logo from "./cold_logo.jpg";
import AddAuftrag from "./Components/AddAuftrag";
import Aufträge from "./Components/Aufträge";

function App() {
  const DUMMY_DATA = [
    {
      id: "e1",
      datum: "2021/09/01",
      kunde: "Kunde 1",
      projekt: "Projekt 1",
      sachbearbeiter: "Sachbearbeiter 1",
      content: "Christine",
    },
    {
      id: "e2",
      datum: "2021/11/26",
      kunde: "Kunde 2",
      projekt: "Projekt 2",
      sachbearbeiter: "Sachbearbeiter 2",
      content: "Derek",
    },
    {
      id: "e3",
      datum: "2021/02/01",
      kunde: "Kunde 3",
      projekt: "Projekt 2",
      sachbearbeiter: "Sachbearbeiter 3",
      content: "Andi",
    },
    {
      id: "e4",
      datum: "2021/09/17",
      kunde: "Kunde 4",
      projekt: "Projekt 4",
      sachbearbeiter: "Sachbearbeiter 4",
      content: "Robin",
    },
  ];
  var contentObj = JSON.parse(localStorage.getItem("contentObj44")) || {};


  let aufgabeContententId = "";

  

  const [auftragsData, setAuftragsData] = useState(
    JSON.parse(localStorage.getItem("aufgabe")) || []
  );
 

  const [newContentObj, setNewContentObj] = useState(contentObj);
 
  const onAddAuftragDataHandler = (auftragData) => {
    setNewContentObj((prev) => {
      return { ...prev, [auftragData.id]: [] };
    });

    setAuftragsData((prevItem) => {
      return [auftragData, ...prevItem];
    });
  };

  function onDeleteHandler(id) {
    var deleteFromArray = JSON.parse(localStorage.getItem("aufgabe"));
    const indx = deleteFromArray.findIndex((data) => data.id === id);
    deleteFromArray.splice(indx, 1);
    localStorage.setItem("aufgabe", JSON.stringify(deleteFromArray));

    var deleteContentArray = JSON.parse(localStorage.getItem("contentObj44"));
    console.log(deleteContentArray[id]);
    delete deleteContentArray[id];
    localStorage.setItem("contentObj44", JSON.stringify(deleteContentArray));
    setNewContentObj(deleteContentArray);
    setAuftragsData(deleteFromArray);
    
  
  }



  const onSaveContentObjHandler = (contentArray) => {
    newContentObj[aufgabeContententId].push(contentArray);
  let ca = JSON.parse(localStorage.getItem("contentObj44"));
  ca[aufgabeContententId].push(contentArray);
  localStorage.setItem("contentObj44", JSON.stringify(ca));
  };
  function selectedIdHandler(id) {
    return (aufgabeContententId = id);
  }
  
  return (
    <Fragment>
      <div className="App">
        {/* <img src={cold_logo} alt="" width="75rem" height="30rem" /> */}
        <h1>Aufgabe Liste</h1>
      </div>
      <div>
        <AddAuftrag onAddAuftrag={onAddAuftragDataHandler} />
      </div>
      <div>
        <Aufträge
          items={auftragsData}
          onSaveContentObj={onSaveContentObjHandler}
          selectedId={selectedIdHandler}
          enteredContentObj={newContentObj}
          onDelete={onDeleteHandler}
        />
      </div>
    </Fragment>
  );
}

export default App;
