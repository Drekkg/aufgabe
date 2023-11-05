// import React, {useState} from "react";
// import "./FotoUploader.css";

// function FotoUploader(props) {

//     const [foto, setFoto] = useState([]);

//     function fotoUploadHandler(e) {
//       if(e.target.files.length !== 0){
       
//         setFoto((prev) => [...prev, URL.createObjectURL(e.target.files[0])]);
//       }
//     }
    
// return (
// <div className="FotoLabel">
//         <label className="custom-file-upload"> Foto Upload
//         <input id="FotoLabelButton" type="file" onChange={fotoUploadHandler} multiple/>
//         {foto.map((x) => (
//           <img src={x} id="Foto1" width="60rem" height="60rem" alt="" key={Math.random()}/>
//         ))}
       
//         </label>
//       </div>
// )           
// }
// export default FotoUploader;