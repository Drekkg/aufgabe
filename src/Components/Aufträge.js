import React, { useState } from "react";
import "./Aufträge.css";
import AuftragContent from "./AuftragContent";

function Aufträge(props) {
  const [dispAufträgeContent, setDispAufträgeContent] = useState(false);

  // function dispContent(id) {
  //   setDispAufträgeContent(
  //     props.items.map((data) => 
  //       data.id === id ? { ...data, content: "dddd" }: data)
  //   );
  //     console.log(dispAufträgeContent)
  //     }
  function dispContent(id) {
    setDispAufträgeContent(!dispAufträgeContent);
    let data = props.items.findIndex((data) => data.id === id);
    let newData = props.items;
     newData[data] = {...newData[data], content: "Lawrence"};
    console.log(newData[data]);
  }

  return (
    <div>
      <ul>
        {props.items.map((data) => (
          <li className="auftragBox" key={data.id}>
            <div>{data.datum}</div>
            <div key={data.id} onClick={() => dispContent(data.id)}>
              Kunde: <b>{data.kunde}</b>
            </div>
            <div>Aufgabe: {data.projekt}</div>
            <div>{data.sachbearbeiter}</div>
            <div>{data.content}</div>
            
          </li>
       
          ))}
      </ul>
    </div>
  );
}

export default Aufträge;
