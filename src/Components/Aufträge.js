import React, { useState, Fragment } from "react";
import "./Aufträge.css";
import AuftragContent from "./AuftragContent";

function Aufträge(props) {
  const [dispAufträgeContent, setDispAufträgeContent] = useState();
  const [dispContentAuftrag, setDispContentAuftrag] = useState(false);
  const [contentDataHandler, setContentDataHandler] = useState();

  // if(props.items !== null) {
  //   setDisplayHandler(false);
  // }
function contentDisplay(){
  setDispContentAuftrag(true)
  console.log("WWWW")
}
  const contentObjHandler2 = (contentArray) => {
    props.onSaveContentObj(contentArray);
  };

  function dispContent(id) {
    setDispAufträgeContent(id);
    setDispContentAuftrag(!dispContentAuftrag);
    props.selectedId(id);
  }
  const highPriority = (
    <b>
      <div className="highPriority">Priorität: Hoch</div>
    </b>
  );

  return (
    <div>
      <ul>
        {props.items.map((data) => (
          <li
            className={
              data.priority ? "auftragBox__highPriority" : "auftragBox"
            }
            key={data.id}
          >
            <div>
              <b></b>
              {data.priority ? highPriority : null}
            </div>

            <div>
              {data.datum}
              <button
                className={
                  data.priority ? "kundeButton_highPriority" : "kundeButton"
                }
                key={data.id}
                onClick={() => dispContent(data.id)}
              >
                <b> Kunde: </b>
                {data.kunde}
              </button>
            </div>
            <div>
              <b>Aufgabe: </b>
              {data.projekt}

              <div>
                <b>{data.sachbearbeiter}</b>
              </div>
              <div>
                <b>Auftragsnr: </b>
                {data.content}
              </div>
            </div>

            <div>
              {dispContentAuftrag && dispAufträgeContent === data.id && (
                <AuftragContent
                  contentObjHandler={contentObjHandler2}
                  user={data.sachbearbeiter}
                  storageId={data.id}
                  dummyContentData={contentDataHandler}
                  contentObj2={props.enteredContentObj}
                  onDelete={props.onDelete}
                  dispContentHandler={contentDisplay}
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
