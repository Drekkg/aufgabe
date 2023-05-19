import React, {useState} from "react";
import "./App.css";
// import cold_logo from "./cold_logo.jpg";
import AddAuftrag from "./Components/AddAuftrag";
import Aufträge from "./Components/Aufträge";

function App() {

const DUMMY_DATA = [
    {
      id: "e1",
      datum: "2021-09-01",
      kunde: "Kunde 1",
      projekt: "Projekt 1",
      sachbearbeiter: "Sachbearbeiter 1",
      content: "Christine", 
    },
    {
      id: "e2",
      datum: "2021-09-01",
      kunde: "Kunde 2",
      projekt: "Projekt 2",
      sachbearbeiter: "Sachbearbeiter 2",
      content: "Derek", 
    },
    {
      id: "e3",
      datum: "2021-09-01",
      kunde: "Kunde 3",
      projekt: "Projekt 2",
      sachbearbeiter: "Sachbearbeiter 3",
      content: "Andi", 
    },
    {
      id: "e4",
      datum: "2021-09-01",
      kunde: "Kunde 4",
      projekt: "Projekt 4",
      sachbearbeiter: "Sachbearbeiter 4",
      content: "Robin", 
    }
]
  const [auftragsData, setAuftragsData] = useState(DUMMY_DATA);


  const onAddAuftragDataHandler = (auftragData) => {
    
    setAuftragsData((prevAuftragsData) => {
      return [auftragData, ...prevAuftragsData];
    });
    
  };
  return (
    <div>
      <div className="App">
        {/* <img src={cold_logo} alt="" width="75rem" height="30rem" /> */}
        <h1>Aufgabe Liste</h1>
      </div>
      <div>
        <AddAuftrag onAddAuftrag={onAddAuftragDataHandler} />
      </div>
      <div>
        <Aufträge items={auftragsData} />
      </div>
    </div>
  );
}

export default App;
