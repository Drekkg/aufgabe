import React from "react";

function AuftragContent(props) {
    return (
        <div>
            {<div>{props.contents}</div>} 
            <input type="text" placeholder="Kunde" />       
        </div>



    )
};

export default AuftragContent;