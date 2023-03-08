import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useOutletContext, useParams, Link, Outlet } from "react-router-dom"

export default function Edit() {
    const{id} = useParams();
    const navigate = useNavigate();
    const[note, setNote] = useOutletContext();
    const editingNote =  note.find(theNote => theNote.Id === id)
    const[title, setTitle] = useState(editingNote.Title);
    const[content, setContent] = useState(editingNote.Content);
    const[date, setDate] = useState(editingNote.realDate);
    

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    
    const formatDate = (when) => {
        const formatted = new Date(when).toLocaleString("en-US", options);
        if (formatted === "Invalid Date") {
            return "";
        }
        return formatted;
    };
   

    function save() {
        editingNote.Content = content;
        editingNote.Title = title;
        localStorage.setItem("notes", JSON.stringify(note));
        editingNote.Date = formatDate(date);
       
    }

    function deleteNote() {
        const answer = window.confirm("Are you sure?");
        if (answer) {
            const toNotDelete =  note.filter(theNote => theNote.Id !== id);

            if (Object.keys(note).length === 1) {
                setNote (toNotDelete)
                navigate(`/`, {replace: true});
                document.getElementById("noNote").style.display = "block";
            }
            else {
                setNote (toNotDelete) 
                navigate(`/view/${toNotDelete[0].Id}`, {replace: true});
            }
        }
    }
    
   


    
    return (
        <div className="edit">
            <div id="note-title">
                <input id="title-edit" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="datetime-local" value = {date} onChange={(e) => setDate(e.target.value)} />
                <div id="idkman">
                    <Link to={`/view/${id}`}>
                        <label id="save" onClick={save()}>Save</label>
                    </Link >
                    <label id="save" onClick={deleteNote}>Delete</label>
                </div>
                
            </div>
            <ReactQuill id="quill" theme = "snow" placeholder={"Your note here"} value={content} onChange={(value) => setContent(value)}/>

            {/* <Outlet context = {[note, setNote]}/> */}
        </div>
    )
}