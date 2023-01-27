// import { useState } from "react";
import {FaDotCircle,FaTrashAlt} from "react-icons/fa"

const NotesList = ({noteText, handleDelete}) => {


    return (
      <ul id="notesContainer">
        {noteText.map((note) => (

          <li className="p-2" key={note.id}>
            {" "}
            <FaDotCircle
              className="me-3"
              style={{
                fontSize: "15px",
                color: "#DDD",
              }}
            /> {note.title} {" "}
            <FaTrashAlt
              className="trashIcon float-end fs-5 mt-1"
              style={{ color: "#DDD", cursor: "pointer" }}
              onClick = {()=> handleDelete(note.id)}
            />
          </li>

        ))}
      </ul>
    );
}
 
export default NotesList;