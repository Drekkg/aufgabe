import React, { useState } from "react";
import ContentDisplay from "./ContentDisplay";
import "./AuftragContent.css";

function AuftragContent(props) {
  const vee = [];
  
  const [content, setContent] = useState("");
  const [enteredContent, setEnteredContent] = useState([]);
  
  localStorage.setItem(props.storageId, JSON.stringify(vee));
  
  
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
      event.target.reset();
      
      
      
      setEnteredContent((prevEnteredData) => {
        vee.unshift("dddd");
        return [contentArray, ...prevEnteredData];
        
      });
     
          
    }
 
    setContent("");
  };

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
    </div>
  );
}

export default AuftragContent;
