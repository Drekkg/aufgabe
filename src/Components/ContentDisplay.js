import React, { useState, Fragment } from "react";
// import DeleteModal from "./DeleteModal";
import "./ContentDisplay.css";

function ContentDisplay(props) {
  const [dispEditContent, setDispEditContent] = useState(false);
  const [edittedContent, setEdittedContent] = useState("");
  const [editContentId, setEditContentId] = useState();
  const [editContentUser, setEditContentUser] = useState();
  const [editContentDate, setEditContentDate] = useState();

  if (props.items === undefined) {
    var items = [];
  } else {
    items = props.items;
  }

  // function deleteAuftrag(delFalse) {
  //   props.deleteHandlerDisp(delFalse);
  // }
  // function cancelAuftrag(delFalse) {
  //   props.cancelHandlerDisp(delFalse);
  // }

  const submitHandler = (event) => {
    event.preventDefault();
    if (edittedContent.trim().length === 0) {
      
      return;
    }

    const contentArray = {
      id: editContentId,
      date: editContentDate,
      content: edittedContent,
      user: editContentUser,
    };
    props.recievedEdittedContent(contentArray);

    setDispEditContent(false);
    setEdittedContent();
  };

  const editContentHandler = (id, user, date) => {
    setDispEditContent(!dispEditContent);
    setEditContentId(id);
    setEditContentUser(user);
    setEditContentDate(date);
  };

  const onChangeHandler = (event) => {
    setEdittedContent(event.target.value);
    console.log(event.target.value)
  };

  return (
    <Fragment>
      <div className="content__container">
        <ul>
          {items.map((data) => (
            <li className="content__container__color" key={data.id}>
              <div >
                <div>
                  <button
                    onClick={() =>
                      editContentHandler(data.id, data.user, data.date)
                    }
                  >
                    <b>{data.user}</b>
                  </button>
                </div>
                {dispEditContent && editContentId === data.id ? (
                  <form onSubmit={submitHandler}>
                    {data.date}:
                    {
                      <input
                        defaultValue={data.content}
                        onChange={onChangeHandler}
                        size={data.content.length + 20}
                      />
                    }
                  </form>
                ) : (
                  <div className="contentBox">
                    {data.date}: {data.content}
                  </div>
                )}
                {/* {dispEditContent && editContentId === data.id && (
                  <form onSubmit={submitHandler}>
                    <input
                      defaultValue={data.content}
                      onChange={onChangeHandler}
                      size={data.content.length + 20}
                    />
                  </form>
                )} */}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <DeleteModal
        deleteHandlerModal={props.deleteModal}
        deleteHandlerDisp={deleteAuftrag}
        cancelHandlerDisp={cancelAuftrag}
      /> */}
    </Fragment>
  );
}

export default ContentDisplay;
