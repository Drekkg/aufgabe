import React, { useState } from "react";
import "./ContentDisplay.css";

function ContentDisplay(props) {
if (props.items === undefined) {
  var items = [];

}
else {
   items = props.items;
};


  return (
    <div className="content__container">
     
        <ul>
          {items.map((data) => (
            <li key={data.id}>
              <div className="content__container__color">
                <div>
                  <b>{data.user}</b>
                </div>
                {data.date}: {data.content}
              </div>
            </li>
          ))}
        </ul>
     
    </div>
  );
}

export default ContentDisplay;
