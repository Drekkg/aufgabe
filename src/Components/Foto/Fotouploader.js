import React, {useState} from "react";

function FotoUploader(props) {

    const [foto, setFoto] = useState([]);

    function fotoUploadHandler(e) {
        console.log(e.target.files);
        setFoto((prev) => [...prev, URL.createObjectURL(e.target.files[0])]);
      }
    
return (
<div>
        <label>Foto Upload:</label>
        <input type="file" onChange={fotoUploadHandler} multiple/>
        {foto.map((x) => (
          <img src={x} width="60rem" height="60rem" alt=""/>
        ))}
      </div>
)
}
export default FotoUploader;