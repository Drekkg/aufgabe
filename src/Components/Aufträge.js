import React, { useState } from "react";
import "./Aufträge.css";
import AuftragContent from "./AuftragContent";

function Aufträge(props) {
  const [dispAufträgeContent, setDispAufträgeContent] = useState();
  const [dispContentAuftrag, setDispContentAuftrag] = useState(true);
  const [contentId, setContentId] = useState({});
 
  
  

  function dispContent(id) {
    setDispAufträgeContent(id);
    setDispContentAuftrag(!dispContentAuftrag);
    
   
  }



  // console.log("items props" + JSON.stringify(props.items))
  return (
    <div>
      <ul>
        {props.items.map((data) => (
          <li className="auftragBox" key={data.id}>
            <div>{data.datum}</div>
            <div key={data.id} onClick={() => dispContent(data.id)}>
              <b> Kunde: </b>
              {data.kunde}
            </div>
            <div>
              <b>Aufgabe: </b>
              {data.projekt}
            </div>
            <div>{data.sachbearbeiter}</div>
            <div>
              <b>Auftragsnr: </b>
              {data.content}
            </div>

            <div>
              {!dispContentAuftrag && dispAufträgeContent === data.id && (
                <AuftragContent user={data.sachbearbeiter} storageId={data.id}/>
              )}
            </div> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Aufträge;
