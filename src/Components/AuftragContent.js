import React, { useState } from "react";
import ContentDisplay from "./ContentDisplay";
import "./AuftragContent.css";

function AuftragContent(props) {
  const [content, setContent] = useState("");
  const [enteredContent, setEnteredContent] = useState(
    props.contentObj2[props.storageId]
  );

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
    if (
      window.confirm("Sind Sie sicher, dass Sie den Auftrag löschen wollen?")
    ) {
      if (
        window.confirm("Sind Sie wirklich sicher? es ist nicht rückgängig!")
      ) {
        props.onDelete(id);
      }
    }
  }

  console.log("enteredcontent" + props.contentObj2[props.storageId]);
  return (
    <div className="input__align">
      <form onSubmit={submitHandler}>
        <label>
          Arbeit:- <span></span>
          <input size="80" type="text" onChange={onChangeHandler} />
        </label>
      </form>
      
      <div>
        <ContentDisplay items={enteredContent} />
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
