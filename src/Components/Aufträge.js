import React, { useState, Fragment } from "react";
import "./Aufträge.css";
import AuftragContent from "./AuftragContent";

function Aufträge(props) {
  const [dispAufträgeContent, setDispAufträgeContent] = useState();
  const [dispContentAuftrag, setDispContentAuftrag] = useState(true);
  const [contentDataHandler, setContentDataHandler] = useState();
  const [deleteHandler, setDeleteHandler] = useState();

  // if(props.items !== null) {
  //   setDisplayHandler(false);
  // }

  const contentObjHandler2 = (contentArray) => {
    props.onSaveContentObj(contentArray);
  };

  function dispContent(id) {
    setDispAufträgeContent(id);
    setDispContentAuftrag(!dispContentAuftrag);
    props.selectedId(id);
  }
  
  return (
    <div>
      <ul>
        {props.items.map((data) => (
          <li className="auftragBox" key={data.id}>
            <div>{data.datum}</div>
            <button className="kundeButton" key={data.id} onClick={() => dispContent(data.id)}>
              <b> Kunde: </b>
              {data.kunde}
            </button>
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
                <AuftragContent
                  contentObjHandler={contentObjHandler2}
                  user={data.sachbearbeiter}
                  storageId={data.id}
                  dummyContentData={contentDataHandler}
                  contentObj2={props.enteredContentObj}
                  onDelete={props.onDelete}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Aufträge;
