import React, { useState } from "react";
import "./App.css";

import AddAuftrag from "./Components/AddAuftrag";
import Aufträge from "./Components/Aufträge";
import FilterBox from "./Components/FilterBox";

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

  const [filteredState, setFilteredState] = useState(auftragsData);

  const [newContentObj, setNewContentObj] = useState(contentObj);

  const onAddAuftragDataHandler = (auftragData) => {
    setNewContentObj((prev) => {
      return { ...prev, [auftragData.id]: [] };
    });

    // setAuftragsData((prevItem) => {
    //   return [auftragData, ...prevItem];
    // });
    // setAuftragsData((prevItem) => {
    //   return [auftragData, ...prevItem];

    // });
    setAuftragsData((prevItem) => {
      return [auftragData, ...prevItem];
    });

    updateFilteredState(auftragData);

    // setFilteredState((prevItem) => {
    //   return [auftragData, ...prevItem]
    // });
  };

  // function filterArray(event) {
  //   // console.log(event.target.value)
  //   const kundeSearch = event.target.value;
  //   const strippedKundeSearch = kundeSearch.replaceAll(" ", "");
  //   console.log(strippedKundeSearch);
  //   const filteredAuftrag = auftragsData.filter((kunden) =>
  //     kunden.kunde
  //       .toLowerCase()
  //       .replaceAll(" ", "")
  //       .includes(strippedKundeSearch.toLowerCase())
  //   );
  //   setFilteredState(filteredAuftrag);
  // }
  // function filterArrayAufgabe(event) {
  //   // console.log(event.target.value)
  //   const aufgabeSearch = event.target.value;
  //   const strippedAufgabeSearch = aufgabeSearch.replaceAll(" ", "");

  //   const filteredAuftrag = auftragsData.filter((projekts) =>
  //     projekts.projekt
  //       .toLowerCase()
  //       .replaceAll(" ", "")
  //       .includes(strippedAufgabeSearch.toLowerCase())
  //   );
  //   setFilteredState(filteredAuftrag);
  // }

  function onDeleteHandler(id) {
    var deleteContentArray = JSON.parse(localStorage.getItem("contentObj44"));
    // console.log(deleteContentArray[id]);
    delete deleteContentArray[id];
    localStorage.setItem("contentObj44", JSON.stringify(deleteContentArray));
    setNewContentObj(deleteContentArray);

    var deleteFromArray = JSON.parse(localStorage.getItem("aufgabe"));
    const indx = deleteFromArray.findIndex((data) => data.id === id);
    deleteFromArray.splice(indx, 1);
    localStorage.setItem("aufgabe", JSON.stringify(deleteFromArray));

    // setAuftragsData(deleteFromArray);
    setFilteredState(deleteFromArray);
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
  function editAuftragHandler(edittedAuftrag) {
    const indx = auftragsData.findIndex((x) => x.id === edittedAuftrag.id);
    auftragsData[indx] = edittedAuftrag;
    const editAuftrag = JSON.parse(localStorage.getItem("aufgabe"));
    editAuftrag[indx] = edittedAuftrag;
    localStorage.setItem("aufgabe", JSON.stringify(editAuftrag));
  }
  // const [addAuftrag, setAddAuftrag] = useState(false);
  // function addAuftragHandler() {
  //   addAuftrag = true;
  // }
  function filterAuftrag(filteredAuftrag) {
    setFilteredState(filteredAuftrag);
  }
  const[aufgabePadding, setAufgabePadding] = useState(false);

  function resetFilter() {
    setFilteredState(JSON.parse(localStorage.getItem("aufgabe")) || []);
  }
    

  function updateFilteredState(auftragData) {
    setFilteredState((prevItem) => {
      return [auftragData, ...prevItem];
    });
  }

  return (
    <div className="bodyStyle">
      <div className="App">
        <h1>Aufgabe Liste</h1>
        <AddAuftrag onAddAuftrag={onAddAuftragDataHandler} />
        <div>
          <FilterBox
            toFilter={auftragsData}
            fromFilter={filterAuftrag}
            clearFilter={resetFilter}
          />
        </div>
      </div>

      {/* <div>
        <AddAuftrag onAddAuftrag={onAddAuftragDataHandler}/>
      </div> */}
      <div>
        <Aufträge
          items={filteredState}
          onSaveContentObj={onSaveContentObjHandler}
          onSaveEditContentObj={onSaveEditContentObjHandler}
          selectedId={selectedIdHandler}
          enteredContentObj={newContentObj}
          onPassedDelete={onDeleteHandler}
          editAuftrag={editAuftragHandler}
          paddingAufgabe={aufgabePadding}
        />
      </div>
    </div>
  );
}

export default App;
