import React, { useState } from "react";
import "./Aufträge.css";
import AuftragContent from "./AuftragContent";
import DeleteModal from "./DeleteModal";
import Erledigt from "./Erledigt";

function Aufträge(props) {
  function editAuftragHandler(id) {}

  const [dispAufträgeContent, setDispAufträgeContent] = useState();
  const [dispContentAuftrag, setDispContentAuftrag] = useState(false);
  const [contentDataHandler, setContentDataHandler] = useState();
  const [editAuftrag, setEditAuftrag] = useState(false);
  const [editAuftragId, setEditAuftragId] = useState(null);
  const [editAuftragDate, setEditAuftragDate] = useState("");
  const [editAuftragKunde, setEditAuftragKunde] = useState("");
  const [editAuftragAufgabe, setEditAuftragAufgabe] = useState("");
  const [editAuftragNumber, setEditAuftragNumber] = useState("");
  const [editAuftragSachbearbeiter, setEditAuftragSachbearbeiter] =
    useState("");
  const [checked, setChecked] = useState();
  const [deleteHandler, setDeleteHandler] = useState(false);
  const [erledigtChecked, setErledigtChecked] = useState();

  function auftragBossHandler(
    id,
    priority,
    datum,
    kunde,
    projekt,
    sachbearbeiter,
    erledigt,
    content
  ) {
    if (editAuftrag) {
      submitHandler();

      return;
    } else {
      setEditAuftrag(!editAuftrag);

      setEditAuftragId(id);
      setChecked(priority);
      setEditAuftragDate(datum);
      setEditAuftragKunde(kunde);
      setEditAuftragAufgabe(projekt);
      setEditAuftragSachbearbeiter(sachbearbeiter);
      setEditAuftragNumber(content);
      setErledigtChecked(erledigt);
    }
  }

  function contentDisplay() {
    setDispContentAuftrag(true);
  }
  const contentObjHandler2 = (contentArray) => {
    props.onSaveContentObj(contentArray);
  };
  const editObjHandler = (recievedEdittedContent) => {
    props.onSaveEditContentObj(recievedEdittedContent);
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

  function onDelete(id) {
    setDeleteHandler(true);
  }
  function deleteAuftragState(delFalse) {
    setDeleteHandler(delFalse);
    props.onPassedDelete(editAuftragId);
  }
  function cancelAuftragState(delFalse) {
    setDeleteHandler(delFalse);
  }

  function submitHandler() {
    // event.preventDefault();
    setEditAuftrag(!editAuftrag);
    const edittedAuftragData = {
      kunde: editAuftragKunde,
      projekt: editAuftragAufgabe,
      datum: editAuftragDate,
      sachbearbeiter: editAuftragSachbearbeiter,
      content: editAuftragNumber,
      priority: checked,
      erledigt: erledigtChecked,
      id: editAuftragId,
    };
    props.editAuftrag(edittedAuftragData);
  }

  function editDateHandler(event) {
    var datum = event.target.value.replace(/\-/g, "/");
    setEditAuftragDate(datum);
  }
  function editKundeHandler(event) {
    setEditAuftragKunde(event.target.value);
  }
  function editAufgabeHandler(event) {
    setEditAuftragAufgabe(event.target.value);
  }
  function editNumberHandler(event) {
    setEditAuftragNumber(event.target.value);
  }
  function editArbeiterHandler(event) {
    setEditAuftragSachbearbeiter(event.target.value);
  }
  function priorityHandler() {
    setChecked(!checked);
  }
  function erledigtHandler() {
    setErledigtChecked(!erledigtChecked);
    console.log("check");
  }

  return (
    <div id="topMargin">
      <ul className="ul_align">
        {props.items.map((data) => (
          <li className="auftragBox" key={data.id}>
            {editAuftrag && data.id === editAuftragId ? (
              <form type="submit">
                <div>
                  <button
                    onClick={auftragBossHandler}
                    className="edit_button"
                    type="button"
                  >
                    Bearbeiten
                  </button>
                  <label>
                    Priorität: Hoch
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={priorityHandler}
                    />
                  </label>
                </div>

                <div>
                  <input
                    type="date"
                    defaultValue={data.datum}
                    onChange={editDateHandler}
                  />

                  <b> Kunde: </b>
                  <input
                    type="text"
                    defaultValue={data.kunde}
                    onChange={editKundeHandler}
                  />
                </div>

                <div>
                  <b>Aufgabe: </b>
                  <input
                    type="text"
                    defaultValue={data.projekt}
                    onChange={editAufgabeHandler}
                  />

                  <div>
                    <b>
                      <input
                        type="text"
                        defaultValue={data.sachbearbeiter}
                        onChange={editArbeiterHandler}
                      />
                    </b>
                  </div>
                  <div>
                    <b>Auftragsnr: </b>
                    <input
                      type="text"
                      defaultValue={data.content}
                      onChange={editNumberHandler}
                    />
                  </div>
                  <button
                    type="button"
                    className="deleteButton"
                    onClick={() => onDelete()}
                  >
                    Auftrag löschen
                  </button>

                  <label>
                    Erledigt:
                    <input
                      type="checkbox"
                      className="erledigt_button"
                      checked={erledigtChecked}
                      onChange={erledigtHandler}
                    />
                  </label>
                </div>
              </form>
            ) : (
              <div className="auftrag_box">
                <button
                  type="button"
                  className="edit_button"
                  onClick={() => {
                    auftragBossHandler(
                      data.id,
                      data.priority,
                      data.datum,
                      data.kunde,
                      data.projekt,
                      data.sachbearbeiter,
                      data.erledigt,
                      data.content
                      );
                    }}
                >
                  Bearbeiten
                </button>
                <div>
                {data.erledigt ? <Erledigt/> : null}
                </div>

                    
                <div>
                  <b></b>
                  {data.priority ? highPriority : null}
                </div>

                <div>
                  {data.datum}
                  <button
                    type="button"
                    key={data.id}
                    className="kundeButton"
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
              </div>
            )}

            <div>
              {dispContentAuftrag && dispAufträgeContent === data.id && (
                <AuftragContent
                  contentObjHandler={contentObjHandler2}
                  contentObjHandlereditted={editObjHandler}
                  user={data.sachbearbeiter}
                  storageId={data.id}
                  dummyContentData={contentDataHandler}
                  contentObj2={props.enteredContentObj}
                  dispContentHandler={contentDisplay}
                  auftragEditHandler={editAuftragHandler}
                />
              )}
              <DeleteModal
                deleteHandlerModal={deleteHandler}
                deleteHandlerDisp={deleteAuftragState}
                cancelHandlerDisp={cancelAuftragState}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Aufträge;
