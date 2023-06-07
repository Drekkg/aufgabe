import React, { useState } from "react";
import ContentDisplay from "./ContentDisplay";
import "./AuftragContent.css";

function AuftragContent(props) {
  const [content, setContent] = useState("");
  const [enteredContent, setEnteredContent] = useState(
    props.contentObj2[props.storageId]
  );
 const [deleteHandler, setDeleteHandler] = useState(false);

  const onChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (content.trim().length === 0) {
      alert("Bitte eintragen");
      return;
    }
    if (window.confirm("Sicher?")) {
      var dateObj = new Date();
      var month = dateObj.getMonth() + 1;
      var day = dateObj.getDate();
      var year = dateObj.getFullYear();

      var newdate = year + "/" + month + "/" + day;
      var idNew = Math.random().toString();

      const contentArray = {
        id: idNew,
        date: newdate,
        content: content,
        user: props.user,
      };
      props.contentObjHandler(contentArray);

      event.target.reset();

      // setEnteredContent((prevEnteredData) => {
      //   return [contentArray, ...prevEnteredData];
      // });
    }

    setContent("");
  };

  function onDelete(id) {
    setDeleteHandler(true);
    
  
  }
  function dispAuftragDelete(delFalse) {
    setDeleteHandler(delFalse);
    props.onDelete(props.storageId);
  }
function dispAuftragCancel(delFalse) {  
  setDeleteHandler(delFalse);
};

  console.log("enteredcontent" + props.contentObj2[props.storageId]);
  return (
    <div className="input__align">
      <form onSubmit={submitHandler}>
        <label>
          Arbeit:- <span></span>
          <input size="80" type="text" onChange={onChangeHandler} className="input__align_input" />
        </label>
      </form>
      
      <div>
        <ContentDisplay items={enteredContent} 
                        deleteModal={deleteHandler}
                        deleteHandlerDisp={dispAuftragDelete}
                        cancelHandlerDisp={dispAuftragCancel}
                        />
      </div>
      <button
        className="deleteButton"
        onClick={() => onDelete(props.storageId)}>
        Auftrag löschen
      </button>
      
    </div>
  );
}

export default AuftragContent;
