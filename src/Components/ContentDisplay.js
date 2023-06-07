import React, { useState, Fragment } from "react";
import DeleteModal from "./DeleteModal";
import "./ContentDisplay.css";

function ContentDisplay(props) {
if (props.items === undefined) {
  var items = [];

}
else {
   items = props.items;
};

function clickHandler(e) {
  e.preventDefault();
  console.log("The link was clicked.");
}
function deleteAuftrag(delFalse) {
  props.deleteHandlerDisp(delFalse); 
}
function cancelAuftrag(delFalse) {  
props.cancelHandlerDisp(delFalse);
}


  return (
<Fragment>
     
    <div className="content__container">
        <ul>
          {items.map((data) => (
            <li key={data.id} onClick={clickHandler}>
              <div className="content__container__color">
                <div>
                  <b>{data.user}</b>
                </div>
                {data.date}: {data.content }
              </div>
            </li>
          ))}
        </ul>
     
    </div>
    <DeleteModal deleteHandlerModal={props.deleteModal}
                 deleteHandlerDisp={deleteAuftrag}
                 cancelHandlerDisp={cancelAuftrag} />
    </Fragment>
  );
}

export default ContentDisplay;
