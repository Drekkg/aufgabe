import React, { useState, Fragment } from "react";
import "./App.css";
// import cold_logo from "./cold_logo.jpg";
import AddAuftrag from "./Components/AddAuftrag";
import Aufträge from "./Components/Aufträge";

function App() {
  // const DUMMY_DATA = [
  //   {
  //     id: "e1",
  //     datum: "2021/09/01",
  //     kunde: "Kunde 1",
  //     projekt: "Projekt 1",
  //     sachbearbeiter: "Sachbearbeiter 1",
  //     content: "Christine",
  //   },
  //   {
  //     id: "e2",
  //     datum: "2021/11/26",
  //     kunde: "Kunde 2",
  //     projekt: "Projekt 2",
  //     sachbearbeiter: "Sachbearbeiter 2",
  //     content: "Derek",
  //   },
  //   {
  //     id: "e3",
  //     datum: "2021/02/01",
  //     kunde: "Kunde 3",
  //     projekt: "Projekt 2",
  //     sachbearbeiter: "Sachbearbeiter 3",
  //     content: "Andi",
  //   },
  //   {
  //     id: "e4",
  //     datum: "2021/09/17",
  //     kunde: "Kunde 4",
  //     projekt: "Projekt 4",
  //     sachbearbeiter: "Sachbearbeiter 4",
  //     content: "Robin",
  //   },
  // ];
  var contentObj = JSON.parse(localStorage.getItem("contentObj44")) || {};

  let aufgabeContentId = "";

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

  // console.log("contentObj " + JSON.stringify(newContentObj[auftragsData[0].id]));

  const onSaveEditContentObjHandler = (recievedEdittedContent) => {
    const objToEdit = newContentObj[aufgabeContentId];
    const objId = recievedEdittedContent.id;

    const edit = objToEdit.find((obj) => obj.id === objId);
    edit.content = recievedEdittedContent.content;

    let ca = JSON.parse(localStorage.getItem("contentObj44"));
    const objToStorage = ca[aufgabeContentId];

    const editStorage = objToStorage.find((obj) => obj.id === objId);
    editStorage.content = recievedEdittedContent.content;
    localStorage.setItem("contentObj44", JSON.stringify(ca));
   // console.log(JSON.stringify(editStorage));
  };

  const onSaveContentObjHandler = (contentArray) => {
    newContentObj[aufgabeContentId].unshift(contentArray);

    let ca = JSON.parse(localStorage.getItem("contentObj44"));
    ca[aufgabeContentId].unshift(contentArray);
    localStorage.setItem("contentObj44", JSON.stringify(ca));
  };

  function selectedIdHandler(id) {
    return (aufgabeContentId = id);
  }
  function editAuftragHandler(edittedAuftrag){

    const indx = auftragsData.findIndex(x => x.id === edittedAuftrag.id);
    auftragsData[indx] = edittedAuftrag;
    const editAuftrag = JSON.parse(localStorage.getItem("aufgabe"));
    editAuftrag[indx] = edittedAuftrag;
    localStorage.setItem("aufgabe", JSON.stringify(editAuftrag));
    
    console.log("in App " + JSON.stringify(editAuftrag))
  }

  return (
    <Fragment>
      <div className="App">
        <h1>Aufgabe Liste</h1>
      </div>
      <div>
        <AddAuftrag onAddAuftrag={onAddAuftragDataHandler} />
      </div>
      <div>
        <Aufträge
          items={auftragsData}
          onSaveContentObj={onSaveContentObjHandler}
          onSaveEditContentObj={onSaveEditContentObjHandler}
          selectedId={selectedIdHandler}
          enteredContentObj={newContentObj}
          onDelete={onDeleteHandler}
          editAuftrag={editAuftragHandler}
        />
      </div>
      b
    </Fragment>
  );
}

export default App;
