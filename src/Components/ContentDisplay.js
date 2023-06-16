import React, { useState, Fragment, } from "react";
import DeleteModal from "./DeleteModal";
import "./ContentDisplay.css";

function ContentDisplay(props) {
  

  const [dispEditContent, setDispEditContent] = useState(false);
  const [edittedContent, setEdittedContent] = useState();

  if (props.items === undefined) {
    var items = [];
  } else {
    items = props.items;
  }

  function deleteAuftrag(delFalse) {
    props.deleteHandlerDisp(delFalse);
  }
  function cancelAuftrag(delFalse) {
    props.cancelHandlerDisp(delFalse);
  }
  const submitHandler = (event) => {
   
    props.recievedEdittedContent(edittedContent);

    setDispEditContent(false);
    setEdittedContent();
    
  };

  const editContentHandler = (id) => {
    setDispEditContent(true);
    console.log("id" + id)
  };

  const onChangeHandler = (event) => {
setEdittedContent(event.target.value)

  };

  return (
    <Fragment>
      <div className="content__container">
        {!dispEditContent && (
          <ul>
            {items.map((data) => (
              <li key={data.id}>
                <div className="content__container__color">
                  <div>
                    <button onClick={editContentHandler(data.id)}>
                      <b>{data.user}</b>
                    </button>
                  </div>
                  {data.date}: {data.content}
                </div>
              </li>
            ))}
          </ul>
        )}

        {dispEditContent && (
          <ul>
            {items.map((data) => (

              <li key={data.id}>
                <div
                  className="content__container__color"
                  
                >
                  <div>
                  <button onClick={submitHandler}  >
                      <b>{data.user}</b>
                    </button>
                  </div>
                  <input defaultValue={data.content} onChange={onChangeHandler} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <DeleteModal
        deleteHandlerModal={props.deleteModal}
        deleteHandlerDisp={deleteAuftrag}
        cancelHandlerDisp={cancelAuftrag}
      />
    </Fragment>
  );
}

export default ContentDisplay;
